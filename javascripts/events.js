var CarLot = (function(oldCarLot) {
  var section = document.getElementsByClassName("col-xs-6 col-md-4");
  var userInput = document.getElementById("form-control");

	return {
	    activateEvents: function() {
	        console.log("I'm inside the event func", section);

	        for (var j = 0; j < section.length; j++) {
	            section[j].addEventListener("click", function() {
	                var sectionContainer = document.getElementsByClassName("border");
	                for (var i = 0; i < sectionContainer.length; i++) {
	                    sectionContainer[i].classList.remove("border");
	                }
	                this.classList.add("border");
	                userInput.focus();
	            });
	        }
	    };

	}
	return oldCarLot;
})(CarLot);