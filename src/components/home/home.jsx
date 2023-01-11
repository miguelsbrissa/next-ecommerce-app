import styles from '../../../styles/Home.module.sass'
import { Card } from '../card/card'

export const HomePage = ({data}) => {
  return (
    <div className={styles.home}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada justo at
            neque tincidunt dignissim.
            Nulla non nibh arcu.</h1>
          
          <div className={styles.all_cards}>
            {
              data.map(prod => (
                <Card key={prod.id} img={prod.img} name={prod.name} price={prod.price} size={300}/>
              ))
            }
          </div>
        </div>
  )
}
