//DEEL 1
var scoreRood = 0;
var scoreBlauw = 0;
document.getElementById("btnRoodPlus1").onclick = function ()
{
    scoreRood++;
    updateScores();
}

document.getElementById("btnRoodPlus3").onclick = function ()
{
    scoreRood += 3;
    updateScores();
}

document.getElementById("btnBlauwPlus1").onclick = function ()
{
    scoreBlauw++;
    updateScores();
}

document.getElementById("btnBlauwPlus3").onclick = function ()
{
    scoreBlauw += 3;
    updateScores();
}

document.getElementById("btnResetScores").onclick = function ()
{
    scoreRood = 0;
    scoreBlauw = 0;
    updateScores();
}

document.getElementById("updateRood").onclick = function ()
{
    scoreRood = parseInt(document.getElementById("valueRood").value);
    updateScores();
}

document.getElementById("updateBlauw").onclick = function ()
{
    scoreBlauw = parseInt(document.getElementById("valueBlauw").value);
    updateScores();
}

function updateScores()
{
    document.getElementById("scoreRood").innerHTML = scoreRood;
    document.getElementById("scoreBlauw").innerHTML = scoreBlauw;
}

//DEEL 2

document.getElementById("btnRood").onclick = function ()
{
    document.getElementById("kleurBox").style.backgroundColor = "#FF0000";
}

document.getElementById("btnBlauw").onclick = function ()
{
    document.getElementById("kleurBox").style.backgroundColor = "#0000FF";
}

document.getElementById("btnGroen").onclick = function ()
{
    document.getElementById("kleurBox").style.backgroundColor = "#00FF00";
}

document.getElementById("kleurKiezer").onchange = function ()
{
    let gekozenKleur = document.getElementById("kleurKiezer").value;
    document.getElementById("kleurBox").style.backgroundColor = gekozenKleur;
}

//DEEL 3

document.getElementById("btnBericht").onclick = function ()
{
    let naam = "";
    let today = new Date();
    today.setHours(0,0,0,0);

    let dob = new Date(document.getElementById("geboortedatum").value);
    naam = document.getElementById("voornaam").value;
    achternaam = document.getElementById("naam").value;

    let age = today.getFullYear() - dob.getFullYear();

    document.getElementById("leeftijdBericht").innerHTML = "Hallo " + naam + " " + achternaam + ", je wordt dit jaar " + age + " jaar oud.";
}

//DEEL 4
let hasBorder = false;

document.getElementById("box").onmouseenter = function ()
{
    document.getElementById("box").style.backgroundColor = "#00FF00";
    document.getElementById("resultaat").innerHTML = "De box werd betreden.";
}

document.getElementById("box").onmouseleave = function ()
{
    document.getElementById("box").style.backgroundColor = "#FF0000";
    document.getElementById("resultaat").innerHTML = "De box werd verlaten.";
    if (hasBorder)
    {
        document.getElementById("box").style.border = "0px solid #000000";
    }
}

document.getElementById("box").onclick = function ()
{
    document.getElementById("box").style.border = "5px solid #000000";
    hasBorder = true;
}

//DEEL 5
var isOpen = false;
document.getElementById("menuButton").onclick = function ()
{
    const menuButton = document.querySelector('#menuButton');
    if (isOpen == true)
    {
        menuButton.classList.add("closed");
        isOpen = false;
    }
    else if (isOpen == false)
    {
        menuButton.classList.remove("closed");
        isOpen = true;
    }
}