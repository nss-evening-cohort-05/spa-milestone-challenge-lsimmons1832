var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function () {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
				//set value of private array
				inventory = JSON.parse(this.responseText).cars;
				console.log("inventory being passed in", inventory);
				populatePage(inventory);
     });	
			inventoryLoader.open("GET", "javascripts/inventory.json");
			inventoryLoader.send();
   }
	}
})();
CarLot.loadInventory();