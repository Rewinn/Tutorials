//add item to start and end of list
var list = document.getElementsByTagName('ul')[0];			//get ul element

//add to end of list

var newItemLast = document.createElement('li'); 			//create element
var newTextLast = document.createTextNode('tofu');  		//create text node
newItemLast.appendChild(newTextLast);  						//add text node to element
list.appendChild(newItemLast);  							//add element at end of list


//add to start of list
var newItemFirst = document.createElement('li');			//create element node
var newTextFirst = document.createTextNode('cacao nibs');	//create text node
newItemFirst.appendChild(newTextFirst);						//add text node to element
list.insertBefore(newItemFirst, list.firstChild);			//add element to first place in list


var listItems = document.querySelectorAll('li');			//grab all li elements 

//ADD CLASS OF COOL TO ALL ELEMENTS
var i;														//counter variable
for (i = 0; i < listItems.length; i++) {						//loop through elements
	listItems[i].className = 'cool';						//change class to cool
}

//ADD NUMBER OF ITEMS IN THE LIST TO HEADING
var heading     = document.querySelector('h2');				//get h2 element
var headingText = heading.firstChild.nodeValue;				//get h2 text
var totalItems  = listItems.length;							//No. of li elements
var newHeading  = headingText + '<span>' + totalItems + '</span>';   //content
heading.textContent = newHeading;							//update h2
