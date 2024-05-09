import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import EventNavigation from "../components/eventsNavigation";

function EventRootLayout() {
  return (
    <Fragment>
      <EventNavigation />
      <Outlet />
    </Fragment>
  );
}
export default EventRootLayout;
