//Outline of process:
    //event listener on search button & console.log function to confirm it works
    //console.log what user types into box and try to grab data being input to box
    //set cityName = to input

//10-1-23: Testing the functionality of the API - successful//
    //var cityName = "New Orleans";
    //var fetchUrl = "https://geocode.maps.co/search?city=" + cityName;
    //lat and lon returned to console

//10-2-23: Variables defined, function created, event listener added for button on click,
    //HTML updated to include search-form id: used for getElementById/querySelector
    //No errors currently in console

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
addEventListener("click", function(event) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        fetchData();
      });
    })}