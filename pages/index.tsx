import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import ICTCard from '../components/ICTCard'
import { ICard } from '../types'
import Select from "react-select";

const sortOptions = [
  { value: 'name', label: 'Naam' },
  { value: 'day', label: 'Dag' },
  { value: 'mentor', label: 'Gildemeester' },
  { value: 'rating', label: 'Laagst aantal sterren' },
  { value: 'rating-reverse', label: 'Hoogst aantal sterren' }
]
let latestSortValue = null

export default function IndexPage({
  cards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [cardList, setCardList] = React.useState(cards)

  const changeCardRating = async (id: number, rating) => {
    // const cards: ICard[] = cardList.filter((post: ICard) => post.id !== id)
    const cards = cardList.slice()
    // get card with id, and edit rating.
    for (var i = 0; i < cards.length; i++){
      if (cards[i].id == id){
        cards[i].rating = rating;
        break;
      }
    }
    if (latestSortValue != null){
      setSortType(latestSortValue)
      return
    }
    setCardList(cards)
  }

  if (!cardList) return <h1>Loading...</h1>

  function setSortType(sortValue: string) {
    const cards = cardList.slice()
    latestSortValue = sortValue
    switch (sortValue) {
      case "rating":
        cards.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
        break;
      case "rating-reverse":
        cards.sort((a, b) => (a.rating > b.rating) ? -1 : 1)
        break;
      case "name":
        cards.sort((a, b) => (a.title > b.title) ? 1 : -1)
        break;
      case "day":
        cards.sort((a, b) => (a.day_value > b.day_value) ? 1 : -1)
        break;
      case "mentor":
        cards.sort((a, b) => (a.guild_leader > b.guild_leader) ? 1 : -1)
        break;
      default:
        break;
    }
    setCardList(cards)
  }

  return (
    <main className='container'>
      <h1>Rate de Open-ICT Richtingen!</h1>
      <form className='Form'>
        <div>
          <div className='Form--field'>
            <Select options={sortOptions} instanceId={"as25jbba422apq"} onChange={(ev) => setSortType(ev.value)}/>
          </div>
        </div>
      </form>
      {cardList.map((post: ICard) => (
        <ICTCard key={post.id} changeCardRating={changeCardRating} post={post} />
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/ict-info')
  const cards: ICard[] = await res.json()

  return {
    props: {
      cards,
    },
  }
}
