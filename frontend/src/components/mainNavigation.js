import classes from "./mainNavigation.module.css";

function MianNavigation() {
  return (
    <nav>
      <div className={classes.nav}>
        <li>Home</li>
        <li>Events</li>
        <li>NewsLetter</li>
      </div>

      <div className={classes.signup}>
        <input type="text" placeholder="Sign up now" />
        <button type="button">Sign Up</button>
      </div>
    </nav>
  );
}
export default MianNavigation;
