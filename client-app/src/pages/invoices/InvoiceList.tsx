import React from "react";
import { IInvoice } from "../../app/models/invoice";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  table: {
      '& tbody tr:hover': {
          backgroundColor: '#e6f7ff',
          cursor: 'pointer',
      },
  },
}))

interface IProps {
  invoices: IInvoice[];
}

export const InvoiceList: React.FC<IProps> = ({ invoices }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>NUMER FAKTURY</TableCell>
            <TableCell align="right">DATA</TableCell>
            <TableCell align="right">KONTRAHENT</TableCell>
            <TableCell align="right">NETTO</TableCell>
            <Hidden xsDown> 
            <TableCell align="right">BRUTTO</TableCell> </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.invoiceNumber}
              </TableCell>
              <TableCell align="right">22/10/20</TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.net}</TableCell>
              <Hidden xsDown>
              <TableCell align="right">{row.gross}</TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
