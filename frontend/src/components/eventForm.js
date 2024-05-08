import { json, redirect, Form, Link } from "react-router-dom";
import classes from "./eventForm.module.css";

function EventForm({ event, method }) {
  return (
    <Form method={method} className={classes.form_box}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={event ? event.title : ""}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          defaultValue={event ? event.image : ""}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={event ? event.description : ""}
          required
        ></textarea>
      </div>
      <p className={classes.form_button}>
        <Link to={"/events"}>
          <button type="button">Cancel</button>
        </Link>
        <button>Save</button>
      </p>
    </Form>
  );
}
export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const enteredData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";
  if (method === "PATCH") {
    const editId = params.eventId;
    url = "http://localhost:8080/events/" + editId;
  }
  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enteredData),
  });
  console.log(response);
  if (!response.ok)
    throw json(
      { message: "Could not save the event! Please try aain later." },
      { status: "500" }
    );

  return redirect("/events");
}
