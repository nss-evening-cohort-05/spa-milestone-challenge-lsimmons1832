var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
			inventoryLoader.addEventListener("error", CarLot.dataFail);
			inventoryLoader.open("GET", "javascripts/inventory.json");
			inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
				var cars = JSON.parse(inventoryLoader.responseText);
				inventory.push(cars);
				console.log(inventory);
     });
    },
    getInventory: function(){
    	return inventory;
  }
}
})();