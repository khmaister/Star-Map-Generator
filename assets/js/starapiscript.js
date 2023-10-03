var dateEl = document.getElementById("date");
var cityEl = document.getElementById("city");
//https://api.astronomyapi.com/api/v2/studio/star-chart


const authString= btoa('${ecdd947d-cf12-4360-bc64-5227f9d20eda}:${1c26432e95330d72eb2534bd5b2eac0efe766b1a6dc67fa59a9e83b42bb6349ddaa6faf5194f38332bae31388c9b048f0215fbb238bda25170b9c40061085be3f391dc14a87a9f6fccf6aee3eb31a78bd63abcecd2cd73cbe27447e69da0a638c0053bac4db140bc2cd5e88b6d7037d9}');
//star map generator
document.addEventListener("DOMContentLoaded", function () {
    var client = new AstronomyAPI({
      basicToken: "authString",
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
