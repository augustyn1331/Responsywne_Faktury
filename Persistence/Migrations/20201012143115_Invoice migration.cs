using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Invoicemigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InvoiceNumber = table.Column<string>(nullable: true),
                    Seller = table.Column<string>(nullable: true),
                    SellerNIP = table.Column<string>(nullable: true),
                    SellerAddress = table.Column<string>(nullable: true),
                    AccountNumber = table.Column<string>(nullable: true),
                    Customer = table.Column<string>(nullable: true),
                    CustomerNIP = table.Column<string>(nullable: true),
                    CustomerAddress = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    DueDate = table.Column<DateTime>(nullable: true),
                    Net = table.Column<double>(nullable: false),
                    Gross = table.Column<double>(nullable: false),
                    Currency = table.Column<string>(nullable: true),
                    Comments = table.Column<string>(nullable: true),
                    PaymentMethod = table.Column<string>(nullable: true),
                    PaymentDate = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Invoices");
        }
    }
}
