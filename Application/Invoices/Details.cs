using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;

namespace Application.Invoices
{
    public class Details
    {
         public class Query : IRequest<Invoice>
        {
        public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Invoice>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Invoice> Handle(Query request, CancellationToken cancellationToken)
            {
                var invoice = await _context.Invoices.FindAsync(request.Id);
                return invoice;
            }

        }
    }
}