import LargeCard from '../components/LargeCard'

export default function LargeCardList({ props }:any) {
  return (
    <div className={props.className}>
      {props.largeCards.map((card:any) => {
        return <LargeCard key={card.id} largeCard={card}/>
      })}
    </div>
  )
}