function populatePage(cars) {
//insert into DOM
	var inventoryHolder = document.getElementById("container");
	var carString = "";

	for (var i = 0; i < cars.length; i++) {
		var currentCar = cars[i];

		//build Dom string
		carString+= `<div class="col-xs-6 col-md-4"><div class="thumbnail">`;
		carString+= `<section><img src="${currentCar.image}" class="img-rounded img-responsive" alt="Responsive image">`;
		carString+= `<h3>${currentCar.make} ${currentCar.model}</</h3>`;
		carString+= `<h4>${currentCar.year}</h4>`;
		carString+= `<h4>$${currentCar.price}</h4>`;
		carString+= `<p>${currentCar.description}</p></section></div></div>`;
	}
	inventoryHolder.innerHTML = carString;
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}
// function highlightSelected(){
// var section = document.getElementsByClassName("col-xs-6 col-md-4");
// var userInput = document.getElementById("form-control");

// 	for (var j = 0; j < section.length; j++) {
// 		section[j].addEventListener("click", function(){
// 			var sectionContainer = document.getElementsByClassName("border");
// 			for (var i = 0; i < sectionContainer.length; i++) {
// 				sectionContainer[i].classList.remove("border");
// 			}
// 			this.classList.add("border");
// 			userInput.focus();
// 	});
// }

// userInput.addEventListener("keypress", function(event){
// 	var sectionContainer = document.getElementsByClassName("border");
// 	var bioContainer = sectionContainer[0].childNodes[0].children[2];
// 	bioContainer.innerHTML = "";
//   var mimicMeElement = userInput.value;
//   bioContainer.innerHTML += mimicMeElement;
//   console.log("sectionContainer.innerHTML", sectionContainer);
// });

// window.addEventListener("keypress", function(event){
//     if(event.keyCode==13){
//         userInput.value = ""; 

//         return false; 
//     }
// });

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);