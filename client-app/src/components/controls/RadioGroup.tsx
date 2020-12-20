import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';


export const RadioGroup = (props:any) => {
    const { name, label, value, onChange, items } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                    items.map(
                        (item:any) => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio color="primary"/>} label={item.title} />
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}

// //używanie 
// const genderItems = [
//     { id: "male", title: "Male" },
//     { id: "female", title: "Female" },
//     { id: "other", title: "Other" },
//   ];

// <Controls.RadioGroup
// name="gender"
// label="Gender"
// value={values.gender}
// onChange={handleInputChange}
// items={genderItems}
// />