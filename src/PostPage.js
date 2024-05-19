import React from 'react'
import {useParams,Link} from 'react-router-dom'


const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <>
      {(post && 
		<article>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<button
				onClick = {() => handleDelete(post.id)}
			>Delete</button>

		</article>
	)}
      {(!post && <>
			<h2>Sorry post not found</h2>
			<Link to = '/'>Go to home</Link>
      </>
	)}
    </>

  )
}

export default PostPage