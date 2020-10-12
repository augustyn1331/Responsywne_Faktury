using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Invoices;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public InvoicesController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet]
        public async Task <ActionResult<List<Invoice>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task <ActionResult<Invoice>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query{Id=id});
        }

    }
}