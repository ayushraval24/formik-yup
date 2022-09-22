import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default function LoginNew() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const validate = Yup.object({
    email: Yup.string().required("Required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const onSubmitHandler = (values) => {
    console.log("These are values: ", values);
  };
  return (
    <div className="form-container">
      <div
        className="shadow py-4 px-4 form"
        // style={{
        //   boxShadow:
        //     "rgb(0 0 0 / 7%) 0px 1px 1px, rgb(0 0 0 / 7%) 0px 2px 2px, rgb(0 0 0 / 7%) 0px 4px 4px, rgb(0 0 0 / 7%) 0px 8px 8px, rgb(0 0 0 / 7%) 0px 16px 16px",
        //   backgroundColor: "rgb(134 163 254)",
        //   borderRadius: "30px",
        // }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <Formik
          initialValues={inputValues}
          validationSchema={validate}
          onSubmit={(values) => onSubmitHandler(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            /* and other goodies */
          }) => {
            return (
              <form onSubmit={handleSubmit} className="py-0 px-3 w-100">
                <input
                  className="form-control mt-2 mb-2"
                  name="email"
                  type="email"
                  value={values?.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <p className="error-message">{errors.email}</p>
                )}
                <input
                  className="form-control mt-2 mb-2"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values?.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <p className="error-message">{errors.password}</p>
                )}
                <button
                  type="submit"
                  className="btn w-100 shadow submit-button my-3"
                >
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
