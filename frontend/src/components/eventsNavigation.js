import { NavLink } from "react-router-dom";
import classes from "./eventsNavigation.module.css";
function EventNavigation() {
  return (
    <>
      <ul className={classes.event_tabs}>
        <li>
          <NavLink
            to={"/events"}
            className={({ isActive }) => (isActive ? classes.active : " ")}
            end
          >
            <button>All Events</button>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"new"}
            className={({ isActive }) => (isActive ? classes.active : " ")}
          >
            <button>New Events</button>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default EventNavigation;
