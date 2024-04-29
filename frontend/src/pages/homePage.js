import MianNavigation from "../components/mainNavigation";
import classes from "./homePage.module.css";

function HomePage() {
  return (
    <>
      <MianNavigation />
      <h1 className={classes.welcome}>Welcome!</h1>
      <p className={classes.text}>Brouse all our amazing events!</p>
    </>
  );
}

export default HomePage;
