import { NavLink } from "react-router-dom";
import NewsletterSignup from "./newsletterSignup";
import classes from "./mainNavigation.module.css";

function MianNavigation() {
  return (
    <nav>
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
        <li>
          <NavLink
            to={"/auth"}
            className={({ isActive }) => (isActive ? classes.active : " ")}
          >
            Authentication
          </NavLink>
        </li>
      </ul>

      <NewsletterSignup />
    </nav>
  );
}
export default MianNavigation;
