import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messages from './Message/Messages';
import React from 'react';


const Dialogs = (props) => {
 
const dialogsElements = props.dialogsData.dialogsData.map((names) =>{ 
  return(<DialogItem name={names.name} key={names.id}/>)
});

const messagesData = props.dialogsData.messages.map((dialog) => {
  return(<Messages dialog={dialog.message} key={dialog.id}/>)
});
let newElement = React.createRef();

const hendelClick = () => {
  props.dispatch({type: 'ADD-NEW-POST'});
  //props.updateNewPostText('');
  
}

let onPostChange = () => {
  let text = newElement.current.value;
  props.dispatch({type: 'UPDATE_NEW_POST_TEXT', newText: text});
}
  
  return(
    <div className={classes.dialogs}>
        <div className={classes.dialogsItem}> 
          { dialogsElements }
        </div>
        <div className={classes.messages}> 
          { messagesData }
        </div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={onPostChange} ref={newElement} value={props.dialogsData.newPostTextDialogs}/>
          <button onClick={hendelClick}>Add Post</button>
        </div>
    </div>
  )
}


export default Dialogs