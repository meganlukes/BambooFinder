using Microsoft.EntityFrameworkCore.Migrations;

namespace BambooFinder.Migrations
{
    public partial class WebsiteToNursery : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Website",
                table: "Nurseries",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Website",
                table: "Nurseries");
        }
    }
}
