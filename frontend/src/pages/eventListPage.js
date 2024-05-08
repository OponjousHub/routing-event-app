import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventNavigation from "../components/eventsNavigation";
import AllEvents from "../components/allEvents";
import { Suspense } from "react";

function EventList() {
  const { events } = useLoaderData();

  return (
    <>
      <EventNavigation />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <AllEvents events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventList;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok)
    throw json({ message: "Could not fetch the events", status: 500 });

  const resData = await response.json();

  return resData.events;
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
