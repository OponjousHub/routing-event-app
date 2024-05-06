import MianNavigation from "../components/mainNavigation";
import classes from "./errorPage.module.css";
function ErrorPage() {
  return (
    <>
      <MianNavigation />
      <h1>An error has occured!</h1>
      <p>something went wrong</p>
    </>
  );
}
export default ErrorPage;
