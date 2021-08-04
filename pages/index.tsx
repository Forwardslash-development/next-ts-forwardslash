import Head from 'next/head'
import Header from 'components/header'
import Navigation from '@components/navigation'
export default function Home() {
  return (
    <>
      <Head>
        <title>Forwardslash Development</title>
        <meta name="description" content="Modern web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Navigation />
      </main>
    </>
  )
}
