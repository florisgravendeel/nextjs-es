import * as React from 'react'
import { ICard } from '../types'
import ReactStars from "react-rating-stars-component";


type Props = {
  post: ICard
  deletePost: (id: number) => void
}

const ICTCard: React.FC<Props> = ({ post, deletePost }) => {
  return (
    <div className='Card'>
      <div className='Card--body'>
        <h1 className='Card--body-title'>{post.title}</h1>
        <p className='Card--body-text'>{post.body}</p><br/>
        <p className='Card--body-text-2'>Dag van de week: {post.day}</p>
      </div>
      <button className='Card__button' onClick={() => deletePost(post.id)}>
        Delete
      </button>
        {Rating(post.rating)}
    </div>
  )
}

function Rating(stars) {
    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            value={stars}
            edit={false}
        />
    )
}
const ratingChanged = (newRating) => {
    console.log(newRating);
};


export default ICTCard
