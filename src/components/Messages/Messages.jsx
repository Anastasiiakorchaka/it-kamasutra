import classes from './Profile.module.css';
import MyPosts from './My Posts/Post/MyPosts';
import ProfileInfo from './ProfileInfo';

const Messages = (props) => {
  console.log('Messages', props.postData.newPostTextMessages)
  return(
    <div>
      <ProfileInfo/>
      <MyPosts postData={props.postData.postData} newPostTextMessages={props.postData.newPostTextMessages} 
      newMessagesPage={props.newMessagesPage} updateNewMessageText={props.updateNewMessageText} />
    </div>
  )
}
export default Messages;