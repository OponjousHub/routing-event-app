import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/eventForm";
import EventNavigation from "../components/eventsNavigation";
function EditEventPage() {
  const data = useRouteLoaderData("editDetailId");
  const { event } = data;
  return (
    <>
      <EventNavigation />
      <EventForm event={event} method={"patch"} />
    </>
  );
}

export default EditEventPage;
