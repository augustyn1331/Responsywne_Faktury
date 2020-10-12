using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Invoice
    {
        public Guid Id { get; set; }
        public string InvoiceNumber { get; set; }
        public string Seller { get; set; }
        public string SellerNIP { get; set; }
        public string SellerAddress { get; set; }
        public string AccountNumber { get; set; }
        public string Customer { get; set; }
        public string CustomerNIP { get; set; }
        public string CustomerAddress { get; set; }
        public DateTime Date { get; set; }
        public DateTime? DueDate { get; set; }
        public double Net { get; set; }
        public double Gross { get; set; }
        public string Currency { get; set; }
        public string Comments { get; set; }
        public string PaymentMethod { get; set; }
        public string PaymentDate { get; set; }

    }
}