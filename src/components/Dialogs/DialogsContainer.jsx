import React from 'react';
import store from '../../redux/redux-store';
import {addNewPostActionCreator} from'../../redux/profileReducer';
import {UpdateNewPostTextActionCreator} from'../../redux/profileReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
 console.log('dialod', props)
let state = store.getState();
//console.log('DialogsContainer', state)

const handelClick = () => {
  props.store.dispatch(addNewPostActionCreator()); 
}

let onPostChange = (text) => {
  //let text = newElement.current.value;
  props.store.dispatch(UpdateNewPostTextActionCreator(text));
}
  
  return(
    <Dialogs handelClick={handelClick} onPostChange={onPostChange} 
    dialogsData={state.profile.dialogsData} 
    messages={state.profile.messages}
    newPostTextDialogs={state.profile.newPostTextDialogs}
    />
  )
}
export default DialogsContainer;