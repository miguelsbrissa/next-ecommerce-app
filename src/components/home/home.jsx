import styles from '../../../styles/Home.module.sass'
import { Card } from '../card/card'

export const HomePage = () => {
  return (
    <div className={styles.home}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada justo at
            neque tincidunt dignissim.
            Nulla non nibh arcu.</h1>
          
          <div className={styles.all_cards}>
            <Card img={'/images/grape.png'} name={'grape'} price={'$1.99'} size={300}/>
            <Card img={'/images/orange.png'} name={'orange'} price={'$1.99'} size={300}/>
            <Card img={'/images/pineapple.png'} name={'pineapple'} price={'$1.99'} size={300}/>
            <Card img={'/images/apple.png'} name={'apple'} price={'$1.99'} size={300}/>
          </div>
        </div>
  )
}
