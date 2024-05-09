import { useLoaderData } from "react-router-dom";
import EventForm from "../components/eventForm";

function NewEventPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <EventForm method={"post"} />
    </>
  );
}

export default NewEventPage;
