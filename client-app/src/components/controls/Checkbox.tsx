import React from "react";
import {default as MuiCheckbox} from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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