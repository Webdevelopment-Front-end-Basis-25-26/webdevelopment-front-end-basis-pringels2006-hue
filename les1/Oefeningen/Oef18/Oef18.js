let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function() 
{
    let plaatsNaam = document.querySelector("input").value;

    if (plaatsNaam === "") 
    {
        alert("Geef een plaatsnaam in!");
    }

    else
    {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + plaatsNaam + "&appid=0629d486101fd0ce96c015e4166ad7f2&units=metric&lang=nl";
        fetch(url)
        .then(function(response) 
        {
            return response.json();
        })
        .then(function(data)
        {
            console.log(data);
            console.log(data.name);
            let name = data.name;
            console.log(data.weather[0].description);
            let weer = data.weather[0].description;
            console.log(data.weather[0].icon);
            let weerIcon = data.weather[0].icon;
            let iconUrl = "https://openweathermap.org/img/w/" + weerIcon + ".png";
            console.log(data.sys.country);
            let country = data.sys.country;
            console.log(data.main.temp);
            let temp = data.main.temp;
            console.log (data.wind.speed);
            let windSpeed = data.wind.speed;
            document.getElementById("resultaat").innerHTML = name + ", " + country + " " + temp + "°C" + " " + windSpeed + "m/s";
            document.getElementById("resultaat").innerHTML += " " + weer + " " + "<img src='" + iconUrl + "'</img>";
        });

    }
});