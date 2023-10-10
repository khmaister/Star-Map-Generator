
//var lat= 36.7264511;
//var lon= 4.4150211;

var counter = 0
//Assigning global variables
//var cityName = "London"
var cityName =document.getElementById("search-form").value;
var fetchUrl = "https://geocode.maps.co/search?q=" + cityName;
var submitButton = document.querySelector("#search-form");


//Adding event listener to submitButton
if(submitButton){
    submitButton.addEventListener("click", async function (event) {
        event.preventDefault();
        var cityName = document.getElementById("search-form").value;

        var coordinates = fetchData(cityName);
        if (coordinates) {
            counter = 1;
            console.log(counter);

            var data = await sunriseData(coordinates.lat, coordinates.lon);
            console.log(data);
        }
    });
}

//Fetch Geocoding API 
function fetchData(){
    var fetchUrl = "https://geocode.maps.co/search?q=" + cityName;

return fetch(fetchUrl)
.then(function (res){
    return res.json()
})
.then(function (data){
    console.log(data);
    var coordinates = data [0]
    var lat = coordinates.lat;
    var lon = coordinates.lon;
    console.log("Coordinates:", coordinates);
    console.log("Latitude:", lat);
    console.log("Longitude:", lon);

    return { lat, lon };
})
.catch(function (error) {
    console.error("Error fetching data:", error);
    return null;
});
}

// Fetch Sunrise Api
//https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400;
function sunriseData(lat, lon){
    if (counter === 1){
        var sunriseFetch = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon;
        
        return fetch(sunriseFetch)
        .then(function (response){
            //console.log(response.json()); 
            return response.json();
            }
        )
        //pull data from JSON
        .then(function (results){
        //var promise = results [0]
        //var sunriseTime = results.sunrise;
        //var sunsetTime = results.sunset;
        var sunriseTime = results.results.sunrise;
        var sunsetTime = results.results.sunset;
            
        //console.log("Sunrise Data:", promise);
        console.log("Sunrise Time:", sunriseTime);
        console.log("Sunset Time:", sunsetTime); 

        // Get the target element where you want to display the times
        var targetElement = document.getElementById("sunriseset");
        // Clear previous data
        targetElement.innerHTML = ""; 

        // Create a new <p> element for sunrise time
        var sunriseHTML = document.createElement("p");
        sunriseHTML.textContent = "Sunrise Time: " + sunriseHTML;

        // Create a new <p> element for sunset time
        var sunsetHTML = document.createElement("p");
        sunsetHTML.textContent = "Sunset Time: " + sunsetHTML;

        // Append the elements to the target element
        targetElement.appendChild(sunriseHTML);
        targetElement.appendChild(sunsetHTML);
    })
    .catch(function (error) {
        console.error("Error fetching sunrise data:", error);
    });
    }

}
