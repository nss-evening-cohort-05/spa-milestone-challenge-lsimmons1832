function populatePage(cars) {
//insert into DOM
	var inventoryHolder = document.getElementById("container");
	var carString = "";

	for (var i = 0; i < cars.length; i++) {
		var currentCar = cars[i];

		//build Dom string
		carString+= `<div class="col-xs-6 col-md-4"><div class="thumbnail">`;
		carString+= `<img src="${currentCar.image}">`;
		carString+= `<section><h3>${currentCar.make} ${currentCar.model}</</h3>`;
		carString+= `<h4>${currentCar.year}</h4>`;
		carString+= `<h4>$${currentCar.price}</h4>`;
		carString+= `<p>${currentCar.description}</p></section></div></div>`;
	}
	inventoryHolder.innerHTML = carString;
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);