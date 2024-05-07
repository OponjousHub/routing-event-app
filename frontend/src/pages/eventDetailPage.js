import { useLoaderData, json } from "react-router-dom";
import EventNavigation from "../components/eventsNavigation";
import classes from "./eventDetailPage.module.css";
function EventDetailPage() {
  const data = useLoaderData();
  console.log(data.event);
  const { event } = data;

  return (
    <>
      <EventNavigation />
      <div className={classes.container}>
        <div className={classes.event_box}>
          <img src={event.image} alt={event.title} />
          <div className={classes.title_date}>
            <h2>{event.title}</h2>
            <p className={classes.date}>{event.date}</p>
          </div>
          <p className={classes.description}>{event.description}</p>
        </div>
        <div className={classes.edit_delete}>
          <p className={classes.edit}>Edit</p>
          <p className={classes.delete}>Delete</p>
        </div>
      </div>
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  console.log(id);

  const response = await fetch(`http://localhost:8080/events/` + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch this event! Try again later." },
      { status: "501" }
    );
  } else {
    return response;
  }
}
