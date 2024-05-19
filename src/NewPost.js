import React from 'react'

const NewPost = ({handleNewPost,title,setTitle,body,setBody}) => {
  
  return (
    <form action="" onSubmit = {handleNewPost} className = "newPostForm">
      <div className = "titleWrap">
        <label htmlFor="postTitle"> Tile:</label>
        <input type="text" 
          required
          id = "postTitle"
          value = {title}
          onChange = {(e) => setTitle(e.target.value)}
        />
      </div>

      <div className = "bodyWrap">
        <label htmlFor="postBody">Body:</label>
        <textarea type="text-area"
          id = "postBody"
          required
          value = {body}
          onChange = {(e)=>setBody(e.target.value)}
        />
      </div>


      <button
        type = "submit"
        className = "submitButton"
      >Submit</button>
    </form>
  )
}

export default NewPost