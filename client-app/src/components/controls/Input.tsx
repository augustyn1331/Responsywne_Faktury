import TextField from "@material-ui/core/TextField";
import React from "react";

export const Input = (props: any) => {
  const { name, label, value, onChange, error=null, ...other} = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && {error:true, helperText:error})}
    />
  );
};
