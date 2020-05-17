import React, { useState } from "react";

export const useForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleValuesChange = (e) => {
    setValues(e.target.value);
  };

  const clearValues = () => {
    setValues("");
  };

  return [values, setValues, clearValues];
};
