import { Link } from "react-router-dom";
import NewsletterSignup from "./newsletterSignup";
import classes from "./mainNavigation.module.css";

function MianNavigation() {
  return (
    <nav>
      <ul className={classes.list}>
        <Link to={"/"}>Home</Link>
        <Link to={"/events"}>Events</Link>
        <Link to={"/newsletter"}>NewsLetter</Link>
      </ul>

      <NewsletterSignup />
    </nav>
  );
}
export default MianNavigation;
