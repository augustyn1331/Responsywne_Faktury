using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Invoices.Any())
            {
                var invoices = new List<Invoice>
                {
                    new Invoice
                    {
                        InvoiceNumber = "1/09/2020",
                        Seller = "Polsport",
                        SellerNIP = "20233111",
                        SellerAddress = "ul. Połczyńska 99",
                        AccountNumber = "881020000000000029391111",
                        Customer = "Polsport",
                        CustomerNIP = "20233111",
                        CustomerAddress = "ul. Połczyńska 99",
                        Date = DateTime.Now.AddMonths(-1),
                        Currency = "PLN",
                        PaymentMethod = "przelew",
                        PaymentDate = "14 dni",
                        Comments = "proszę o szybką wysyłkę",
                        Net = 0,
                        Gross = 0,
                    },
                    new Invoice
                    {
                        InvoiceNumber = "1/10/2020",
                        Seller = "IUVO CARS",
                        SellerNIP = "9491735358",
                        SellerAddress = "ul.Dębowa 4, 42-202, Częstochowa",
                        AccountNumber = "8810200000000377778931",
                        Customer = "Straż Pożarna",
                        CustomerNIP = "678111311",
                        CustomerAddress = "ul.Władysława Sikorskiego 82/94, 42-202, Częstochowa",
                        Date = DateTime.Now,
                        Currency = "PLN",
                        PaymentMethod = "przelew",
                        PaymentDate = "30 dni",
                        Net = 0,
                        Gross = 0
                    },
                    new Invoice
                    {
                        InvoiceNumber = "2/10/2020",
                        Seller = "IUVO CARS",
                        SellerNIP = "9491735358",
                        SellerAddress = "ul.Dębowa 4, 42-202, Częstochowa",
                        AccountNumber = "8810200000000377778931",
                        Customer = "Augustyn Głowacki",
                        CustomerNIP = "213791111",
                        CustomerAddress = "ul.Kopernika 50 m13, 42-202, Częstochowa",
                        Date = DateTime.Now.AddMonths(-2),
                        Currency = "PLN",
                        PaymentMethod = "gotówka",
                        PaymentDate = "45 dni",
                        Net = 0,
                        Gross = 0
                    },
                };


                context.Invoices.AddRange(invoices);
                context.SaveChanges();
            }
        }
    }
}
