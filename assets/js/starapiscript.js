var dateEl = document.getElementById("date");
var cityEl = document.getElementById("city");
var buttonEl = document.getElementById("starbutton");
//https://api.astronomyapi.com/api/v2/studio/star-chart


const authString= btoa('ea497419-ae3d-45a4-9a4c-d8c18af824f5:1c26432e95330d72eb2534bd5b2eac0efe766b1a6dc67fa59a9e83b42bb6349ddaa6faf5194f38332bae31388c9b048f0215fbb238bda25170b9c40061085be3abfef8b07c9dce05425831718b1020a47dfd018cc97b532b4a28e6b50c6eb27c62ca4fe32f0f09b6581e8ad6197238ec');
//star map generator
//document.addEventListener("DOMContentLoaded", function () {
    buttonEl.addEventListener("click", function (e) {
        e.preventDefault()
    var client = new AstronomyAPI({
      basicToken: authString,
      method: 'GET',
    });
    client.starChart(
        {
            element: "#star-chart",
            style: "inverted",
            observer: {
                latitude: 12.775867,
                longitude: -23.239746,
                date: "2012-12-25",
            },
            view:{
                type:"constellation",
                parameters:{
                    constellation: "ori",
                },
            }
        },
            (re) =>{
                console.log("done", re)
         },
    );
  });
