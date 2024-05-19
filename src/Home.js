import React from 'react'
import Posts from './Posts.js';

const Home = ({posts}) => {
  return (
    <>
        {(posts.length?(
            <Posts
                posts = {posts.reverse()}			
            />
        ):(<p style = {{marginTop:"10vh"}}>No Posts</p>))}

    </>
  )
}

export default Home