import { getPrismicClient } from "@/services/prismic";
import { GetServerSideProps } from "next";
import {RichText} from 'prismic-dom'
import Head from "next/head";
import Image from "next/image";

interface ProductProps {
  post: {
    slug: string
    title: string
    cover: string
    description: Array<{ type: string; text: string }>
  }
}

export default function Product({ post }: ProductProps) {
  return (
    <>
      <Head>
        <title>Sweet Dreams | {post.title}</title>
      </Head>
      <main className="max-w-6xl mx-auto px-8">
        <div>
          <article className="flex flex-col items-center justify-center">
            <h1 className="text-dark-green-sweetdreams my-5 md:mt-28 text-2xl uppercase">{post.title}</h1>
            <Image
              src={post.cover}
              alt={post.title}
              width={768}
              height={410}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII="
              quality={100}
              className="md:max-w-md max-h-96 rounded from bg-gradient-to-r from-dark-green-sweetdreams to-pink-sweetdreams p-0.5 mb-5"
            />
            <div className="text-dark-pink-sweetdreams text-base">
              {post.description.map((item, index) => {
                if (item.type === "list-item") {
                  return (
                    <div key={index} className="my-2">
                     &#8226; {item.text}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: RichText.asHtml([item]) }}
                      className="my-2 uppercase"
                    />
                  );
                }
              })}
            </div>

            
          </article>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params
  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('post', String(slug), {})

  if (!response) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  const post = {
    slug: slug,
    title: RichText.asText(response.data.title),
    cover: response.data.cover.url,
    description: response.data.description.map((item) => ({
      type: item.type,
      text: item.text,
    })),
  };

  return {
    props: {
      post
    }
  }
}

