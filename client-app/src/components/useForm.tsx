import { makeStyles } from '@material-ui/core/styles';
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



export const useForm = (initialFValues:any, validateOnChange=false, validate:any) => {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    })
    if(validateOnChange){
      validate({[name]: value})
    }
  };


  const resetForm =()=>{
    setValues(initialFValues);
    setErrors({})
  }

  return {
  values,
  setValues,
  errors,
  setErrors,
  handleInputChange,
  resetForm
  }
}

export const Form = (props:any) => {
  const classes = useStyles();
  const {children,...other} = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}> 
       {props.children}
    </form>
  )
}
