import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi'
import { GetStaticProps } from "next"
import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { useState } from "react"

type Post = {
  slug: string;
  title: string;
  cover: string;
}

interface PostsProps{
  posts: Post[]
  page: string
  totalPage: string
}

export default function Products({ posts: postsBlog, page, totalPage }: PostsProps) {
  const [posts, setPosts] = useState(postsBlog || [])
  const [currentPage, setCurrentPage] = useState(Number(page))

  async function reqPost(pageNumber: number) {
    const prismic = getPrismicClient()

    const response = await prismic.query([
      Prismic.Predicates.at('document.type', 'post')
    ], {
      orderings: '[document.last_publication_date desc]', //Ordenar pelo mais recente
      fetch: ['post.title', 'post.description', 'post.cover'],
      pageSize: 3,
      page: String(pageNumber)
    })
    return response
  }

  async function navigatePage(pageNumber: number) {
    const response = await reqPost(pageNumber)

    if (response.results.length === 0) {
      return
    }

    const getPosts = response.results.map( post => {
      return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        cover: post.data.cover.url,
      }
    })
    setCurrentPage(pageNumber)
    setPosts(getPosts)
  }

  return (
    <>
      <Head>
        <title>Sweet Dremas | Produtos</title>
      </Head>
      <main>
        <div>
          <h1 className="text-center text-dark-pink-sweetdreams pt-52 md:pt-32 lg:pt-28 pb-2 text-3xl">Confira nossas delícias</h1>
          <div className="flex flex-row flex-wrap items-center justify-center max-w-6xl mx-auto">
            {posts.map(post => (
                <div key={post.slug} className="px-2 pb-2" >
                  <div className="p-2 flex flex-col items-center justify-center w-56 h-80 border border-light-green-sweetdreams rounded">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      width={768}
                      height={410}
                      priority
                      quality={100}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII="
                      className="w-48 h-48 rounded from bg-gradient-to-r from-dark-green-sweetdreams to-pink-sweetdreams p-0.5"
                    />
                  <strong className="text-center text-dark-pink-sweetdreams text-base py-2">{post.title}</strong>
                  <Link href={`/posts/${post.slug}`} target="_blank" key={post.slug}>
                    <button className="bg-dark-green-sweetdreams border border-transparent text-base text-white px-2 py-1 rounded transition duration-500 transform hover:scale-105 hover:border hover:border-dark-pink-sweetdreams">Clique e Confira</button>
                  </Link>
                  </div>
                </div>
            ))}
          </div>

          <div className="flex items-center justify-between max-w-full">
              {Number(currentPage) >= 2 && (
                <div>
                  <button onClick={() => navigatePage(1)} className="bg-dark-green-sweetdreams mx-1 border-transparent hover:border-2 transition duration-500 hover:border-pink-sweetdreams text-project-text p-1 rounded text-2xl transform hover:scale-105">
                  <FiChevronsLeft/>
                  </button>
                  <button onClick={() => navigatePage(Number(currentPage - 1))} className="bg-dark-green-sweetdreams mx-1 border-transparent hover:border-2 transition duration-500 hover:border-pink-sweetdreams text-project-text p-1 rounded text-2xl transform hover:scale-105">
                    <FiChevronLeft/>
                  </button>
                </div>
              )}
            {Number(currentPage) < Number(totalPage) && (
              <div>
                <button onClick={() => navigatePage(Number(currentPage + 1))} className="bg-dark-green-sweetdreams mx-1 border-transparent hover:border-2 transition duration-500 hover:border-pink-sweetdreams text-project-text p-1 rounded text-2xl transform hover:scale-105">
                  <FiChevronRight/>
                </button>
                <button onClick={() => navigatePage(Number(totalPage))} className="bg-dark-green-sweetdreams mx-1 border-transparent hover:border-2 transition duration-500 hover:border-pink-sweetdreams text-project-text p-1 rounded text-2xl transform hover:scale-105">
                  <FiChevronsRight/>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    orderings: '[document.last_publication_date desc]', //Ordenar pelo mais recente
    fetch: ['post.title', 'post.description', 'post.cover'],
    pageSize: 10
  })

  console.log(JSON.stringify(response, null, 2))

  const posts = response.results.map( post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      cover: post.data.cover.url,
    }
  })

  return {
    props: {
      posts,
      page: response.page,
      totalPage: response.total_pages
    },
    revalidate: 60 * 30 // update every 30 minutes
  }
}