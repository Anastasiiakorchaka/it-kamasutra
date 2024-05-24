import classes from './Profile.module.css';
import MyPosts from './My Posts/Post/MyPosts';
import ProfileInfo from './ProfileInfo';

const Messages = (props) => {
  return(
    <div>
      <ProfileInfo/>
      <MyPosts  dispatch={props.dispatch} postData={props.postData.messagesprofile} />
    </div>
  )
}
export default Messages;