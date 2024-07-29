import classes from './MyPosts.module.css';
import Post from './Post';
import React from 'react';


const MyPosts = (props) => {
  const postDataElements = props.messages.map((item)=> {
    return (<Post message={item.message} like={item.like}/>)
  })
  let newPostElement = React.createRef();
  let onhandelClick = () => {
    props.handelClick()
  }
  let addMessagePost = () => {
    let text = newPostElement.current.value;
    props.addMessagePost(text)
  }
  
  return(
    <div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={addMessagePost} ref={newPostElement} value={props.newPostTextDialogs}/>
          <button onClick={onhandelClick}>Add Post</button>
        </div>
        <div className={classes.posts}>
          {postDataElements}
        </div>
      </div>
  )
}
export default MyPosts;