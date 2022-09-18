import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().required("Required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("These are values: ", values);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => (
          <div className="shadow-lg p-3">
            <h2 className="text-center mb-4">Login</h2>
            <Form className="py-4 px-5">
              <FormField label="Email" name="email" type="email" />
              <FormField label="Password" name="password" type="password" />
              <button type="submit" className="btn w-100 shadow submit-button">
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
