import { NavLink } from "react-router-dom";
import classes from "./eventsNavigation.module.css";
function EventNavigation() {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) => (isActive ? classes.active : " ")}
              end
            >
              All Events
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"new"}
              className={({ isActive }) => (isActive ? classes.active : " ")}
            >
              New Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default EventNavigation;

{
  /* <nav>
<ul className={classes.list}>
  <li>
    <NavLink
      to={"/"}
      className={({ isActive }) => (isActive ? classes.active : " ")}
      end
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to={"/events"}
      className={({ isActive }) => (isActive ? classes.active : " ")}
    >
      Events
    </NavLink>
  </li>
  <li>
    <NavLink
      to={"/newsletter"}
      className={({ isActive }) => (isActive ? classes.active : " ")}
    >
      NewsLetter
    </NavLink>
  </li>
</ul>

<NewsletterSignup />
</nav> */
}
