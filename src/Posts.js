import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {
  return (
    <ul className='postUl'>
      {
        posts.map((items)=>(
          <li key = {items.id} className  = "postsList">
            <Link className = "postLink" to = {`post/${items.id}`}>{items.title}</Link>
            <Link className = "postLink" to = {`post/${items.id}`}>{items.body.length >= 15 ? items.body.slice(0,25)+"...":items.body}</Link>
            <p>{items.datetime}</p> 
          </li>
        ))
      }
    </ul>
  )
}

export default Posts