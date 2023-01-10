import Head from 'next/head'
import { HomePage, Header } from '../src/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce site</title>
        <meta name="description" content="E-commerce site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HomePage />
      </main>
    </>
  )
}
