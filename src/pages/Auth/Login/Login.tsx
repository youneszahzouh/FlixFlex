import React, { useState } from "react";
import { FlixFlexCover, LoginCover } from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  db,
  auth,
  logInWithEmailAndPassword,
} from "../../../firebase/firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "./login.module.scss";
import Loader from "../../../components/Loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values) => {
      setIsLoading(true);
      const { password, email } = values;

      await logInWithEmailAndPassword(email, password);

      setIsLoading(false);
    },
  });

  return (
    <div className={styles["login"]}>
      <img src={FlixFlexCover} alt="" />

      <div className={styles["login-card"]}>
        <img src={LoginCover} alt="" />

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
              type="email"
              name="email"
              placeholder="Email"
              value={validation.values.email}
              onChange={validation.handleChange}
            />
          </div>

          <div className={styles["form-control"]}>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={validation.values.password}
              onChange={validation.handleChange}
            />
          </div>

          <button type="submit">Login {isLoading ? <Loader /> : null}</button>
        </form>

        <div className={styles["redirect"]}>
          Don't have an account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
