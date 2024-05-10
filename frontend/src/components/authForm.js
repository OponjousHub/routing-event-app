import { Link } from "react-router-dom";
import classes from "./authForm.module.css";

function AuthForm() {
  return (
    <form method="post" className={classes.form}>
      <h1 className={classes.title}>Login or Create user Form</h1>
      <p className={classes.input}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />
      </p>
      <p className={classes.input}>
        <label htmlFor="password">Password</label>
        <input id="password" type="Password" name="password" min={6} />
      </p>
      <p className={classes.auth_box}>
        <Link to={"/auth"} className={classes.login}>
          Login
        </Link>
        <button className={classes.save}>Save</button>
      </p>
    </form>
  );
}

export default AuthForm;
