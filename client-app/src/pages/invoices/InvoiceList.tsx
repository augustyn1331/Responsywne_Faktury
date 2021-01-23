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
import Hidden from "@material-ui/core/Hidden";
import InputBase from "@material-ui/core/InputBase";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ConfirmDialog from "../../components/ConfirmDialog";
import UndoRoundedIcon from '@material-ui/icons/UndoRounded';

const useStyles = makeStyles((theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "space-between",
  },
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
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    paddingRight: "0px",
    position: "absolute",
    alignSelf: "bottom",
    height: "21px",
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
    padding: theme.spacing(0.5, 1, 1, 0),
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

  customer: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0px !important",
    },
  },
  collapsebutton: {
    margin: "0px 4px",
  },
  actionsbox: {
    minWidth: "324px",
    width: "324px",
    padding: "0px 3px !important",
    [theme.breakpoints.up("md")]: {
      width: "324px",
    },
    border: "none",
  },
  collapserow: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  menubutton: {
    color: theme.palette.primary.main,
    minWidth: 0,
    margin: "0px !important",
    padding: "0px !important",
    height: "44px !important",
    width: "38px !important",
    cursor: "pointer",
  },
  collapsecell: {
    paddingBottom: 0,
    paddingTop: 0,
  },
}));

interface IProps {
  invoices: IInvoice[];
  createInvoice: (invoice: IInvoice) => void;
  selectInvoice: (id: string) => void;
  deleteInvoice: (id: string) => void;
  selectedInvoice: IInvoice | null;
  setOpenPopup: (openPopup: boolean) => void;
  setEditMode: (editMode: boolean) => void;
}

const headCells = [
  { id: "invoiceNumber", label: "NUMER", align: "left" },
  { id: "date", label: "DATA", align: "left" },
  { id: "customer", label: "KONTRAHENT", align: "left" },
  { id: "net", label: "NETTO", hidden: true },
  { id: "brutto", label: "BRUTTO", hidden: true },
  { id: "actions", label: "", disableSorting: true },
];

function Row(props: any) {
  const {
    row,
    selectInvoice,
    deleteInvoice,
    setOpenPopup,
    setEditMode,
  } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const opencollapsible = () => setOpen(!open);
  const deleterow = () => {
    deleteInvoice(row.id);
  };
  const selectrow = () => {
    selectInvoice(row.id);
    setOpenPopup(true);
  };
  const editrow = () => {
    selectInvoice(row.id);
    setEditMode(true);
    setOpenPopup(true);
  };
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const dialogclose = () => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
  };
  const titlesub =
    "Czy na pewno chcesz usunąć fakturę kontrahenta " + row.customer + " ?";
  const dialogfunction = () => {
    setConfirmDialog({
      isOpen: true,
      title: titlesub,
      subTitle: "Nie można cofnąć tej operacji!",
    });
  };

  return (
    <React.Fragment>
      <TableRow className={classes.collapserow}>
        <TableCell component="th" scope="row">
          {row.invoiceNumber}
        </TableCell>
        <TableCell>{row.date.toString()}</TableCell>
        <TableCell className={classes.customer}>{row.customer}</TableCell>
        <Hidden xsDown>
          <TableCell align="right">{row.net}</TableCell>
          <TableCell align="right">{row.gross}</TableCell>
        </Hidden>
        <TableCell align="right" className={classes.menubutton}>
          <IconButton
            aria-label="expand row"
            size="small"
            className={classes.menubutton}
            onClick={opencollapsible}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.collapsecell} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Controls.Button
              color="primary"
              text="POGLĄD"
              icon={<ReceiptRoundedIcon />}
              className={classes.collapsebutton}
              onClick={selectrow}
            />
            <Controls.Button
              color="primary"
              text="EDYTUJ"
              icon={<EditRoundedIcon />}
              className={classes.collapsebutton}
              onClick={editrow}
            />
            <Controls.Button
              color="primary"
              text="USUŃ"
              icon={<DeleteOutlineRoundedIcon />}
              className={classes.collapsebutton}
              onClick={dialogfunction}
            />
          </Collapse>
        </TableCell>
      </TableRow>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      >
        <Controls.Button
          color="primary"
          text="POWRÓT"
          icon={<UndoRoundedIcon />}
          className={classes.collapsebutton}
          onClick={dialogclose}
        />
        <Controls.Button
          color="primary"
          text="USUŃ"
          icon={<DeleteOutlineRoundedIcon />}
          className={classes.collapsebutton}
          onClick={deleterow}
        />
      </ConfirmDialog>
    </React.Fragment>
  );
}

export const InvoiceList: React.FC<IProps> = ({
  invoices,
  selectInvoice,
  selectedInvoice,
  deleteInvoice,
  setOpenPopup,
  setEditMode,
}) => {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({
    fn: (items: any) => {
      return items;
    },
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
        if (target.value === "") return items;
        else
          return items.filter((x: any) =>
            x.customer.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  return (
    <Paper elevation={2} className={classes.ovrflow}>
      <TblContainer>
        <TblHead></TblHead>
        <TableBody>
          {recordsAfterPagingAndSorting().map((row: IInvoice) => (
            <Row
              key={row.id}
              row={row}
              selectInvoice={selectInvoice}
              selectedInvoice={selectedInvoice}
              deleteInvoice={deleteInvoice}
              setOpenPopup={setOpenPopup}
              setEditMode={setEditMode}
            />
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
  );
};
