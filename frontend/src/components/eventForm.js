import { Form } from "react-router-dom";
import classes from "./eventForm.module.css";

function EventForm({ event }) {
  return (
    <Form method="post" className={classes.form_box}>
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
        <button type="button">Cancel</button>
        <button>Save</button>
      </p>
    </Form>
  );
}
export default EventForm;
