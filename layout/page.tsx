import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'

type MetaProps = {
  title: string
  description: string
}

type PageProps = {
  meta: MetaProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
    <main>
      <Header />
      <Navigation />
      {children}
    </main>
  </>
)

export default Page
