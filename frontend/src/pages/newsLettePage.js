import NewsletterSignup from "../components/newsletterSignup";
import MianNavigation from "../components/mainNavigation";
import classes from "./newsLetterPage.module.css";

function NewsLetterPage() {
  return (
    <>
      <MianNavigation />
      <div className={classes.newsletter_box}>
        <h1>Join our awesome newsletter!</h1>
        <NewsletterSignup />
      </div>
    </>
  );
}

export default NewsLetterPage;
