import Head from "next/head"
import { GetStaticProps } from "next"
import { getPrismicClient } from "../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type Content = {
  titleContent: string
  sweetdreamBanner: string
  cakeTitle: string
  cakeContent: string
  cakeBanner: string
  cupcakeBanner: string
  cupcakeTitle: string
  cupcakeContent: string
  brownieTitle: string
  brownieContent: string
  brownie_banner: string
  seasonalBanner: string
  seasonalMenu: string
  seasonalContent: string
}

interface ContentProps {
  content: Content
}

export default function Home({ content }: ContentProps) {

  const handleEmailClick = () => {
    const message = encodeURIComponent('Olá, para efetuar seu pedido preencha os campos abaixo: \n\nTipo do produto (Bolo, Cupcake, Brownie ou Outros): \nSabor: \n Deseja alguma alteração na receita? Se sim descreve aqui que entraremos em contato para confirmar: \n\n\n Abaixo preencha seus dados por favor: \n\n Nome: \n Celular: \n Endereço: \n\n\n\n Fique atento(a) ao seu telefone que logo entraremos em contato para confirmar seu pedido. \n\n Nós da Sweet Dreams desejamos tudo de bom!');
    const subject = encodeURIComponent('Sweet Dreams || Envio de pedido');
    window.open(`mailto:weslley.m.fortunato@gmail.com?subject=${subject}&body=${message}`);
  }

  return (
    <>
      <Head>
        <title>Sweet Dreams</title>
      </Head>
      <main className="text-center lg:text-left grid place-content-center">

        <div className="min-h-[calc(100vh_-_12rem)] lg:min-h-[calc(100vh_-_5rem)] ml-0 lg:ml-6 mx-auto max-w-6xl flex flex-col lg:flex-row items-center mt-2 lg:mt-10">
          <div className="flex items-center flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center">
              <section className="max-w-sm lg:max-w-xl block">
                <h1 className="text-4xl lg:text-5xl leading-snug mt-52 md:mt-36 lg:mt-20 mb-2 lg:mb-5 text-black"><span className="text-dark-green-sweetdreams">Sweet</span> <span className="text-pink-sweetdreams">Dreams</span> Confeitaria</h1>
                <span className="text-base lg:text-lg leading-8 text-dark-pink-sweetdreams">{content.titleContent}</span>
              </section>
              <a>
                <button onClick={handleEmailClick} className="hidden lg:block w-full scale-90 lg:scale-100 lg:w-56 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-105 hover:font-bold">
                FAÇA SEU PEDIDO!
                </button>
              </a>
              <p className="text-project-cta mt-3">Atendemos toda a região de Victoria e Langford</p>
            </div>
            <img src={content.sweetdreamBanner} alt="Sweet Dream Banner" className="max-w-xs lg:max-w-lg mt-3 lg:mt-0 rounded ml-0 lg:ml-5"/>
          </div>
          <a>
            <button onClick={handleEmailClick} className="lg:hidden w-screen scale-90 lg:scale-100 lg:w-56 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-95 lg:hover:scale-105 hover:font-bold">
              FAÇA SEU PEDIDO!
            </button>
          </a>
        </div>

        <hr className="max-w-6xl bottom-0 border border-light-green-sweetdreams opacity-30 my-20 text-blue-300" />

        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-center ml-0 lg:ml-6">
          <div className="flx flex-col">
            <section className="max-w-2xl">
              <h2 className="text-2xl lg:text-4xl leading-snug text-dark-green-sweetdreams mb-3 lg:mb-2">{content.cakeTitle}</h2>
              <span className="text-base leading-snug text-dark-pink-sweetdreams">{content.cakeContent}</span>
            </section>
            <a onClick={handleEmailClick}>
              <button className="hidden lg:block w-full scale-90 lg:scale-100 lg:w-80 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-105 hover:font-bold">
              EXPERIMENTE AGORA MESMO
              </button>
            </a>
          </div>
          <img src={content.cakeBanner} alt="Cake Banner" className="max-w-xs lg:max-w-lg mt-3 lg:mt-0 rounded mr-0 lg:mr-5"/>
          <a>
            <button onClick={handleEmailClick} className="lg:hidden w-screen scale-90 lg:scale-100 lg:w-56 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-95 lg:hover:scale-105 hover:font-bold">
            EXPERIMENTE AGORA MESMO
            </button>
          </a>
        </div>

        <hr className="max-w-6xl bottom-0 border border-light-green-sweetdreams opacity-30 my-20 text-blue-300" />

        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-center lg:ml-6">
          <img src={content.cupcakeBanner} alt="Cupcake Banner" className="max-w-xs lg:max-w-lg mb-3 lg:mb-0 rounded mr-0 lg:mr-5"/>
          <div className="flex flex-col items-center">
            <section className="max-w-2xl">
              <h2 className="text-2xl lg:text-4xl leading-snug text-dark-green-sweetdreams mb-3 lg:mb-2">{content.cupcakeTitle}</h2>
              <span className="text-base leading-snug text-dark-pink-sweetdreams">{content.cupcakeContent}</span>
            </section>
            <div className="flex flex-col justify-center items-center">
              <a>
                <button onClick={handleEmailClick} className="w-screen scale-90 lg:scale-100 lg:w-80 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-105 hover:font-bold mb-2">
                VENHA EXPERIMENTAR
                </button>
              </a>
              <p className="text-project-cta">Não deixe para a última hora!</p>
            </div>
          </div>
        </div>

        <hr className="max-w-6xl bottom-0 border border-light-green-sweetdreams opacity-30 my-20 text-blue-300" />

        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-center lg:ml-6">
          <div className="flx flex-col">
            <section className="max-w-2xl">
              <h2 className="text-2xl lg:text-4xl leading-snug text-dark-green-sweetdreams mb-3 lg:mb-2">{content.brownieTitle}</h2>
              <span className="text-base leading-snug text-dark-pink-sweetdreams">{content.brownieContent}</span>
            </section>
            <a>
              <button onClick={handleEmailClick} className="hidden lg:block w-full scale-90 lg:scale-100 lg:w-80 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-105 hover:font-bold">
              PEÇA JÁ O SEU
              </button>
            </a>
          </div>
          <img src={content.brownie_banner} alt="Brownie Banner" className="max-w-xs lg:max-w-lg mt-3 lg:mt-0 rounded mr-0 lg:mr-5 pl-0 lg:pl-2"/>
          <a>
            <button onClick={handleEmailClick} className="lg:hidden w-screen scale-90 lg:scale-100 lg:w-56 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-95 lg:hover:scale-105 hover:font-bold">
            PEÇA JÁ O SEU
            </button>
          </a>
        </div>

        <hr className="max-w-6xl bottom-0 border border-light-green-sweetdreams opacity-30 my-20 text-blue-300" />

        <div className="mx-auto max-w-6xl mb-20 flex flex-col lg:flex-row items-center justify-center lg:ml-6">
          <img src={content.seasonalBanner} alt="Seasonal Products Banner" className="max-w-xs lg:max-w-lg mb-3 lg:mb-0 rounded mr-0 lg:mr-5"/>
          <div className="flex flex-col items-center">
            <section className="max-w-2xl">
              <h2 className="text-2xl lg:text-4xl leading-snug text-dark-green-sweetdreams mb-3 lg:mb-3">{content.seasonalMenu}</h2>
              <span className="text-base leading-snug text-dark-pink-sweetdreams">{content.seasonalContent}</span>
            </section>
            <div className="flex flex-col justify-center items-center">
              <a>
                <button onClick={handleEmailClick} className="w-screen scale-90 lg:scale-100 lg:w-80 lg:mr-0 bg-dark-green-sweetdreams border-0 py-3 px-5 mt-10 rounded-lg text-project-text focus:animate-pulse duration-500 ease-in-out transform hover:scale-105 hover:font-bold mb-2">
                VENHA EXPERIMENTAR
                </button>
              </a>
              <p className="text-project-cta">Pedidos sob demanda</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  // console.log(response.results[0].data)

  const {
    title_content, sweetdream_banner, cake_title, cake_content, cake_banner, cupcake_banner, cupcake_title, cupcake_content, brownie_title, brownie_content, brownie_banner, seasonal_banner, seasonal_menu, seasonal_content
  } = response.results[0].data

  const content = {
    titleContent: RichText.asText(title_content),
    sweetdreamBanner: sweetdream_banner.url,
    cakeTitle: RichText.asText(cake_title),
    cakeContent: RichText.asText(cake_content),
    cakeBanner: cake_banner.url,
    cupcakeBanner: cupcake_banner.url,
    cupcakeTitle: RichText.asText(cupcake_title),
    cupcakeContent: RichText.asText(cupcake_content),
    brownieTitle: RichText.asText(brownie_title),
    brownieContent: RichText.asText(brownie_content),
    brownie_banner: brownie_banner.url,
    seasonalBanner: seasonal_banner.url,
    seasonalMenu: RichText.asText(seasonal_menu),
    seasonalContent: RichText.asText(seasonal_content),
  }

  return {
    props: {
     content 
    },
    revalidate: 60 * 2 //update every 2 minutes
  }
}