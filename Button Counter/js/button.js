/*jslint browser:true */

function downCounter () {
	var subtract = document.getElementById("minus");
	if (this.value <= 0) {
		subtract = 0;
	}	else {
		subtract = -1;
	}
	console.log("boo");
}

var clickDown = document.getElementById("minus");
clickDown.addEventListener("click", downCounter, false);

function upCounter () {
	var addition = document.getElementById("plus");
	console.log("YAY!");
	if (this.value >= 0) {
		addition = +1;
	}
}

var clickUp = document.getElementById("plus");
clickUp.addEventListener("click", upCounter, false);






var newScreen = parseInt(origScreen, 10) + number;
  
  document.getElementById('screen').value = newScreen;
  return newScreen;