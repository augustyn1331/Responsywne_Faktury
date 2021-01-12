import React, { useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTable } from "../../components/useTable";
import { Controls } from "../../components/controls/Controls";
import Search from "@material-ui/icons/Search";
import AddOutlinedIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Notification from "../../components/Notification";
import Popup from "../../components/Popup";
import { InvoiceForm } from "./InvoiceForm";
import Hidden from "@material-ui/core/Hidden";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  table: {
    "& tbody tr:hover": {
      backgroundColor: "#e6f7ff",
      cursor: "pointer",
    },
  },
  flexbox: {
    display: "flex",
    justifyContent: "space-between",
  },
  // search:{
  //   width: "579px",
  //   [theme.breakpoints.down("md")]: {
  //     width:"100%"
  //    },
  // },
  search: {
    clear: "both",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    paddingRight:"0px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  noBorder: {
    borderBottom: "none",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px !important",
    },
  },
  ovrflow: {
    overflowX: "scroll",
    [theme.breakpoints.up("sm")]: {
      overflowX: "hidden",
    },
  },
  inputInput: {
    marginTop: "6px",
    paddingRight: "1px",
    fontSize: "0.920rem",
    cursor: "pointer !important",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1.5em + ${theme.spacing(1.9)}px)`,
    transition: theme.transitions.create("width"),
    width: "0ch",
    "&:focus": {
      width: "84.75vw",
    },
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
  toolbarRoot: {
    marginTop: "8px",
  },
}));

interface IProps {
  invoices: IInvoice[];
  createInvoice: (invoice:IInvoice)=>void;
}


const headCells = [
  { id: "invoiceNumber", label: "NR FAKTURY", align:"left" },
  { id: "date", label: "DATA", align:"left" },
  { id: "customer", label: "KONTRAHENT"},
  { id: "net", label: "NETTO" },
  { id: "brutto", label: "BRUTTO", disableSorting: false },
];

export const InvoiceList: React.FC<IProps> = ({ invoices,
  createInvoice
}) => {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({
    fn: (items: any) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(invoices, headCells, filterFn);

  const handleSearch = (e: any) => {
    let target = e.target;
    setFilterFn({
      fn: (items: any) => {
        if (target.value == "") return items;
        else
          return items.filter((x: any) =>
            x.customer.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };
  
  const openpp = () => {setOpenPopup(true);}
  return (
    <>
      <Paper elevation={2} className={classes.ovrflow}>
        <TableRow className={classes.flexbox}>
          <Controls.Button
            color="primary"
            text="DODAJ"
            icon={<AddOutlinedIcon />}
            className={classes.toolbarRoot}
            onClick={openpp}
          />
        </TableRow>
        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {recordsAfterPagingAndSorting().map((row: any) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.invoiceNumber}
                </TableCell>
                <TableCell>{row.date.toString().split('T')[0]}</TableCell>
                <TableCell align="right">{row.customer}</TableCell>
                <Hidden xsDown>
                <TableCell align="right">{row.net}</TableCell>
                <TableCell align="right">{row.gross}</TableCell>
                </Hidden>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TableRow className={classes.flexbox}>
          <TblPagination id="Pagination" />
          <TableCell className={classes.noBorder}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                onChange={handleSearch}
                placeholder="Szukaj kontrahenta..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </TableCell>
        </TableRow>
      </Paper>
      <Popup
        title="FAKTURA"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <InvoiceForm createInvoice={createInvoice} />
      </Popup>
    </>
  );
};
