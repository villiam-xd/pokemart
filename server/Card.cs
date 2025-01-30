public class Card
{
    public string id { get; set; }
    public string name { get; set; }
    public string supertype { get; set; }
    public string[] subtypes { get; set; }
    public string level { get; set; }
    public string hp { get; set; }
    public string[] types { get; set; }
    public string evolvesFrom { get; set; }
    public Ability[] abilities { get; set; }
    public Attack[] attacks { get; set; }
    public Weakness[] weaknesses { get; set; }
    public string[] retreatCost { get; set; }
    public int convertedRetreatCost { get; set; }
    public string number { get; set; }
    public string artist { get; set; }
    public string rarity { get; set; }
    public string flavorText { get; set; }
    public int[] nationalPokedexNumbers { get; set; }
    public Legalities legalities { get; set; }
    public Images images { get; set; }
    public string[] evolvesTo { get; set; }
    public Resistance[] resistances { get; set; }
    public string[] rules { get; set; }
}

public class Legalities
{
    public string unlimited { get; set; }
    public string expanded { get; set; }
    public string standard { get; set; }
}

public class Images
{
    public string small { get; set; }
    public string large { get; set; }
}

public class Ability
{
    public string name { get; set; }
    public string text { get; set; }
    public string type { get; set; }
}

public class Attack
{
    public string name { get; set; }
    public string[] cost { get; set; }
    public int convertedEnergyCost { get; set; }
    public string damage { get; set; }
    public string text { get; set; }
}

public class Weakness
{
    public string type { get; set; }
    public string value { get; set; }
}

public class Resistance
{
    public string type { get; set; }
    public string value { get; set; }
}