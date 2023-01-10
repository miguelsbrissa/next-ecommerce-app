import Image from 'next/image'
import styles from '../../../styles/Card.module.sass'

export const Card = ({name, price, img, size}) => {
  return (
    <div className={styles.card}>
        <Image src={img} width={size} height={size} alt={'name'}/>
        <h1 className={styles.name}>{name}</h1>
        <h1 className={styles.price}>{price}</h1>
        <input type="button"  className={styles.button} value="Buy"/>
    </div>
  )
}
