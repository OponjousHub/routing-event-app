import MianNavigation from "../components/mainNavigation";
import { useRouteError } from "react-router-dom";
import classes from "./errorPage.module.css";
function ErrorPage() {
  const error = useRouteError();

  let title = "An error has occured!";
  let message = "something went wrong";

  if (error.status === 404) {
    title = "NOt found!";
    message = "Could not find resource or page";
  } else if (error.status === 500) {
    message = error.message;
  }

  return (
    <>
      <MianNavigation />
      <h1 className={classes.head}>{title}</h1>
      <p className={classes.error}>{message}</p>
    </>
  );
}
export default ErrorPage;
