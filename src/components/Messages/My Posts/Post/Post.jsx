import classes from './Post.module.css';


const Post = (props) => {
  return(
    <div className={classes.allItem}>
        <h3>My posts</h3>
          <div className={classes.item}>
            <img src='https://img.freepik.com/premium-photo/beautiful-girl-avatar_984951-132.jpg'></img>
            <div>
              {props.message}
            </div>
            <div>
              <span>like {props.like}</span>
            </div>
          </div>
        </div>
  )
}
export default Post;