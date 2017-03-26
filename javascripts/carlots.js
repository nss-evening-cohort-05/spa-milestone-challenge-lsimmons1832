var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function () {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
				//set value of private array
				inventory = JSON.parse(this.responseText).cars;
				console.log("inventory being passed in", inventory);

				//insert into DOM
				var inventoryHolder = document.getElementById("container");
				var carString = "";

				for (var i = 0; i < inventory.length; i++) {
					var currentCar = inventory[i];

					//build Dom string
					carString+= `<div><section><h3>${currentCar.make}</h3>`
  				carString+= `<h4>${currentCar.model}</h4>`;
  				carString+= `<h4>${currentCar.year}</h4>`;
  				carString+= `<h4>${currentCar.price}</h4>`;
  				carString+= `<h4>${currentCar.description}</h4></div>`;
				}
				inventoryHolder.innerHTML = carString;
     });	
			inventoryLoader.open("GET", "javascripts/inventory.json");
			inventoryLoader.send();
    // },
    // getInventory: function(){
    // 	return inventory;
   }
	}
})();
CarLot.loadInventory();