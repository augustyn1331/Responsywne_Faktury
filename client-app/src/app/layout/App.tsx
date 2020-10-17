import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
import { IInvoice } from "../models/invoice";

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
      <Header as="h2" icon>
        <Icon name="users" />
        strona
        <Header.Subheader>
          Manage your account settings and set e-mail preferences.
        </Header.Subheader>
      </Header>
      <List>
        {invoices.map((invoice) => (
          <List.Item key={invoice.id}>{invoice.invoiceNumber}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
