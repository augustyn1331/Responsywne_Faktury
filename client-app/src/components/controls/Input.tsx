import { TextField } from "@material-ui/core";
import React from "react";

export const Input = (props: any) => {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
