import React from 'react'

const PostForm = () => {
  return (
    <div>
      <h1>添加内容：</h1>
      <form onSubmit={() => console.log('=====onSubmit')}>
        <div>
          <label>Title</label>
          <br />
          <input type="text" name="title" />
        </div>
        <div>
          <label>Body</label>
          <br />
          <textarea tname="body" />
        </div>
        <button type="submit">添加</button>
      </form>
    </div>
  )
}

export default PostForm
