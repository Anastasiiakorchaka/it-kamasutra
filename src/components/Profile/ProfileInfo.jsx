import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return(
    <div className={classes.ProfileInfo}>
      <div className={classes.backgroundAvatar}>
        <img className={classes.backgroundAvatar} src= 'https://thumbs.dreamstime.com/z/%D1%83%D0%BB%D0%B8%D1%86%D0%B0-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-113533343.jpg'/>
      </div>
      <div className={classes.description}>
        ava+ description
      </div>
    </div>
  )
}
export default ProfileInfo;      