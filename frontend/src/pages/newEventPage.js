import { json, redirect, useLoaderData } from "react-router-dom";
import EventForm from "../components/eventForm";

function NewEventPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <EventForm />
    </>
  );
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const enteredData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(enteredData);
  console.log(data);
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enteredData),
  });
  if (!response.ok)
    throw json(
      { message: "Could not save the event! Please try aain later." },
      { status: "500" }
    );

  return redirect("/events");
}
