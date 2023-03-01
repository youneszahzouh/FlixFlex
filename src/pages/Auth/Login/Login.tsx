import React, { useState } from "react";
import { FlixFlexCover, LoginCover } from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase/app";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import styles from "./login.module.scss";
const Login = () => {
  const navigate = useNavigate();

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
      const { password, email } = values;

      setIsLoading(true);
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            if (userCredential?.user?.email) {
              localStorage.setItem("email", userCredential?.user?.email);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        toast.success("Welcome Back");
        navigate("/movies");
      } catch (error) {
        console.log(error);
      }

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
            {/* {validation.touched.email && !!validation.errors.email ? (
              <p>{validation.errors.email}</p>
            ) : null} */}
          </div>

          <div className={styles["form-control"]}>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={validation.values.password}
              onChange={validation.handleChange}
            />
            {/* {validation.touched.password && !!validation.errors.password ? (
              <p>{validation.errors.email}</p>
            ) : null} */}
          </div>

          <button type="submit">Login {isLoading ? "..." : null}</button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Login);
