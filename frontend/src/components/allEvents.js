import { Link } from "react-router-dom";
import classes from "./allEvents.module.css";

function AllEvents({ events }) {
  return (
    <div className={classes.events_box}>
      <h1>All Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} className={classes.events}>
            <Link to={event.id} className={classes.list_link}>
              <div className={classes.list}>
                <img src={event.image} alt={event.title} />
                <div className={classes.text_box}>
                  <p className={classes.title}>{event.title}</p>
                  <p className={classes.date}>{event.date}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AllEvents;
