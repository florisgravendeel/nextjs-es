import * as React from 'react'
import { ICard } from '../types'
import ReactStars from "react-rating-stars-component";


type Props = {
  post: ICard
  deletePost: (id: number, stars: number) => void
}

const ICTCard: React.FC<Props> = ({ post, deletePost }) => {

    const ratingChanged = (newRating) => {
        deletePost(post.id, newRating)
    }

    return (
    <div className='Card'>
      <div className='Card--body'>
        <h1 className='Card--body-title'>{post.title}</h1>
        <p className='Card--body-text'>{post.body}</p><br/>
        <p className='Card--body-text-2'>Gilde: {post.day}</p>
        <p className='Card--body-text-2'>Gildemeester: {post.guild_leader}</p>
      </div>
        <div className='stars'>
            Beoordeling
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                value={post.rating}
                edit={true}
            />
        </div>
    </div>
  )
}

      // <button className='Card__button' onClick={() => deletePost(post.id)}>
      //   Delete
      // </button>

export default ICTCard
