import React, { useState } from "react";
import { FlixFlexCover, SignupCover } from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./signup.module.scss";
import { registerWithEmailAndPassword } from "../../../firebase/firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter a valid Username!"),
      email: Yup.string().email().required("Please Enter a valid Email!"),
      password: Yup.string()
        .required("Password is required!")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      ),
    }),

    onSubmit: async (values) => {
      const { username, password, email } = values;

      setIsLoading(true);

      try {
        await registerWithEmailAndPassword(username, email, password);
      } catch (err: any) {
        toast.error(err.message);
      }

      setIsLoading(false);
    },
  });

  return (
    <div className={styles["signup"]}>
      <img src={FlixFlexCover} alt="" />

      <div className={styles["signup-card"]}>
        <img src={SignupCover} alt="" />
        <h1>FlixFlex</h1>
        <form
          className={styles["form"]}
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
          }}
        >
          <div className={styles["form-control"]}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={validation.values.username}
              onChange={validation.handleChange}
            />
            {validation.touched.username && !!validation.errors.username ? (
              <p>{validation.errors.email}</p>
            ) : null}
          </div>

          <div className={styles["form-control"]}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={validation.values.email}
              onChange={validation.handleChange}
            />
            {validation.touched.email && !!validation.errors.email ? (
              <p>{validation.errors.email}</p>
            ) : null}
          </div>

          <div className={styles["form-control"]}>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={validation.values.password}
              onChange={validation.handleChange}
            />
            {validation.touched.password && !!validation.errors.password ? (
              <p>{validation.errors.password}</p>
            ) : null}
          </div>

          <div className={styles["form-control"]}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat your Password"
              value={validation.values.confirmPassword}
              onChange={validation.handleChange}
            />
            {validation.touched.confirmPassword &&
            !!validation.errors.confirmPassword ? (
              <p>{validation.errors.confirmPassword}</p>
            ) : null}
          </div>

          <button type="submit">Signup {isLoading ? "..." : null}</button>
        </form>
        <div className={styles["redirect"]}>
          Already have an account? <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Signup);
