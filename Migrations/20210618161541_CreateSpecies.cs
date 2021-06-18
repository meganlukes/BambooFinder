using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace BambooFinder.Migrations
{
    public partial class CreateSpecies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Species",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Info = table.Column<string>(type: "text", nullable: true),
                    MinHeight = table.Column<int>(type: "integer", nullable: false),
                    MaxHeight = table.Column<int>(type: "integer", nullable: false),
                    Clumping = table.Column<bool>(type: "boolean", nullable: false),
                    MinZone = table.Column<int>(type: "integer", nullable: false),
                    MaxZone = table.Column<int>(type: "integer", nullable: false),
                    MinLight = table.Column<int>(type: "integer", nullable: false),
                    MaxLight = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Species", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Species");
        }
    }
}
