import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  TablePagination,
  TableSortLabel,
} from "@material-ui/core";
import { IInvoice } from "../app/models/invoice";

const useStyles = makeStyles((theme) => ({
  table: {
    "& tbody tr:hover": {
      backgroundColor: "#e6f7ff",
      cursor: "pointer",
    },
  },
  root:{
    "&:nth-last-child(2)": {
        [theme.breakpoints.down("xs")]: {
           paddingRight:"12px"
          },
      },  

    "&:last-child": {
        [theme.breakpoints.down("xs")]: {
            display:"none"
          },
      },
  }
}));

export const useTable = (records: IInvoice[], headCells: any) => {
  const classes = useStyles();

  const pages =[2,10,25];
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[0])
  type Order = 'asc' | 'desc'; //Własny typ Order
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState()

  const TblContainer = (props: any) => <Table className={classes.table}>{props.children}</Table>;


  const TblHead = (props: any) => {
    const handleSortRequest = (cellId:any) => {
        const isAsc = orderBy === cellId && order === "asc";
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(cellId)
    }
    return (
      <TableHead>
        <TableRow>
            {headCells.map((headCell:any)=>(
                <TableCell align="right" key={headCell.id} className={classes.root}>
                    <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => { handleSortRequest(headCell.id) }}>
                                    {headCell.label}
                                </TableSortLabel>
                </TableCell>))
            }
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event:any, newPage:any) => {
    setPage(newPage);
}

const handleChangeRowsPerPage = (event:any) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0);
}
  const TblPagination = () => (<TablePagination
    component="div"
    page={page}
    rowsPerPageOptions={pages}
    rowsPerPage={rowsPerPage}
    count={records.length}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
  >
  </TablePagination> )

const recordsAfterPagingAndSorting = () => {
    return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    
}

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  };
};
