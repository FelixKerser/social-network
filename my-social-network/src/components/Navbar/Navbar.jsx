import classes from './Navbar.module.css';


function Navbar(){
    return(
        <nav>
          <ul className={classes.nav__ul}>
            <li className={classes.nav__li}><a className={ `${classes.item} ${classes.active}` } href="#">Profile</a></li>
            <li className={classes.nav__li}><a className={classes.item} href="#">Messages</a></li>
            <li className={classes.nav__li}><a className={classes.item} href="#">News</a></li>
            <li className={classes.nav__li}><a className={classes.item} href="#">Music</a></li>
            <li className={classes.nav__li}><a className={classes.item} href="#">Settings</a></li>
          </ul>
        </nav>
    );
}

export default Navbar;