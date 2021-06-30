using Microsoft.EntityFrameworkCore.Migrations;

namespace BambooFinder.Migrations
{
    public partial class AddPhotoURLToSpecies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NurseryName",
                table: "Users",
                newName: "Username");

            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Species",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Species");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Users",
                newName: "NurseryName");
        }
    }
}
