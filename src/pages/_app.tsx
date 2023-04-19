import type { AppProps } from 'next/app'
import '../styles/build.css'
import { Header } from '../components/Header'
import { Copyright } from '@/components/Copyright'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps}/>
      <Copyright />
    </>
  )
}
