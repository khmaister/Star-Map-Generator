var lat= 0;
var lon= 0;
var counter = 0
//Assigning global variables
var cityName = document.getElementById("search-form").value;
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
})
}

//Adding event listener to submitButton
if(submitButton){
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        fetchData();
        counter = 1;
        sunriseData();
      });
    }


// Sunrise Api
//https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400;
function sunriseData(){
    if (counter === 1){
        var sunriseFetch = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon;
        fetch(sunriseFetch).then(
            function (response){
            console.log(response.body);  
            }
        )}
}
