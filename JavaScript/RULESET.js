//SORT AN ARRAY NUMERICALLY
var my_array = [10, 56, 33, 345, 2, 78, 10];

//The argument
my_array.sort(function (a, b) {return a - b;});

//The Result
[2, 10, 10, 33, 56, 78, 345]





//RANDOMIZE AN ARRAY
var my_array = [12, 15, 43, 5666];

//The Argument
my_array.sort (function (a, b) {
	return Math.random() -0.5;
});


//The Result 
[15, 43, 12, 5666]







//REVERSE AN ARRAY
var my_array = [1, 2, 3, 4, 5];

//Call the REVERSE
my_array.reverse();







//ADD TWO ARRAYS TOGETHER - CONCAT
var a = [1, 2, 3];

var b = [10, 11, 12];

var c = a.concat(b);

//Result
console.log(c);
[1, 2, 3, 10, 11, 12]





//ADD NUMBERS TO AN ARRAY
var a = [1, 2, 3, 4, 5, 6];

var b = a.concat(7, 8, 9, 10);

//The Result
console.log(b);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]





//SLICE AN ARRAY (pulling out an array from a certain range)
var my_array = [1, 2, 3, 4, 5];

var my_result = my_array.slice(1, 4); //Starts at 0. Start on, stop before

console.log(my_result);
[2, 3, 4]





//JOIN AN ARRAY
var words = ["My", "name", "is", "Rachel"];

var sentence = words.join(" ");     //We're joinging the array and passing a space into .join

console.log(sentence);
My name is Rachel



//REMOVE A SPECIFIC PIECE OF DATA FROM AN ARRAY - OPTION 1: USE JS KEYWORD "DELETE"
var array = [0, 1, 2, 3, 4, 5, 6];

console.log(array.toString());
2 0,1,2,3,4,5,6

delete array[3];

console.log(array.toString());
2 0,1,2,,4,5,6 //notice it leaves an undefined value.  see below for the fix = splice
undefined





//MOVE OVER A SPECIFIC INDEX OF DATA
var b = [1, 2, 3, 4, 5];

delete b[2];

console.log(b.toString());
VM4031:2 1,2,,4,5  //THE INDEX OF 2 WAS TAKEN OUT AND UNDEFINED WAS LEFT IN ITS PLACE

b.splice(2, 1); //SPLICE WILL TAKE OUT AND REMOVE 1 INDEX, STARTING AT INDEX 2.

console.log(b.toString());
1,2,4,5





//INSERT DATA USING SPLICE

var my_array = [0, 1, 2, 3, 4, 5, 6];

my_array.splice(2, 0, "two");  //inserting "two" starting at the 2nd index.  0 means I'm not removing  
							   //can add as many elements as you want.
console.log(my_array.toString());
0,1,two,2,3,4,5,6


//FUNCTIONS










