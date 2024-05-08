import MianNavigation from "../components/mainNavigation";
import classes from "./errorPage.module.css";
function ErrorPage() {
  return (
    <>
      <MianNavigation />
      <h1 className={classes.head}>An error has occured!</h1>
      <p className={classes.error}>something went wrong</p>
    </>
  );
}
export default ErrorPage;
