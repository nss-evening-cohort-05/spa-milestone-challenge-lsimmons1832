// var cars = [];

function populatePage (cars) {
//insert into DOM
	var inventoryHolder = document.getElementById("container");
	var carString = "";

	for (var i = 0; i < cars.length; i++) {
		var currentCar = cars[i];

		//build Dom string
		carString+= `<div><section><h3>${currentCar.make}</h3>`
		carString+= `<h4>${currentCar.model}</h4>`;
		carString+= `<h4>${currentCar.year}</h4>`;
		carString+= `<h4>${currentCar.price}</h4>`;
		carString+= `<h4>${currentCar.description}</h4></div>`;
	}
	inventoryHolder.innerHTML = carString;
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
// console.log(cars);
