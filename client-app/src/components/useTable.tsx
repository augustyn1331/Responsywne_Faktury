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

const useStyles = makeStyles((theme) => ({
  table: {
    "& tbody tr:hover": {
      backgroundColor: "#e6f7ff",
      cursor: "pointer",
    },
  },
  ovrflow:{
    overflow:"hidden"
  },
  root:{
    "&:nth-last-child(2)": {
        paddingRight:"8px"
      },  
      "&:first-child": {
        flexDirection: "row",
     },
    "&:last-child": {
        [theme.breakpoints.down("xs")]: {
            display:"none"
          },
      },
  }
}));

export const useTable = (records: any, headCells: any, filterFn:any) => {
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
                <TableCell align="right" key={headCell.id} className={classes.root}
                sortDirection={orderBy===headCell.id ? order:false}>
                  { headCell.disableSorting ? headCell.label :
                    <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => { handleSortRequest(headCell.id) }}>
                                    {headCell.label}
                                </TableSortLabel>
            }
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
  const TblPagination = (other:any) => (
  <TablePagination
    className={classes.ovrflow}
    component="div"
    page={page}
    rowsPerPageOptions={pages}
    rowsPerPage={rowsPerPage}
    count={records.length}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
    {...other}
  >
  </TablePagination> )

   function stableSort(array:any, comparator:any) {
        const stabilizedThis = array.map((el:any, index:any) => [el, index]);
        stabilizedThis.sort((a:any, b:any) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el:any) => el[0]);
    }

    function getComparator(order:any, orderBy:any) {
      return order === 'desc'
          ? (a:any, b:any) => descendingComparator(a, b, orderBy)
          : (a:any, b:any) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a:any, b:any, orderBy:any) {
      if (b[orderBy] < a[orderBy]) {
          return -1;
      }
      if (b[orderBy] > a[orderBy]) {
          return 1;
      }
      return 0;
  }


const recordsAfterPagingAndSorting = () => {
  return stableSort(filterFn.fn(records), getComparator(order, orderBy))
  .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    
}

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  };
};
