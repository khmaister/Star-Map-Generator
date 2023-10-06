var lat= 24.53;
var lon= -63.25;
var counter = 0
//Assigning global variables
var cityName = "London"//document.getElementById("search-form").value;
var fetchUrl = "https://geocode.maps.co/search?q=" + cityName;
var submitButton = document.querySelector("#search-form");

//Fetch API 
function fetchData(){
    var fetchUrl = "https://geocode.maps.co/search?q=" + cityName;

fetch(fetchUrl).then(
    function (res){
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
})
}

//Adding event listener to submitButton
if(submitButton){
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        fetchData();
        counter = 1;
        console.log(counter);
        sunriseData();
      });
    }


// Sunrise Api
//https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400;
function sunriseData(){
    if (counter === 1){
        var sunriseFetch = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon+"callback=mycallback";
        fetch(sunriseFetch).then(
            function (response){
            console.log(response.body);  
            }
        )}
}
