import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messages from './Message/Messages';


const Dialogs = (props) => {
 

const dialogsElements = props.dialogsData.map((names) =>{ 
  return(<DialogItem name={names.name} key={names.id}/>)
});

const messagesData = props.messages.map((dialog) => {
  return(<Messages dialog={dialog.message} key={dialog.id}/>)
});
  
  return(
    <div className={classes.dialogs}>
        <div className={classes.dialogsItem}> 
          { dialogsElements }
        </div>
        <div className={classes.messages}> 
          { messagesData }
        </div>
    </div>
  )
}


export default Dialogs