var lastItem = "";
var delay = 2500;

function showDialog(itemName,itemType) {

	// hide last div

	if (lastItem) {
		document.getElementById(lastItem).classList.remove("visibleDiv");
		document.getElementById(lastItem).classList.add("hiddenDiv");
	}

	//if value of the box is not nothing and an object with 
    //that name exists, then change the class
	
	if (lastItem != itemName) {
		if (itemName && document.getElementById(itemName)) {
			lastItem = itemName;
			document.getElementById(itemName).classList.remove("hiddenDiv");
			document.getElementById(itemName).classList.add("visibleDiv");
			
    		//closes the item after time delay
			
			if (itemType == "alert") {
				lastItem = "";
				document.getElementById(itemName).classList.remove("visibleDiv");
				document.getElementById(itemName).classList.add("fadeOutDiv");
				setTimeout(function(){
					document.getElementById(itemName).classList.remove("fadeOutDiv");
					document.getElementById(itemName).classList.add("hiddenDiv");
				}, delay);
			}
		}
	} else {
		lastItem = "";
	}
}