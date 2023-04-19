import Image from "next/image"
import logoTransparent from '../../../public/images/logotransparent.png'
import Link from "next/link"
import { useRouter } from "next/router"

export function Header () {
  const router = useRouter()

  const { asPath } = useRouter();

  return (
    <header className="fixed w-full h-48 md:h-24 border-b border-light-green-sweetdreams bg-dark-green-sweetdreams py-2 md:py-0 z-10">
      <div className="max-w-6xl h-24 mx-auto px-2 flex items-center justify-between flex-col md:flex-row">
        <Link href='/'>
          <Image src={logoTransparent} alt="Site Logo" width={130} className="cursor-pointer" priority/>
        </Link>
        <div>
          <nav className="ml-auto mr-auto md:ml-20 h-24 block ">
            <Link href='/' className={`inline-block relative md:px-2 h-24 leading-24 transition duration-400 hover:text-project-text transform hover:scale-105 ${asPath === "/" ? "text-light-green-sweetdreams underline" : "text-white"}`}>
              Home
            </Link>
            <Link href='/posts' className={`inline-block relative md:px-2 h-24 leading-24 ml-6 transition duration-400 hover:text-project-text transform hover:scale-105 ${asPath === "/posts" ? "text-light-green-sweetdreams underline" : "text-white"}`}>
              Produtos
            </Link>
            <Link href='/about' className={`inline-block relative md:px-2 h-24 leading-24 ml-6 transition duration-400 hover:text-project-text transform hover:scale-105 ${asPath === "/about" ? "text-light-green-sweetdreams underline" : "text-white"}`}>
              Sobre
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}