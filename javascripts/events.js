var CarLot = (function(oldCarLot) {
  var selected = document.getElementsByClassName("thumbnail");
  var userInput = document.getElementById("userInput");

	    oldCarLot.activateEvents = function() {

	        for (var j = 0; j < selected.length; j++) {
	            selected[j].addEventListener("click", function() {
	                var sectionContainer = document.getElementsByClassName("border");
	                for (var i = 0; i < sectionContainer.length; i++) {
	                    sectionContainer[i].classList.remove("border");
	                }
	                this.classList.add("border");
	                userInput.focus();
	            });
	        }
	    };
    userInput.addEventListener("keypress", function(event) {
        var sectionContainer = document.getElementsByClassName("border");
        var selectedInventory = sectionContainer[0].childNodes[0].children[4];
        selectedInventory.innerHTML = "";
        var mimicMeElement = userInput.value;
        selectedInventory.innerHTML += mimicMeElement;
    });

    window.addEventListener("keypress", function(event) {
        if (event.keyCode == 13) {
            userInput.value = "";

            return false;
        }
    });
    return oldCarLot;
})(CarLot);