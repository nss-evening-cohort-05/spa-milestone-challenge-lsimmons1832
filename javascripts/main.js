// var cars = [];

function populatePage (inventory) {
var inventoryHolder = document.getElementById("container");
var carString = "";
var cars = CarLot.getInventory();
  // Loop over the inventory and populate the page
  for (var i = 0; i < inventory.length; i++) {
  	var currentCar = inventory[i];
  	carString+= `<div><section><h3>${cars[i].make}</h3>`
  	carString+= `<h4>${cars[i].model}</h4>`;
  	carString+= `<h4>${cars[i].year}</h4>`;
  	carString+= `<h4>${cars[i].price}</h4>`;
  	carString+= `<h4>${cars[i].description}</h4></div>`;
  }
  	inventoryHolder.innerHTML = carString;
  	return inventoryHolder;
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
// console.log(cars);
