import { Header, Product } from "../../src/components";

export default function SingleProduct({ data }) {
    return (
        <>
            <Header />
            <Product data={data} />
        </>
    )
}

export async function getStaticPaths() {
    const { products } = await import('../../data/data.json')
    
    const allPaths = products.map(path => {
        return {
            params: {
                product_categorie: path.categories[0],
                single_product: path.link
            }
        }
    })
    console.log(allPaths)
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.single_product
    const { products } = await import('../../data/data.json')
    const prod = products.find(p => p.link === id)
    console.log(prod)
    return {
        props: {
            data: prod
        }
    }
}