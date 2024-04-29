import MianNavigation from "../components/mainNavigation";

function EventPage() {
  return (
    <>
      <MianNavigation />
      <ul>
        <li>
          <button>All Events</button>
        </li>
        <li>
          <button>New Events</button>
        </li>
      </ul>
    </>
  );
}
export default EventPage;
