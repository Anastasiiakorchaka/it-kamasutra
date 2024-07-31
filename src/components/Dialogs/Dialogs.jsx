import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messages from './Message/Messages';
import React from 'react';


const Dialogs = (props) => {
  console.log('Dialogs', props.dialogsData)
 
const dialogsElements = props.dialogsData.map((names) =>{ 
  return(<DialogItem name={names.name} key={names.id}/>)
});

const messagesData = props.messages.map((dialog) => {
  return(<Messages dialog={dialog.message} key={dialog.id}/>)
});
let newElement = React.createRef();

const handelClick = () => {
  props.handelClick(); 
}

let onPostChange = () => {
  let text = newElement.current.value;
  props.onPostChange(text);
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
          <textarea onChange={onPostChange} ref={newElement} value={props.newPostTextDialogs}/>
          <button onClick={handelClick}>Add Post</button>
        </div>
    </div>
  )
}


export default Dialogs