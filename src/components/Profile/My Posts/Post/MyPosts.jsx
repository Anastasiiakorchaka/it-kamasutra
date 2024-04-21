import classes from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
  return(
    <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={classes.posts}>
          <Post message='Hi, how are you' like='33'/>
          <Post message='I am fine' like='14'/>
          <Post message='I am learn JS' like ='55'/>
        </div>
      </div>
  )
}
export default MyPosts;