import classes from './Profile.module.css';

const Profile = () => {
  return(
    <div className={classes.content}>
      <div className={classes.backgroundAvatar}>
        <img src= 'https://thumbs.dreamstime.com/z/%D1%83%D0%BB%D0%B8%D1%86%D0%B0-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-113533343.jpg'/>
      </div>
      <div>
        ava+ description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            post1
          </div>
          <div className={classes.item}>
            post2
          </div>
          <div className={classes.item}>
            post3
          </div>
        </div>
      </div>

    </div>
  )
}
export default Profile;