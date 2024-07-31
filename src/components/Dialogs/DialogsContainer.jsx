import React from 'react';
import store from '../../redux/redux-store';
import {addNewPostActionCreator} from'../../redux/profileReducer';
import {UpdateNewPostTextActionCreator} from'../../redux/profileReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>{ 
      (store) =>  {
          let state = store.getState();
          
  
          const handelClick = () => {
            store.dispatch(addNewPostActionCreator()); 
          }
  
          let onPostChange = (text) => {
            store.dispatch(UpdateNewPostTextActionCreator(text));
          }
  
          return <Dialogs handelClick={handelClick} onPostChange={onPostChange} 
              dialogsData={state.profile.dialogsData} 
              messages={state.profile.messages}
              newPostTextDialogs={state.profile.newPostTextDialogs}
        />}
        }
      </StoreContext.Consumer>
  ) 
}

export default DialogsContainer;