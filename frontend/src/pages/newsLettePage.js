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

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  console.log(email);
  // data.get("email").values = "";

  ///////
  // SEND THE EMAIL INPUT TO THE BACKEND
  ////////
  // CHAECK FOR THE ERROR

  return { message: "Sign up successfully" };
}
