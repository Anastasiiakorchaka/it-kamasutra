import classes from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  const postDataElements = props.postData.map((item)=> {
    return (<Post message={item.message} like={item.like}/>)
  })
  return(
    <div>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={classes.posts}>
          {postDataElements}
        </div>
      </div>
  )
}
export default MyPosts;