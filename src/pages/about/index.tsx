import { GetStaticProps } from "next"
import Head from "next/head"
import { getPrismicClient } from "../../services/prismic"
import { RichText } from 'prismic-dom'
import Prismic from '@prismicio/client'
import { FaInstagram } from 'react-icons/fa'

type Content = {
  titleContent: string
  sweetdreamsBanner: string
  instagram: string
}

interface ContentProps {
  content: Content
}

export default function About({content}: ContentProps) {
  return (
    <>
      <Head>
        <title>Sweet Dreams | Sobre</title>
      </Head>
      <main className="block">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row justify-between items-center px-2 lg:px-0">
          <section className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl mt-52 md:mt-28 mb-5 text-center md:text-left"><span className="text-dark-green-sweetdreams">Sweet</span> <span className="text-dark-pink-sweetdreams">Dreams</span> Confeitaria</h1>
            <p className="text-base leading-8 text-dark-green-sweetdreams whitespace-pre-wrap">{content.titleContent}</p>
            <div className="hidden lg:block">
              <div className="flex items-center pt-5">
                <a href={content.instagram} className="my-4 ml-4 text-dark-pink-sweetdreams hover:text-project-cta text-3xl transition duration-500 transform hover:scale-105">
                  <FaInstagram/>
                </a>
              </div>
            </div>
          </section>
          <img src={content.sweetdreamsBanner} alt="Sweet Dreams Banner" className="max-w-xs lg:max-w-md my-5 lg:my-0"/>
          <div className="flex items-center lg:hidden">
            <a href={content.instagram} target="_blank" className="my-4 ml-4 text-dark-pink-sweetdreams hover:text-project-cta text-3xl transition duration-500 transform hover:scale-105">
              <FaInstagram target="_blank"/>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'about')
  ])

  // console.log("CONTENT ==> ", response.results[0].data)

  const {
   title_content, sweetdreams_banner, instagram,
  } = response.results[0].data

  const content = {
    titleContent: RichText.asText(title_content),
    sweetdreamsBanner: sweetdreams_banner.url,
    instagram: instagram.url,
  };

  // console.log(content)

  return {
    props: {
      content
    },
    revalidate: 60 * 60 * 12 // update every 12 hours
  }
}