using Microsoft.EntityFrameworkCore.Migrations;

namespace BambooFinder.Migrations
{
    public partial class AddCommonNameToSpecies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CommonName",
                table: "Species",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CommonName",
                table: "Species");
        }
    }
}
