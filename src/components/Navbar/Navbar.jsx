import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar () {
  return (
    <nav>
    <div className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile">Profile</NavLink >
      </div>
      <div className={classes.item}>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  </nav>
  )
}
export default Navbar;