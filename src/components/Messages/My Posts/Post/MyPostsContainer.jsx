import React from 'react';
import { newMessagesPageActionCreator } from '../../../../redux/messagesPageReducer';
import {updateNewMessageTextActionCreator} from '../../../../redux/messagesPageReducer';
//import store from '../../../../redux/redux-store';
import MyPosts from './MyPosts';
import store from '../../../../redux/redux-store';
import StoreContext from '../../../../StoreContext';


const MyPostsContainer = (props) => {
  return(
    <StoreContext.Consumer>{
      (store) =>  {
        let state = store.getState();
        let handelClick = () => {
          store.dispatch(newMessagesPageActionCreator())
        }

        let addMessagePost = (text) => {
          let action = updateNewMessageTextActionCreator(text)
          store.dispatch(action)
        }
      
      return <MyPosts addMessagePost={addMessagePost} handelClick={handelClick}
        messages={state.messagesPage.messagesprofile.postData} 
        newPostTextDialogs={state.messagesPage.messagesprofile.newPostTextMessages}/>
      }
      }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer;