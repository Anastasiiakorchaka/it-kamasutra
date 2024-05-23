import classes from '../Dialogs.module.css'


const Messages = (props) =>{
  return(
    <div className={classes.message}>
      {props.dialog}
    </div>
  )
}
  

export default Messages