import { newMessagesPage } from '../../../../redux/state';
import classes from './MyPosts.module.css';
import Post from './Post';
import React from 'react';

const MyPosts = (props) => {
  console.log('addNewPost', props)
  const postDataElements = props.postData.map((item)=> {
    return (<Post message={item.message} like={item.like}/>)
  })
  let newPostElement = React.createRef();

  let addMessagePost = () => {
    let text = newPostElement.current.value;
    props.newMessagesPage(text)
    console.log(newMessagesPage)
  }
  
  return(
    <div>
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement} />
          <button onClick={addMessagePost}>Add Post</button>
        </div>
        <div className={classes.posts}>
          {postDataElements}
        </div>
      </div>
  )
}
export default MyPosts;