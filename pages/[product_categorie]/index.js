import { Categorie, Header } from "../../src/components";

export default function CategorieProducts({data, pageName, cat}) {
    return (
        <>
            <Header data={cat} />
            <Categorie data={data} pageName={pageName}/>
        </>
    )
}

export async function getStaticPaths() {
    const { categorie } = await import('../../data/data.json')
    const allPaths = categorie.map(path => {
        return {
            params: {
                product_categorie: path.link.toString()
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
    const id = context?.params.product_categorie
    const { products, categorie } = await import('../../data/data.json')
    const productsByCat = products.filter(prod => prod.categories.includes(id) === true)
    const pageName = categorie.find(cat => cat.link === id)
    console.log(productsByCat)
    return {
        props:{
            data: productsByCat,
            pageName: pageName.name,
            cat: categorie
        }
    }

}

