var lat= 36.7264511;
var lon= 4.4150211;
var counter = 0
//Assigning global variables
var cityName = "Cincinnati"//document.getElementById("search-form").value;
var fetchUrl = "https://geocode.maps.co/search?q=" + cityName;
var submitButton = document.querySelector("#search-form");
let sunriseset = document.querySelector('.sunriseset');
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
    submitButton.addEventListener("click", async function (event) {
        event.preventDefault();
        fetchData();
        counter = 1;
        console.log(counter);
        var data = await sunriseData();
        console.log(data);
        var setTime = data.results.sunset;
        console.log("Sunset:",setTime);
        var riseTime = data.results.sunrise;
        console.log("Sunrise:",riseTime);
        sunriseset.innerHTML += "<h3>Sunrise: "+riseTime+"<h3>";
        sunriseset.innerHTML += "<h3>Sunset: "+setTime+"<h3>";


      });
    }


// Sunrise Api
//https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400;
function sunriseData(){
    if (counter === 1){
        var sunriseFetch = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon;
        
        return fetch(sunriseFetch).then(
            function (response){
            //console.log(response.json()); 
            return response.json();
            
            

            }
        )
    }
}
