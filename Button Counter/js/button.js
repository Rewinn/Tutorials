/*jslint browser:true */

function downCounter () {
	var downButton = document.getElementById("minus");
	if (downButton.value <= 0) {
		subtract = 0;
	}	else {
		subtract = -1;
	}
	console.log("boo");
}

var clickDown = document.getElementById("minus");
clickDown.addEventListener("click", downCounter, false);

function upCounter () {
	var quantity = document.getElementById("qty");
	console.log("YAY!");
	if (quantity.value >= 0) {
		quantity.value = +1;
	}
}

var clickUp = document.getElementById("plus");
clickUp.addEventListener("click", upCounter, false);





