import React from 'react';
import { newMessagesPageActionCreator } from '../../../../redux/messagesPageReducer';
import {updateNewMessageTextActionCreator} from '../../../../redux/messagesPageReducer';
import store from '../../../../redux/redux-store';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  console.log('MyPostsContainerprops', props)
  // стейт напрямую newMessagesPageActionCreator updateNewMessageTextActionCreator
  let state = store.getState();
  console.log('MyPostsContainerstate', state)

  let handelClick = () => {
    props.store.dispatch(newMessagesPageActionCreator())
  }
  let addMessagePost = (text) => {
    let action = updateNewMessageTextActionCreator(text)
    props.store.dispatch(action)
  }
  
  return(
    <MyPosts addMessagePost={addMessagePost} handelClick={handelClick}
     messages={state.messagesPage.messagesprofile.postData} 
     newPostTextDialogs={state.messagesPage.messagesprofile.newPostTextMessages}/>
  )
}
export default MyPostsContainer;