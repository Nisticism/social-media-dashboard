import SmallCard from '../components/SmallCard'
import styles from './SmallCardList.module.css'

export default function SmallCardList({props}:any) {
  return (
    <div className={styles["small-cards-container"]}>
      <span className={`${props.className} ${styles["overview-text"]}`}>Overview - Today</span>
      <div className={props.className}>
        {props.smallCards.map((card:any) => {
          return <SmallCard key={card.id} smallCard={card}/>
        })}
      </div>
    </div>
  )
}