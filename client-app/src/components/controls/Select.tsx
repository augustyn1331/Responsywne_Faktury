import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { default as MuiSelect } from "@material-ui/core/Select";
import React from "react";


export const Select = (props: any) => {
  const { name, label, value, onChange, options,error=null } = props;
  return (
    <FormControl variant="outlined">
      {error ? <InputLabel error>{label}</InputLabel> : <InputLabel>{label}</InputLabel>}
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...(error && {error:true, helperText:error})}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((item: any) => (
          <MenuItem key={item.id} value={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
};
