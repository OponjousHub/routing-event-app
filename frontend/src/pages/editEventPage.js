import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/eventForm";

function EditEventPage() {
  const data = useRouteLoaderData("editDetailId");
  const { event } = data;
  return (
    <>
      <EventForm event={event} method={"patch"} />
    </>
  );
}

export default EditEventPage;
