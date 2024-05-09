import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MianNavigation from "../components/mainNavigation";

function RootLayout() {
  return (
    <Fragment>
      <MianNavigation />
      <Outlet />
    </Fragment>
  );
}
export default RootLayout;
