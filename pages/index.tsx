import Head from 'next/head'
import styles from '../shared/Home.module.css'
import Header from '@components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forwardslash Development</title>
        <meta name="description" content="Modern web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  )
}
