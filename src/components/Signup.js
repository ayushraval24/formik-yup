import React from "react";
import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Firstname is required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Lastname is required"),
    email: Yup.string().required("Required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .min(10, "Invalid phone number")
      .max(10, "Invalid phone number"),
  });

  const handleSubmit = (values) => {
    console.log("These are values: ", values);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className="shadow-lg py-4 px-5 form">
            <h2 className="text-center mb-4">Sign Up</h2>

            <div className="mb-3">
              <Field
                id="firstName"
                className={`form-control shadow-none ${
                  touched?.firstName && errors?.firstName && "invalid-input"
                }`}
                name="firstName"
                placeholder="First Name"
                type="text"
              />

              {touched?.firstName && errors?.firstName && (
                <p className="error-message">{errors?.firstName}</p>
              )}
            </div>
            <div className="mb-3 ">
              <Field
                id="lastName"
                className={`form-control shadow-none ${
                  touched?.lastName && errors?.lastName && "invalid-input"
                }`}
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
              {touched?.lastName && errors?.lastName && (
                <p className="error-message">{errors?.lastName}</p>
              )}
            </div>
            <div className="mb-3">
              <Field
                id="email"
                className={`form-control shadow-none ${
                  touched?.email && errors?.email && "invalid-input"
                }`}
                name="email"
                placeholder="Email"
                type="email"
              />
              {touched?.email && errors?.email && (
                <p className="error-message">{errors?.email}</p>
              )}
            </div>
            <div className="mb-3">
              <Field
                id="phone"
                className={`form-control shadow-none ${
                  touched?.phone && errors?.phone && "invalid-input"
                }`}
                name="phone"
                placeholder="Phone Number"
                type="number"
              />
              {touched?.phone && errors?.phone && (
                <p className="error-message">{errors?.phone}</p>
              )}
            </div>
            <div className="mb-3">
              <Field
                id="password"
                className={`form-control shadow-none ${
                  touched?.password && errors?.password && "invalid-input"
                }`}
                name="password"
                placeholder="Password"
                type="password"
              />
              {touched?.password && errors?.password && (
                <p className="error-message">{errors?.password}</p>
              )}
            </div>
            <div className="mb-3">
              <Field
                id="confirmPassword"
                className={`form-control shadow-none ${
                  touched?.confirmPassword &&
                  errors?.confirmPassword &&
                  "invalid-input"
                }`}
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />
              {touched?.confirmPassword && errors?.confirmPassword && (
                <p className="error-message">{errors?.confirmPassword}</p>
              )}
            </div>

            <button type="submit" className="btn w-100 shadow submit-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
