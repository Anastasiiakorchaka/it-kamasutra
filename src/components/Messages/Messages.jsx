import classes from './Profile.module.css';
import MyPosts from './My Posts/Post/MyPosts';
import ProfileInfo from './ProfileInfo';

const Messages = (props) => {

  return(
    <div>
      <ProfileInfo/>
      <MyPosts postData={props.postData.postData} newMessagesPage={props.newMessagesPage}/>
    </div>
  )
}
export default Messages;