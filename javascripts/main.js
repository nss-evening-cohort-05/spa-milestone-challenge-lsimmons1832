function populatePage(cars) {
//insert into DOM
	var inventoryHolder = document.getElementById("container");
	var carString = "";
	var counter = 0;

	for (var i = 0; i < cars.length; i++) {
		var currentCar = cars[i];
		if(counter %3 === 0){
			carString += `<div class="row">`;
		}
		//build Dom string
		carString += `<div class="col-xs-6 col-md-4">`;
		carString += `<div class="thumbnail">`;
		carString += `<section><img src="${currentCar.image}" class="img-rounded img-responsive" alt="Responsive image">`;
		carString += `<h3>${currentCar.make} ${currentCar.model}</</h3>`;
		carString += `<h4>${currentCar.year}</h4>`;
		carString += `<h4>$${currentCar.price}</h4>`;
		carString += `<p>${currentCar.description}</p></section></div></div>`;
		counter++;
		if(counter%3 === 0){
			carString+= `</div><div class="clearfix visible-xs-block"></div>`;
		}
	}
	inventoryHolder.innerHTML = carString;
  // Now that the DOM is loaded, establish all the event listeners needed
   CarLot.activateEvents();
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
