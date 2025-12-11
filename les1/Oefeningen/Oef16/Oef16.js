

//DEEL 1
var arrayIngredienten = [];
document.getElementById("addIngredient").onclick = function ()
{

    let ingredient = document.getElementById("ingredientInput").value;
    if (ingredient == "")
    {
        document.getElementById("ingredientenResultaat").innerHTML = "Voor een ingrediënt in!.";
    }
    else 
    {
        if (arrayIngredienten.length == 0)
        {
            arrayIngredienten.push(ingredient);
            document.getElementById("ingredientenResultaat").innerHTML = ingredient + " toegevoegd!.";
            document.getElementById("ingredientInput").value = "";
        }
        else 
        {
            for (let i = 0; i < arrayIngredienten.length; i++)
            {
                if (arrayIngredienten[i].toLowerCase() == ingredient.toLowerCase())
                {
                    document.getElementById("ingredientenResultaat").innerHTML = ingredient + " ingrediëntnaam staat al in lijst!.";
                }
                else
                {
                    arrayIngredienten.push(ingredient);
                    document.getElementById("ingredientenResultaat").innerHTML = ingredient + " toegevoegd!.";
                    document.getElementById("ingredientInput").value = "";
                }
            }
        }
        
    }
}

document.getElementById("showIngredients").onclick = function ()
{
    let string = "";
    if(arrayIngredienten.length == 0)
    {
        document.getElementById("ingredientenResultaat").innerHTML = "Nog geen ingrediënten toegevoegd!.";
    }
    else if (arrayIngredienten.length > 0)
    {
        string = string + arrayIngredienten.length + " ingrediënten: " + "<br>";
        for (var i = 0; i < arrayIngredienten.length; i++)
        {
            string = string + arrayIngredienten[i] + ", ";
        }
    }   
    document.getElementById("ingredientenResultaat").innerHTML = string;
}

//DEEL 2
var arrayPizzas = [];
document.getElementById("addPizza").onclick = function ()
{
    let pizzaName = document.getElementById("pizzaNaam").value;
    let pizzaPrice = parseFloat(document.getElementById("pizzaPrijs").value);
    let pizzaAantal = parseInt(document.getElementById("pizzaAantal").value);

    if (pizzaName == "" || isNaN(pizzaAantal) || pizzaPrice < 0.01 || pizzaAantal < 1)
    {
        document.getElementById("pizzasResultaat").innerHTML = "Vul alle velden correct in!.";
    }
    else   
    {
        let pizza = 
        {
			naam: pizzaName,
			prijs: pizzaPrice,
			aantal: pizzaAantal
		};
        arrayPizzas.push(pizza);
        document.getElementById("pizzasResultaat").innerHTML = pizzaName + " toegevoegd!.";

        document.getElementById("pizzaNaam").value = "";
        document.getElementById("pizzaPrijs").value = "";
        document.getElementById("pizzaAantal").value = "";

    }
}

document.getElementById("showPizzas").onclick = function ()
{
    if (arrayPizzas.length == 0)
    {
        document.getElementById("pizzasResultaat").innerHTML = "Nog geen pizza's toegevoegd!.";
    }
    else 
    {
        string = "<table><tr><th>Naam</th><th>Prijs</th><th>Aantal</th><th>Subtotaal</th></tr>";
        for (let i = 0; i < arrayPizzas.length; i++)
        {
            string = string + "<tr><td>" + arrayPizzas[i].naam + "</td><td>€" + arrayPizzas[i].prijs.toFixed(2) + "</td><td>" + arrayPizzas[i].aantal + "</td><td>€" + (arrayPizzas[i].prijs * arrayPizzas[i].aantal).toFixed(2) + "</td></tr>";
        }
        document.getElementById("pizzasResultaat").innerHTML = string + "</table>";
    }
}

document.getElementById("showTotal").onclick = function ()
{
    if (arrayPizzas.length == 0)
    {
        document.getElementById("pizzasResultaat").innerHTML = "Voeg eerst pizza's toe!.";
    }
    else
    {
        var arraySubTotaal = [];
        let subTotaal = 0;
        for (let i = 0; i < arrayPizzas.length; i++)
        {
            subTotaal = subTotaal + (arrayPizzas[i].prijs * arrayPizzas[i].aantal);
        }
        

        string = "<table><tr><th>Naam</th><th>Prijs</th><th>Aantal</th><th>Subtotaal</th></tr>";
        for (let i = 0; i < arrayPizzas.length; i++)
        {
            string = string + "<tr><td>" + arrayPizzas[i].naam + "</td><td>€" + arrayPizzas[i].prijs.toFixed(2) + "</td><td>" + arrayPizzas[i].aantal + "</td><td>€" + (arrayPizzas[i].prijs * arrayPizzas[i].aantal).toFixed(2) + "</td></tr>";
        }
        string = string + "</table>" + "<br>" + "Totaal: €" + subTotaal.toFixed(2);

        document.getElementById("pizzasResultaat").innerHTML = string;
    }
    
}

document.getElementById("filterPizzas").onclick = function ()
{
    let minAantal = document.getElementById("minAantal").value;

    if (isNaN(minAantal) || minAantal < 1)
    {
        document.getElementById("pizzasResultaat").innerHTML = "Voer een geldig getal in!.";
    }

    if (arrayPizzas.length == 0)
    {
        document.getElementById("pizzasResultaat").innerHTML = "Voeg eerst pizza's toe!.";
    }

    if (arrayPizzas.length > 0 && !isNaN(minAantal) && minAantal >= 1)
    {
        let output = "<table><tr><th>Naam</th><th>Prijs</th><th>Aantal</th><th>Subtotaal</th></tr>";
        for (let i = 0; i < arrayPizzas.length; i++)
        {
            if (arrayPizzas[i].aantal >= minAantal)
            {
                output = output + "<tr><td>" + arrayPizzas[i].naam + "</td><td>€" + arrayPizzas[i].prijs.toFixed(2) + "</td><td>" + arrayPizzas[i].aantal + "</td><td>€" + (arrayPizzas[i].prijs * arrayPizzas[i].aantal).toFixed(2) + "</td></tr>";
            }
        }
        document.getElementById("pizzasResultaat").innerHTML = output + "</table>";
    }
}