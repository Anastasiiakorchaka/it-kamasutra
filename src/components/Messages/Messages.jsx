import MyPostsContainer from './My Posts/Post/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

const Messages = (props) => {
  console.log('messages', props.store)
  return(
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}
export default Messages;