import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      backgroundColor: "#fdfdff",
      padding: theme.spacing(1),
    },
  },
}));



export const useForm = (initialFValues:any) => {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
  values,
  setValues,
  handleInputChange
  }
}

export const Form = (props:any) => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
       {props.children}
    </form>
  )
}
