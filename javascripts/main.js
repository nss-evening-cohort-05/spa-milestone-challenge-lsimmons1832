var inventoryHolder = document.getElementById("container");
var cars = [];


function populatePage (inventoryData) {
	cars = CarLot.getInventory;
	cars.forEach(function(car){
  // Loop over the inventory and populate the page
  for (var i = 0; i < cars.length; i++) {
  	var currentCar = cars[i];
  	car += `<div><section><h3>${cars[i].make}</h3>`
  	car += `<h4>${cars[i].model}</h4>`;
  	car += `<h4>${cars[i].year}</h4>`;
  	car += `<h4>${cars[i].price}</h4>`;
  	car += `<h4>${cars[i].description}</h4></div>`;
  }
  	inventoryHolder.innerHTML = cars;
	});
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
console.log(cars);
