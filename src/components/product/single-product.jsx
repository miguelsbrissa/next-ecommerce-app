import Image from 'next/image'
import styles from '../../../styles/Product.module.sass'

export const Product = ({data}) => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <Image src={data.img} width={600} height={600} alt={data.name} />
            </div>

            <div className={styles.description}>
                <h1 className={styles.title}>{data.name}</h1>
                <p className={styles.info}>{data.description}</p>
                <div className={styles.price}>
                    <h2 className={styles.quantity}>Quantity</h2>
                    <input className={styles.inputQut} placeholder='1' />
                    <h2 className={styles.value}>{data.price}</h2>
                </div>
                <input type="button" className={styles.buttonBuy} value="Buy" />
                <div className={styles.shipping}>
                    <div className={styles.shipbox}>
                        <h2>Shipping</h2>
                        <input className={styles.cep} placeholder='_____-___' />
                    </div>

                    <input type="button" className={styles.buttonOk} value="Ok" />
                </div>

            </div>
        </div>
    )
}
