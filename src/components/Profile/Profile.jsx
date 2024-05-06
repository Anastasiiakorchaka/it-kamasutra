import classes from './Profile.module.css';
import MyPosts from './My Posts/Post/MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

  return(
    <div>
      <ProfileInfo/>
      <MyPosts postData={props.postData}/>
    </div>
  )
}
export default Profile;