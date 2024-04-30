import { NavLink } from "react-router-dom";
import classes from "./eventsPage.module.css";
function EventPage() {
  return (
    <>
      <ul className={classes.event_tabs}>
        <NavLink
          to={"/events"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <button>All Events</button>
        </NavLink>
        <NavLink
          to={"new"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <button>New Events</button>
        </NavLink>
      </ul>
    </>
  );
}
export default EventPage;
