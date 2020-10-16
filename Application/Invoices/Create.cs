using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using System;

namespace Application.Invoices
{
    public class Create
    {
        public class Command : IRequest
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
            public string Symbol { get; set; }
            public string GTU { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var invoice = new Invoice
                {
                    Id = request.Id,
                    InvoiceNumber = request.InvoiceNumber,
                    Seller = request.Seller,
                    SellerNIP = request.SellerNIP,
                    SellerAddress = request.SellerAddress,
                    AccountNumber = request.AccountNumber,
                    Customer = request.Customer,
                    CustomerNIP = request.CustomerNIP,
                    CustomerAddress = request.CustomerAddress,
                    Date = request.Date,
                    DueDate = request.DueDate,
                    Net = request.Net,
                    Gross = request.Gross,
                    Currency = request.Currency,
                    Comments = request.Comments,
                    PaymentMethod = request.PaymentMethod,
                    PaymentDate = request.PaymentDate,
                    Symbol = request.Symbol,
                    GTU = request.GTU
                };

                _context.Invoices.Add(invoice);

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }



    }
}