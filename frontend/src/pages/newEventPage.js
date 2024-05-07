import { useLoaderData } from "react-router-dom";
import EventForm from "../components/eventForm";
import EventNavigation from "../components/eventsNavigation";

function NewEventPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <EventNavigation />
      <EventForm method={"post"} />
    </>
  );
}

export default NewEventPage;
