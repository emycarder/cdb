// (function() {
//   // Initialize and add the map
//   function initBaMap() {
//     // The location of Uluru
//     let mapCenter = { lat: 49.5888574, lng: 34.5574099 };
//     // The map, centered at Uluru
//     let mapEl = document.getElementById("map");
//     let cities = {
//       poltava: {
//         coords: { lat: 49.5891, lng: 34.557851 },
//         address: "Котляревского 2"
//       }
//     };
//     let newCoords = cities.poltava.coords;
//     let mapOptions = {
//       zoom: 4,
//       center: mapCenter
//     };

//     let $baMap = new google.maps.Map(mapEl, mapOptions);

//     for (const city in cities) {
//       let marker = new google.maps.Marker({
//         position: mapCenter,
//         map: $baMap,
//         icon: "favicon.png"
//       });
//     }
//     // The marker, positioned at Uluru
//   }
//   window.addEventListener("load", initBaMap);
// })();
