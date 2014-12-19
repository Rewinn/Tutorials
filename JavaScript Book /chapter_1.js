//Greeting
var salutation = "Howdy, ";
var name       = "Chris";
var message    = salutation + name +'!';

var welcome = document.getElementById('greeting');
welcome.textContent = message;



//Sign Input
var sign       = 'I love Berners';
var tiles      = sign.length;
var cost       = 5;
var shipCost   = 10;
var subtotal   = tiles * cost;
var grandTotal = subtotal + shipCost;

//Sign Output
var elSign          = document.getElementById('userSign');
elSign.textContent  = sign;

var elTiles         = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal      = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subtotal;

var elShip          = document.getElementById('shipping');
elShip.textContent  = '$' + shipCost;

var elTotal         = document.getElementById('total');
elTotal.textContent = '$' + grandTotal;




