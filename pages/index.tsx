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

  return (
    <main className='container'>
      <h1>Open-ICT Richtingen</h1>
      <ICTSelect/>
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
