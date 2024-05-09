import {
  useRouteLoaderData,
  json,
  Link,
  useSubmit,
  redirect,
} from "react-router-dom";
import classes from "./eventDetailPage.module.css";
function EventDetailPage() {
  const data = useRouteLoaderData("editDetailId");
  const submit = useSubmit();
  console.log(data.event);
  const { event } = data;

  const hadleDelete = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) submit(null, { method: "delete" });
  };

  return (
    <>
      <article className={classes.container}>
        <div className={classes.event_box}>
          <img src={event.image} alt={event.title} />
          <div className={classes.title_date}>
            <h2>{event.title}</h2>
            <p className={classes.date}>{event.date}</p>
          </div>
          <p className={classes.description}>{event.description}</p>
        </div>
        <menu className={classes.edit_delete}>
          <Link to={`edit`} className={classes.edit}>
            Edit
          </Link>

          <button onClick={hadleDelete} className={classes.delete}>
            Delete
          </button>
        </menu>
      </article>
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
      { message: "Could not fetch the selected event! Try again later." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const id = params.eventId;

  const response = fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete the selected event!" },
      { status: 422 }
    );
  }

  return redirect("events");
}
