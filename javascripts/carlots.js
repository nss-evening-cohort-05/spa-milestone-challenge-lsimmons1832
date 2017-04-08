var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
				//set value of private array
				inventory = JSON.parse(this.responseText).cars;

				callback(inventory);
     });	
			inventoryLoader.open("GET", "javascripts/inventory.json");
			inventoryLoader.send();
   }
	}
})();
