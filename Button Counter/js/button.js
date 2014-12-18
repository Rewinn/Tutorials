/*jslint browser:true */
function downCounter () {
	var quantity   = document.getElementById("qty");
	quantity.value = parseInt(quantity.value, 10) - 1;

	if (quantity.value < 0) {
		quantity.value = 0;
	}
}

var clickDown = document.getElementById("minus");
clickDown.addEventListener("click", downCounter, false);



function upCounter () {
	var quantity     = document.getElementById("qty");
	  quantity.value = parseInt(quantity.value, 10) + 1;
}

var clickUp = document.getElementById("plus");
clickUp.addEventListener("click", upCounter, false);





