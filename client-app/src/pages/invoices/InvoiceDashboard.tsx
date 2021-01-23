import React, { useEffect, useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import { Container, createStyles, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import { InvoiceList } from "./InvoiceList";
import { PageFooter } from "../../components/PageFooter";
import { PageHeader } from "../../components/PageHeader";
import axios from "axios";
import Popup from "../../components/Popup";
import { InvoiceForm } from "./InvoiceForm";
import { InvoiceDetails } from "./InvoiceDetails";
import AddOutlinedIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import { Button as MyButton } from "../../components/controls/Button";
import Notification from "../../components/Notification";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: "100%",
      marginTop: "-28px",
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
      },
      [theme.breakpoints.up("lg")]: {
        paddingRight: theme.spacing(6),
        marginTop: "7em",
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: "95%",
        float: "right",
        paddingRight: theme.spacing(6),
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    grid: {
      float: "right",
    },
    mobilegrid: {
      paddingLeft: "0 !important",
      paddingRight: "2px !important",
      [theme.breakpoints.up("sm")]: {
        padding: "8px",
      },
    },
    largeIcon: {
      fontSize: "4em",
    },
    toolbarpaper: {
      marginBottom: theme.spacing(0),
      padding: "0px important!",
      overflowX: "scroll",
      [theme.breakpoints.up("sm")]: {
        overflowX: "hidden",
      },
      display: "flex",
      justifyContent: "space-around",
    },
    toolbarbutton: {
      margin: "6px 8px",
      marginRight: "auto",
    },
    toolbargrid: {
      padding: "8px 0px 0px 0px !important",
    },
  })
);

export default function InvoiceDashboard() {
  const classes = useStyles();
  useEffect(() => {
    axios
      .get<IInvoice[]>("http://localhost:5000/api/invoices")
      .then((response) => {
        let invoices: IInvoice[] = [];
        response.data.forEach((invoice) => {
          invoice.date = invoice.date.split("T")[0];
          invoice.dueDate && (invoice.dueDate = invoice.dueDate.split("T")[0]);
          invoices.push(invoice);
        });

        setInvoices(response.data);
      });
  }, []);

  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<IInvoice | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

  const handleOpenCreateForm = () => {
    setSelectedInvoice(null);
    setEditMode(true);
  };

  const handleCreateInvoice = (invoice: IInvoice) => {
    setInvoices([...invoices, invoice]);
    setSelectedInvoice(null);
    setEditMode(false);
    setNotify({
      isOpen: true,
      message: 'Faktura została dodana!',
      type: 'success'
  })
  };

  const handleEditInvoice = (invoice: IInvoice) => {
    setInvoices([...invoices.filter((a) => a.id !== invoice.id), invoice]);
    setSelectedInvoice(null);
    setEditMode(false);
    setNotify({
      isOpen: true,
      message: 'Zedytowano fakturę!.',
      type: 'info'
  })
  };

  const handleDeleteInvoice = (id: string) => {
    setInvoices([...invoices.filter((a) => a.id !== id)]);
    setNotify({
      isOpen: true,
      message: 'Usunięto fakturę!.',
      type: 'error'
  })
  };

  const handleSelectInvoice = (id: string) => {
    setSelectedInvoice(invoices.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };
  
  const openpp = () => {
    setOpenPopup(true);
  };

  return (
    <Container className={classes.root}>
      <Grid className={classes.grid} container spacing={2}>
        <Grid className={classes.mobilegrid} item xs={12}>
          <PageHeader
            title="FAKTURY"
            icon={<LibraryBooksOutlinedIcon className={classes.largeIcon} />}
          />
        </Grid>
        <Grid item xs={12} className={classes.toolbargrid}>
          <Paper elevation={1} className={classes.toolbarpaper}>
            <MyButton
              color="primary"
              text="DODAJ"
              icon={<AddOutlinedIcon />}
              className={classes.toolbarbutton}
              onClick={openpp}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.mobilegrid}>
          <InvoiceList
            invoices={invoices}
            createInvoice={handleCreateInvoice}
            selectInvoice={handleSelectInvoice}
            selectedInvoice={selectedInvoice}
            deleteInvoice={handleDeleteInvoice}
            setOpenPopup={setOpenPopup}
            setEditMode={setEditMode}
          />
        </Grid>
        <Grid className={classes.mobilegrid} item xs={12}>
          <PageFooter />
        </Grid>
      </Grid>

      <Popup
        title="FAKTURA"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        setSelected={setSelectedInvoice}
        setEdit={setEditMode}
      >
        {!selectedInvoice && !editMode && (
          <InvoiceForm
            createInvoice={handleCreateInvoice}
            setOpenPopup={setOpenPopup}
            invoice={selectedInvoice!}
            editInvoice={handleEditInvoice}
          />
        )}
        {selectedInvoice && !editMode && (
          <InvoiceDetails
            invoice={selectedInvoice!}
            setSelectedInvoice={setSelectedInvoice}
          />
        )}
        {selectedInvoice && editMode && (
          <InvoiceForm
            createInvoice={handleCreateInvoice}
            setOpenPopup={setOpenPopup}
            invoice={selectedInvoice!}
            editInvoice={handleEditInvoice}
          />
        )}
      </Popup>
      <Notification
                notify={notify}
                setNotify={setNotify}
            />
    </Container>
  );
}
