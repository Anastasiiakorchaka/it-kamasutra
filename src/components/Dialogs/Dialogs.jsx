import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messages from './Message/Messages';
import React from 'react';


const Dialogs = (props) => {
 console.log('dialog', props.addNewPost)
 
const dialogsElements = props.dialogsData.dialogsData.map((names) =>{ 
  return(<DialogItem name={names.name} key={names.id}/>)
});

const messagesData = props.dialogsData.messages.map((dialog) => {
  return(<Messages dialog={dialog.message} key={dialog.id}/>)
});
let newElement = React.createRef();

const hendelClick = () => {
  let text = newElement.current.value;
  props.addNewPost(text)
  // alert(text)
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
          <textarea ref={newElement}></textarea>
          <button onClick={hendelClick}>Add Post</button>
        </div>
    </div>
  )
}


export default Dialogs