import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { IInvoice } from "../models/invoice";
import { NavBar } from "../../features/nav/NavBar";


const App = () => {
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  
  
  useEffect(() => {
      axios
      .get<IInvoice[]>("http://localhost:5000/api/invoices")
      .then((response) => {
       setInvoices(response.data);
      });
    }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Container id="Inv" >
      <List>
        {invoices.map((invoice) => (
          <List.Item key={invoice.id}>{invoice.invoiceNumber}</List.Item>
        ))}
      </List>
      </Container>

    </div>
  );
};

export default App;
