var dateEl = document.getElementById("date");
var cityEl = document.getElementById("city");
//https://api.astronomyapi.com/api/v2/studio/star-chart


const authString= btoa('${6edc04ef-2570-4a5e-b297-531d86e90512}:${1c26432e95330d72eb2534bd5b2eac0efe766b1a6dc67fa59a9e83b42bb6349ddaa6faf5194f38332bae31388c9b048f0215fbb238bda25170b9c40061085be353b95d883b9a2b785f5dcc3281372083e3e0571228fda9bf0dcbfc0583e1f688853ae6bda44df5f6dbd6d70a68131ebb}');
//star map generator
document.addEventListener("DOMContentLoaded", function () {
    var client = new AstronomyAPI({
      basicToken: "authString",
    });
    client.starChart(
        {
            element: "#star-chart-element",
            //style: "inverted",
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
            }},
            (re) =>{
                console.log("done", re)
            },
    );
  });
