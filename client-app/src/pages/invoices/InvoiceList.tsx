import React, { useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Hidden, InputAdornment, Toolbar } from "@material-ui/core";
import { useTable } from "../../components/useTable";
import { Controls } from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  table: {
    "& tbody tr:hover": {
      backgroundColor: "#e6f7ff",
      cursor: "pointer",
    },
  },
  flexbox:{
    display:"flex",
    justifyContent:"space-between",
  },
  search:{
    width: "579px",
    [theme.breakpoints.down("md")]: {
      width:"100%"
     },
  },
}));

interface IProps {
  invoices: IInvoice[];
}
const headCells =
  [
    {id:'invoiceNumber', label:'NUMER FAKTURY'},
    {id:'date', label:'DATA'},
    {id:'customer', label:'KONTRAHENT'},
    {id:'net', label:'NETTO'},
    {id:'brutto', label:'BRUTTO', disableSorting:false},
    
]

export const InvoiceList: React.FC<IProps> = ({ invoices }) => {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({ fn: (items:any) => { return items; } })

  const { TblContainer, TblHead,TblPagination,recordsAfterPagingAndSorting } = useTable(invoices, headCells,filterFn);

  const handleSearch = (e:any) => {
    let target = e.target;
    setFilterFn({
        fn: (items:any)=> {
            if (target.value == "")
                return items;
            else
                return items.filter((x:any) => x.customer.toLowerCase().includes(target.value.toLowerCase()))
        }
    })
}

  return (
    <Paper elevation={2}>
    <TblContainer>
      <TblHead></TblHead>
      <TableBody>
        {recordsAfterPagingAndSorting().map((row:any) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.invoiceNumber}
            </TableCell>
            <TableCell align="right">{row.date}</TableCell>
            <TableCell align="right">{row.customer}</TableCell>
            <TableCell align="right">{row.net}</TableCell>
            <Hidden xsDown>
              <TableCell align="right">{row.gross}</TableCell>
            </Hidden>
          </TableRow>
        ))}
      </TableBody>
    </TblContainer>
    <TableRow className={classes.flexbox}>
    <TblPagination/>
    <Hidden xsDown>
    <TableCell>
    <Controls.Input
              label="Wyszukaj kontrahenta"
              className={classes.search}
              InputProps={{
                startAdornment: (<InputAdornment position="start">
                    <Search />
                </InputAdornment>)
            }}
            onChange={handleSearch}
            />
        </TableCell>
    </Hidden>
    </TableRow>
    </Paper>

    // <TableContainer component={Paper}>
    //   <Table className={classes.table}>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>NUMER FAKTURY</TableCell>
    //         <TableCell align="right">DATA</TableCell>
    //         <TableCell align="right">KONTRAHENT</TableCell>
    //         <TableCell align="right">NETTO</TableCell>
    //         <Hidden xsDown>
    //         <TableCell align="right">BRUTTO</TableCell> </Hidden>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {invoices.map((row) => (
    //         <TableRow key={row.id}>
    //           <TableCell component="th" scope="row">
    //             {row.invoiceNumber}
    //           </TableCell>
    //           <TableCell align="right">22/10/20</TableCell>
    //           <TableCell align="right">{row.customer}</TableCell>
    //           <TableCell align="right">{row.net}</TableCell>
    //           <Hidden xsDown>
    //           <TableCell align="right">{row.gross}</TableCell>
    //           </Hidden>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};
