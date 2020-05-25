import React from "react";
import TextField from '@material-ui/core/TextField';


export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <TextField
      input={input}
      label={label}
      error={Boolean(touched && error)}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
};

