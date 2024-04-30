import classes from "./eventForm.module.css";

function EventForm() {
  return (
    <form className={classes.form_box}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input id="image" name="image" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5}></textarea>
      </div>
      <p className={classes.form_button}>
        <button type="button">Cancel</button>
        <button>Save</button>
      </p>
    </form>
  );
}
export default EventForm;
