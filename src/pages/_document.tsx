import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-white font-poppins text-lg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
