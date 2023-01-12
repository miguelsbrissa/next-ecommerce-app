import styles from '../../../styles/Categorie.module.sass'
import { Card } from '../card/card'

export const Categorie = ({ data, pageName }) => {
    return (
        <div className={styles.categorie}>
            <h1 className={styles.title}>{pageName}</h1>
            <div className={styles.products}>
                {
                    data.map(prod => (
                        <Card key={prod.id} img={prod.img} name={prod.name} price={prod.price} link={'/' + prod.categories[0] + '/' + prod.link} size={300} />
                    ))
                }
            </div>
        </div>
    )
}
