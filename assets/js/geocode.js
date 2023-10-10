
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


//Assigning global variables
var counter = 0;
var cityNameInput = document.getElementById("city");
var usernameInput = document.getElementById("username");
var submitButton = document.querySelector("#search-form");
var loginButton = document.getElementById("login-button");

// Adding event listener to submitButton
if (submitButton) {
  submitButton.addEventListener("submit", async function (event) {
    event.preventDefault();

    var username = getUsernameFromLocalStorage();
    var cityName = cityNameInput.value;

    if (username) {
      saveCityForUsername(username, cityName);

      var coordinates = await fetchData(cityName);
      if (coordinates) {
        counter = 1;
        var data = await sunriseData(coordinates.lat, coordinates.lon);
      }
    } else {
      alert("Please log in first to save the city.");
    }
  });
}

if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
 main

    var username = usernameInput.value;

    // Check if the username exists in local storage, Retrieve it or new save
    if (isUserLoggedIn(username)) {
      var savedCity = getCityForUsername(username);
      cityNameInput.value = savedCity;
    } else {
      saveUsernameToLocalStorage(username);
    }
  });
}

function isUserLoggedIn(username) {
  return !!localStorage.getItem(username);
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

function saveUsernameToLocalStorage(username) {
  localStorage.setItem("username", username);
}

function getUsernameFromLocalStorage() {
  return localStorage.getItem("username");
}

function saveCityForUsername(username, cityName) {
  localStorage.setItem(username, cityName);
}

function getCityForUsername(username) {
  return localStorage.getItem(username);
}

//Fetch Geocoding API
async function fetchData(cityName) {
  var fetchUrl = "https://geocode.maps.co/search?q=" + cityName;

  return fetch(fetchUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var coordinates = data[0];
      var lat = coordinates.lat;
      var lon = coordinates.lon;

      return { lat, lon };
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
      return null;
    });
}

// Fetch Sunrise Api
function sunriseData(lat, lon) {
  if (counter === 1) {
    var sunriseFetch =
      "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon;

    return (
      fetch(sunriseFetch)
        .then(function (response) {
          return response.json();
        })
        //pull data from JSON
        .then(function (results) {
          var sunriseTime = results.results.sunrise;
          var sunsetTime = results.results.sunset;

          // Display the data in the UI
          var targetElement = document.getElementById("sunriseset");
          targetElement.innerHTML = "";
          var sunriseHTML = document.createElement("p");
          sunriseHTML.textContent = "Sunrise Time: " + sunriseTime;
          var sunsetHTML = document.createElement("p");
          sunsetHTML.textContent = "Sunset Time: " + sunsetTime;
          targetElement.appendChild(sunriseHTML);
          targetElement.appendChild(sunsetHTML);
        })
        .catch(function (error) {
          console.error("Error fetching sunrise data:", error);
        })
    );
  }

}
