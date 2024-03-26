import classes from './Navbar.module.css';

function Navbar () {
  return (
    <nav>
    <div className={classes.nav}>
      <div >
        <a href="#" className={classes.item}>Profile</a>
      </div>
      <div className={classes.item}>
        <a href="#" className={classes.item}>Messages</a>
      </div>
      <div className={classes.item}>
        <a href="#" className={classes.item}>News</a>
      </div>
      <div className={classes.item}>
        <a href="#" className={classes.item}>Music</a>
      </div>
      <div className={classes.item}>
        <a href="#"className={classes.item}>Settings</a>
      </div>
    </div>
  </nav>
  )
}
export default Navbar;