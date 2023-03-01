import React, { useState } from "react";
import { FlixFlexCover, SignupCover } from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./signup.module.scss";
import { firebaseAuth } from "../../../firebase/app";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
        await createUserWithEmailAndPassword(firebaseAuth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            if (userCredential?.user?.email) {
              localStorage.setItem("email", userCredential?.user?.email);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        toast.success("User Registered successfully");
        navigate("/movies");
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    },
  });

  console.log(
    "%cSignup.tsx line:49 validation?.errors",
    "color: white; background-color: #007acc;",
    validation?.errors
  );
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
          {/* <div className={styles["form-control"]}>
            <input type="text" name="username" placeholder="Username" />
            {validation.touched.username && !!validation.errors.username ? (
              <p>{validation.errors.email}</p>
            ) : null}
          </div> */}

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

          <div className={styles["form-control"]}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat your Password"
              value={validation.values.confirmPassword}
              onChange={validation.handleChange}
            />
            {/* {validation.touched.confirmPassword &&
            !!validation.errors.confirmPassword ? (
              <p>{validation.errors.email}</p>
            ) : null} */}
          </div>

          <button type="submit">Signup {isLoading ? "..." : null}</button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Signup);
