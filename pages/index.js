import Head from 'next/head'
import { HomePage, Header } from '../src/components'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>E-commerce site</title>
        <meta name="description" content="E-commerce site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={data.categorie}/>
      <main>
        <HomePage data={data.products}/>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const { products, categorie } = await import('../data/data.json')

  return {
    props:{
      data: {
        products,
        categorie
      }
    }
  }
}