using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Card>? cards = new();

app.MapGet("/api/cardbrowse", GetCardsFromJson);

app.Run();

async Task<List<Card>> GetCardsFromJson()
{
    string fileName = "carddata.json";
    string jsonString = File.ReadAllText(fileName);
    cards = JsonSerializer.Deserialize<List<Card>>(jsonString);
    return cards;
}