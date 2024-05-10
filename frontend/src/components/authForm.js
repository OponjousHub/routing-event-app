import { Link, useSearchParams, Form } from "react-router-dom";
import classes from "./authForm.module.css";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <Form method="post" className={classes.form}>
      <h1 className={classes.title}>{isLogin ? "Login" : "Create new user"}</h1>
      <p className={classes.input}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />
      </p>
      <p className={classes.input}>
        <label htmlFor="password">Password</label>
        <input id="password" type="Password" name="password" min={6} />
      </p>
      <p className={classes.auth_box}>
        <Link
          to={`?mode=${isLogin ? "signup" : "login"}`}
          className={classes.login}
        >
          {!isLogin ? "Login" : "Create new user"}
        </Link>
        <button className={classes.save}>Save</button>
      </p>
    </Form>
  );
}

export default AuthForm;
