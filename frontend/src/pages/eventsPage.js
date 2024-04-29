import MianNavigation from "../components/mainNavigation";
import classes from "./eventsPage.module.css";
function EventPage() {
  return (
    <>
      <MianNavigation />
      <ul className={classes.event_tabs}>
        <li>
          <button>All Events</button>
        </li>
        <li>
          <button>New Events</button>
        </li>
      </ul>
    </>
  );
}
export default EventPage;
