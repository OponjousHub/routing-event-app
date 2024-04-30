import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MianNavigation from "../components/mainNavigation";
import EventPage from "./eventsPage";

function EventRootLayout() {
  return (
    <Fragment>
      <MianNavigation />
      <EventPage />
      <Outlet />
    </Fragment>
  );
}
export default EventRootLayout;
