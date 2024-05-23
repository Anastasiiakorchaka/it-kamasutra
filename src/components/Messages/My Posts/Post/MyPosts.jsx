import classes from './MyPosts.module.css';
import Post from './Post';
import React from 'react';

const MyPosts = (props) => {
  console.log('addNewPost', props)
  const postDataElements = props.postData.map((item)=> {
    return (<Post message={item.message} like={item.like}/>)
  })
  let newPostElement = React.createRef();
  let hendelClick = () => {
    props.newMessagesPage()
    props.updateNewMessageText('')
  }
  let addMessagePost = () => {
    let text = newPostElement.current.value;
    console.log(text)
    props.updateNewMessageText(text)
  }
  
  return(
    <div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={addMessagePost} ref={newPostElement} value={props.newPostTextMessages}/>
          <button onClick={hendelClick}>Add Post</button>
        </div>
        <div className={classes.posts}>
          {postDataElements}
        </div>
      </div>
  )
}
export default MyPosts;