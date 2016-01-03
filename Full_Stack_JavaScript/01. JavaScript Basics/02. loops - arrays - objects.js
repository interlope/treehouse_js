LOOPS ARRAYS OBJETS
=======================================


LOOPS
---------------------------------------

// While Loop
while ( condition ) {
	
}

// Do While Loop
do {
	
} while ( )

// Not operator
! boolean

// For Loop
for ( var counter = 0; counter < 10; counter += 1 ) {
	
}

// break out of loop
break;

// 'DRY' Programming
'Dont Repeat Yourself'


ARRAYS
---------------------------------------

// Declare array
var myArray = [ ];
var myArray = [ 'a', 'b', 'c' ];
var myArray = [
	'a',
	'b',
	'c'
];

// add items to end of array
myArray.push( value );   // add and return item to end of array
myArray.push( 7, 8, 9 );

// add items to start of array
myArray.unshift( value );
myArray.unshift( 0, 1, 2 );

// remove item from array
myArray.pop();   // remove and return last item
myArray.shift(); // remove and return first item in array (like a queue)

// split array into string
var string = myArray.split(', ');  // return string with comma separated list

// concatinate two arrays
var arr1 = [ 1, 2, 3 ];
var arr2 = [ 4, 5, 6 ];
var arr3 = arr1.concat( arr2 );

// find index of value
var arr = [ 'a', 'b', 'c' ];
var position = arr.indexOf( 'b' );  // => 1
var position = arr.indexOf( 'z' );  // => -1

// two dimensional arrays
var arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]
arr[0];   // => [1, 2, 3]
arr[0][3];  // => [3]


OBJECTS
---------------------------------------

// object literal
var person = {
	name: 'Sarah',
	country: 'US',
	grades: [80, 85, 90]
};

// bracket notation
alert( person['name'] );
// dot notation
alert( person.name );
// dot notation can add value to object

// for in loop for object's properties
// can't use dot notation only bracket notation
for (var key in object) {
	console.log( object[key] );
}















































