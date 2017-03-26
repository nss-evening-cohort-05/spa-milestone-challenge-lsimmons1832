var CarLot = (function() {
    var inventory = [];

    return {
      loadInventory: function(callback) {
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.overrideMimeType("javascripts/json");
        inventoryLoader.open("GET", "inventory.json", true);
        inventoryLoader.onreadystatechange = function() {
                if (inventoryLoader.readyState === 4 && inventoryLoader.status == "200") {

                    inventoryLoader.addEventListener("load", function(text) {
                    	callback(inventoryLoader.responseText);
                        // var cars = JSON.parse(text);
                        // inventory.push(callback);
                        // callback(inventoryLoader.inventory);
                    });
              		inventoryLoader.send(null);
                }
            }
      },
      getInventory: function() {
          return inventory;
      }
    }
})();