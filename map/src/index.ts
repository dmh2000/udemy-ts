import User from "./User";
import Company from "./Company";
import Map from "./Map";
// import {} from "google";
// import {} from "google.maps";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

// const e = document.querySelector("#map");
// console.log(e);
// const map = new google.maps.Map(e, {
//   zoom: 1,
//   center: { lat: 0, lng: 0 },
// });
// map.setCenter({ lat: 39.5, lng: -119.7 });
// map.setZoom(8);

const map = new Map();
map.addMarker(user);
map.addMarker(company);
