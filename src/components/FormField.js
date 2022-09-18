import React from "react";
import { useField } from "formik";
import { Formik, Field, Form } from "formik";

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="d-flex mb-2">
        {label}
      </label>
      <input
        className={`form-control shadow-none}`}
        autoComplete="off"
        // type={type}
        {...field}
        {...props}
      />
    </div>
  );
};

export default FormField;
