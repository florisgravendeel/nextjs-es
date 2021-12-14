import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import AddPost from '../components/AddPost'
import ICTCard from '../components/ICTCard'
import ICTSelect from '../components/ICTSelect'
import { ICard } from '../types'

export default function IndexPage({
  cards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [cardList, setCardList] = React.useState(cards)

  const addPost = async (e: React.FormEvent, formData: ICard) => {
    e.preventDefault()
    const post: ICard = {
      day_value: 0,
      guild_leader: "",
      rating: 0,
      day: "IDK",
      id: Math.random(),
      title: formData.title,
      body: formData.body
    }
    setCardList([post, ...cardList])
  }

  const deletePost = async (id: number) => {
    const cards: ICard[] = cardList.filter((post: ICard) => post.id !== id)
    console.log(cards)

    setCardList(cards)
  }

  if (!cardList) return <h1>Loading...</h1>


  function setSortType(sortValue: string) {
    const cards = cardList.slice()
    console.log(sortValue)
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
      default:
        break;
    }
    setCardList(cards)
  }

  return (
    <main className='container'>
      <h1>Open-ICT Richtingen</h1>
      <ICTSelect/>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="name">Naam</option>
        <option value="rating">Beoordeling (slechtste naar beste)</option>
        <option value="rating-reverse">Beoordeling (beste naar slechtste)</option>
        <option value="day">Dag</option>
      </select>
      <AddPost savePost={addPost} />
      {cardList.map((post: ICard) => (
        <ICTCard key={post.id} deletePost={deletePost} post={post} />
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
