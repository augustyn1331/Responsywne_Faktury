using MediatR;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using System;

namespace Application.Invoices
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Seller { get; set; }
            public string SellerNIP { get; set; }
            public string SellerAddress { get; set; }
            public string AccountNumber { get; set; }
            public string Customer { get; set; }
            public string CustomerNIP { get; set; }
            public string CustomerAddress { get; set; }
            public DateTime? Date { get; set; }
            public DateTime? DueDate { get; set; }
            public double? Net { get; set; }
            public double? Gross { get; set; }
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
                var invoice = await _context.Invoices.FindAsync(request.Id);
                if (invoice == null)
                {
                    throw new Exception("Could not find Invoice");
                }
                invoice.Seller = request.Seller ?? invoice.Seller;
                invoice.SellerNIP = request.SellerNIP ?? invoice.SellerNIP;
                invoice.SellerAddress = request.SellerAddress ?? invoice.SellerAddress;
                invoice.AccountNumber = request.AccountNumber ?? invoice.AccountNumber;
                invoice.Customer = request.Customer ?? invoice.Customer;
                invoice.CustomerNIP = request.CustomerNIP ?? invoice.CustomerNIP;
                invoice.CustomerAddress = request.CustomerAddress ?? invoice.CustomerAddress;
                invoice.Date = request.Date ?? invoice.Date;
                invoice.DueDate = request.DueDate ?? invoice.DueDate;
                invoice.Net = request.Net ?? invoice.Net;
                invoice.Gross = request.Gross ?? invoice.Gross;
                invoice.Currency = request.Currency ?? invoice.Currency;
                invoice.Comments = request.Comments ?? invoice.Comments;
                invoice.PaymentMethod = request.PaymentMethod ?? invoice.PaymentMethod;
                invoice.PaymentDate = request.PaymentDate ?? invoice.PaymentDate;
                invoice.Symbol = request.Symbol ?? invoice.Symbol;
                invoice.GTU = request.GTU ?? invoice.GTU;

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}