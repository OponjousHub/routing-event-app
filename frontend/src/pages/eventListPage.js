import { json, useLoaderData } from "react-router-dom";
import EventNavigation from "../components/eventsNavigation";
import AllEvents from "../components/allEvents";

function EventList() {
  const data = useLoaderData();
  console.log(data.events);
  return (
    <>
      <EventNavigation />
      <AllEvents events={data.events} />
    </>
  );
}

export default EventList;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok)
    throw json({ message: "Could not fetch the events", status: "501" });

  return response;
}
