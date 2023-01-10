import Image from 'next/image'
import styles from '../../../styles/Product.module.sass'

export const Product = () => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <Image src={'/images/orange.png'} width={600} height={600} alt={'Product'} />
            </div>

            <div className={styles.description}>
                <h1 className={styles.title}>Name</h1>
                <p className={styles.info}>Ut rhoncus risus eu velit vulputate
                    malesuada. Cras pretium tempor mi, et elementum magna tristique non.
                    Duis et elementum nibh. Aliquam pellentesque, enim sit amet molestie pretium,
                    sapien purus maximus magna, sit amet rhoncus metus massa at metus.
                </p>
                <div className={styles.price}>
                    <h2 className={styles.quantity}>Quantity</h2>
                    <input className={styles.inputQut} placeholder='1' />
                    <h2 className={styles.value}>$ 1.99</h2>
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
