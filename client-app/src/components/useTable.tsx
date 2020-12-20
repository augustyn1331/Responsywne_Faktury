import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles(theme => ({
    table: {
        '& tbody tr:hover': {
            backgroundColor: '#e6f7ff',
            cursor: 'pointer',
        },
    },
  }))


export const UseTable = (initialFValues:any) => {
    const classes = useStyles();
    return (

        <div>
            
        </div>
    )
}
