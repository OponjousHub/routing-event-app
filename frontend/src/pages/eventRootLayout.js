import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MianNavigation from "../components/mainNavigation";

function EventRootLayout() {
  return (
    <Fragment>
      <MianNavigation />
      {/* <EventList /> */}
      <Outlet />
    </Fragment>
  );
}
export default EventRootLayout;
