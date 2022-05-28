import Head from 'next/head'
import Image from 'next/image'
import Main from '../Components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8520107381438109"
     crossOrigin="anonymous"></script>
      </Head>
      <Main/>
    </div>
  )
}
