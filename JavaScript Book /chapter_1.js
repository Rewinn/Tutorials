//Greeting
var salutation = "Howdy, ";
var name       = "Chris";
var message    = salutation + name +'!';

var welcome = document.getElementById('greeting');
welcome.textContent = message;

var elSign = document.getElementById('userSign');

function calcCosts() {
	var tiles      = elSign.value.length;
	var cost       = 5;
	var shipCost   = 10;
	var subtotal   = tiles * cost;
	var grandTotal = subtotal + shipCost;

	var elTiles         = document.getElementById('tiles');
	elTiles.textContent = tiles;

	var elSubTotal      = document.getElementById('subTotal');
	elSubTotal.textContent = '$' + subtotal;

	var elShip          = document.getElementById('shipping');
	elShip.textContent  = '$' + shipCost;

	var elTotal         = document.getElementById('total');
	elTotal.textContent = '$' + grandTotal;	
}

// Run this on first page load.
calcCosts();

// Re-run it on change
elSign.addEventListener('keyup', calcCosts);