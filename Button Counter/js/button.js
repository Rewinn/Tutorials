/*jslint browser:true */

function modify_qty (val) {
	var qty     = document.getElementById('quantity').value;
	var new_qty = parseInt(qty,10) + val;

	if (new_qty < 0) {
		new_qty = 0;
	}

	 document.getElementById('qty').value = new_qty;
     return new_qty;
}



















/*var add = 0;

function onClick() {
	add+=1;
	document.getElementById("clicks").innerHTML = clicks;
} 


var subtract = add - 1;

function onClick() {
	subtract;
	document.getElementById("clicks").innerHTML = clicks;
};
*/

