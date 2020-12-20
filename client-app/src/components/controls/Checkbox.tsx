import React from "react";
import {
  FormControl,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from "@material-ui/core";
export const Checkbox = (props: any) => {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name:any, value:any) => ({
    target: {
        name, value
    }
})

  return (
    <FormControl>
      <FormControlLabel
        control={<MuiCheckbox name={name} color="primary" value={value} onChange={e => onChange(convertToDefEventPara(name, e.target.checked))} />}
        label = {label}
      ></FormControlLabel>
    </FormControl>
  );
};

// //uzywanie 
// <Controls.Checkbox
// label="Waluta"
// name="currency"
// value={values.currency} //wartosc bool
// onChange={handleInputChange}
// />