import classes from './MyPosts.module.css';
import Post from './Post';
import React from 'react';

const MyPosts = (props) => {
  const postDataElements = props.postData.postData.map((item)=> {
    return (<Post message={item.message} like={item.like}/>)
  })
  let newPostElement = React.createRef();
  let hendelClick = () => {
    props.dispatch({type: 'NEW_MESSAGESPAGES_PAGE'})
  }
  let addMessagePost = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE_NEW_MESSAGE_TEXT", newText: text,})
  }
  
  return(
    <div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={addMessagePost} ref={newPostElement} value={props.postData.newPostTextMessages}/>
          <button onClick={hendelClick}>Add Post</button>
        </div>
        <div className={classes.posts}>
          {postDataElements}
        </div>
      </div>
  )
}
export default MyPosts;