document.getElementById("oefening1").onclick = function () 
{
    [getal1, getal2] = VraagGetal();
    string = VergelijkGetallen(getal1, getal2);
    document.getElementById("getal1").innerHTML = getal1;
    document.getElementById("getal2").innerHTML = getal2;
    document.getElementById("resultaat1").innerHTML = string;
}

document.getElementById("oefening2").onclick = function ()
{
    min = 1;
    max = 20;
    let getal
    getal = VraagGetalInBereik(min, max);
    document.getElementById("getal").innerHTML = getal;
    let string
    string = GenereerTafels(getal);
    document.getElementById("resultaat2").innerHTML = string;
}

document.getElementById("oefening3").onclick = function ()
{
    demonstreerVarVsLet();
}
function VraagGetal()
{
    let getal1;
    let getal2;
    do
    {
        getal1 = parseInt(prompt("Geef 1e getal in:"));
    }
    while (isNaN(getal1));

    do
    {
        getal2 = parseInt(prompt("Geef 2e getal in:"));
    }
    while (isNaN(getal2));

    return [getal1, getal2];
}

document.getElementById("oefening4").onclick = function ()
{
    min = 1;
    max = 100;
    getal = VraagGetalInBereik(min, max);
    let string = "";

    for (let i = 1; i <= getal; i++)
    {
        string = string + i + " : ";

        if (i % 3 == 0 && i % 5 == 0)
        {
            string = string + "FizzBuzz";
        }
        else if (i % 5 == 0)
        {
            string = string + "Buzz";
        }
        else if (i % 3 == 0)
        {
            string = string + "Fizz";
        }
        else
        {
            string = string + i;
        }
        string = string + "<br>";
    }

    document.getElementById("resultaat4").innerHTML = string;
}

document.getElementById("oefening5").onclick = function ()
{
    getal = VraagGetalInBereik(2, 100);
    bool = isPriem(getal);
    string = toonPriemGetallen(2, getal);
    document.getElementById("resultaat5").innerHTML = string;
}

function VraagGetalInBereik(min, max)
{
    let getal

    do
    {
    getal = parseInt(prompt("Geef een getal tussen " + min + " en " + max + ":"));
    }
    while (isNaN(getal) && getal < min && getal > max);
    
    return getal;
    
}

function VergelijkGetallen(getal1, getal2)
{
    if (getal1 == getal2)
    {
        return "Het eerste getal is gelijk aan het tweede getal.";
    }
    else if (getal1 >= getal2)
    {
        return "Het eerste getal is groter dan het tweede getal.";
    }
    else if (getal1 <= getal2)
    {
        return "Het eerste getal is kleiner dan het tweede getal.";
    }
}

function GenereerTafels(getal)
{  
    let string = "";  
    let berekening;
    for (let i = 1; i <= 20; i++)
    {
        berekening = i * getal;
        string = string + i + " x " + getal + " = " + berekening + "<br>";
    }

    return string;
}

function demonstreerVarVsLet() {
    let resultaatDiv = document.getElementById("resultaat3");
    resultaatDiv.innerHTML = "<h3>Verschil tussen var en let:</h3>";
 
 
    // Voorbeeld 1: Block scope
    resultaatDiv.innerHTML += "<strong>1. Block Scope:</strong><br>";
    if (true) {
        var varGetal = 10;
        let letGetal = 20;
    }
    resultaatDiv.innerHTML += "var buiten block: " + varGetal + "<br>";
    //resultaatDiv.innerHTML += "let buiten block:" + letGetal + "<br>"; 
    resultaatDiv.innerHTML += "let buiten block: niet toegankelijk (ReferenceError)<br><br>";
 
 
    // Voorbeeld 2: Loop scope probleem met var
    resultaatDiv.innerHTML += "<strong>2. Loop Scope Probleem:</strong><br>";
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("var i:", i); // Print altijd 3!
            resultaatDiv.innerHTML += "var i in timeout: " + i + "<br>"; // wordt pas geprint na timeout
        }, 100);
    }
    resultaatDiv.innerHTML += "var i na loop: " + i + "<br>";
 
 
    for (let j = 0; j < 3; j++) {
        setTimeout(function () {
            console.log("let j:", j); // Print 0, 1, 2
            resultaatDiv.innerHTML += "var j in timeout: " + j + "<br>"; // wordt pas geprint na timeout
        }, 100);
    }
    //resultaatDiv.innerHTML += "let j na loop:" + j +"<br>";
    resultaatDiv.innerHTML += "let j na loop: niet toegankelijk (ReferenceError)<br><br>";
}

function isPriem(getal) 
{
    if (getal <= 1)
    {
        return false;
    }
    else if (getal == 2)
    {
        return true;
    }
    else if (getal == 3)
    {
        return true;
    }
    else if (getal % 2 == 0)
    {
        return false;
    }
    for (let i = 3; i < getal; i = i + 2)
    {
        if (getal % i == 0)
        {
            return false;
        }
        else 
        {
            return true;
        }
    }  
}

function toonPriemGetallen(min, max)
{
    string = "Getal: " + max + "<br>";
    if (isPriem(max))
    {
        string = string + max + " is een priemgetal!" + "<br>" + "<br>";
    }
    else 
    {
        string = string + max + " is geen priemgetal." + "<br>" + "<br>";
    }
    string = string + "Priemgetallen van " + min + " tot " + max + ": " + "<br>";
    for (let i = min; i <= max; i++)
    {
        if (isPriem(i) == true)
        {
            string = string + i + ", ";
        }
    }
    return string;
}


