using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Invoices
{
    public class List
    {
        public class Query : IRequest<List<Invoice>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Invoice>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Invoice>> Handle(Query request, CancellationToken cancellationToken)
            {
                var invoices = await _context.Invoices.ToListAsync();
                return invoices;
            }
        }

    }
}