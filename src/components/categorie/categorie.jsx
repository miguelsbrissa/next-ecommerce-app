import styles from '../../../styles/Categorie.module.sass'
import { Card } from '../card/card'

export const Categorie = () => {
    return (
        <div className={styles.categorie}>
            <h1 className={styles.title}>Categorie name</h1>
            <div className={styles.products}>
                <Card img={'/images/grape.png'} name={'grape'} price={'$1.99'} size={250}/>
                <Card img={'/images/orange.png'} name={'orange'} price={'$1.99'} size={250}/>
                <Card img={'/images/pineapple.png'} name={'pineapple'} price={'$1.99'} size={250}/>
                <Card img={'/images/apple.png'} name={'apple'} price={'$1.99'} size={250}/>
                <Card img={'/images/grape.png'} name={'grape'} price={'$1.99'} size={250}/>
                <Card img={'/images/orange.png'} name={'orange'} price={'$1.99'} size={250}/>
                <Card img={'/images/pineapple.png'} name={'pineapple'} price={'$1.99'} size={250}/>
                <Card img={'/images/apple.png'} name={'apple'} price={'$1.99'} size={250}/>
                <Card img={'/images/grape.png'} name={'grape'} price={'$1.99'} size={250}/>
                <Card img={'/images/orange.png'} name={'orange'} price={'$1.99'} size={250}/>
                <Card img={'/images/pineapple.png'} name={'pineapple'} price={'$1.99'} size={250}/>
                <Card img={'/images/apple.png'} name={'apple'} price={'$1.99'} size={250}/>
            </div>
        </div>
    )
}
