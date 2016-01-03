JAVASCRIPT BASICS
=======================================

VARIABLES
---------------------------------------
var score;
var score = 0;

// Cant start with number
// leters numbers $ _
// escape character with backslash \[char]
prompt();



STRINGS
---------------------------------------
//https://developer.mozilla.org/en-US/


NUMBERS
---------------------------------------
int = parseInt(string)  -  convert string to integer
float = parseFloat(string) - convert string to float

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Math.floor() - round down
Math.ceil()  - round up

Random number between 1 and m:
Math.floor(Math.random() * m) + 1;


CONDITIONAL STATEMENTS
---------------------------------------
if (condition) {
	// code block
} else if { 

} else {
	
}

// table of common comparison operators
// http://cl.ly/image/0O2r2u2M3e0N

==  - equal to
("3" == 3) [true]
=== - strict equals to
("3" == 3) [false, string vs int]

// Single line comment

/*
	Multi
	Line
	Comment
*/


&& - and operator
|| - or  operator


FUNCTIONS
---------------------------------------

// Standard function declaration
function goToCoffee() {
	
}
goToCoffee();

// Anonymous function
// Function expression
var alertRandom = function () {
	var random = alert(Math.floor( Math.random() * 6 ) + 1);
	alert(random);
};

isNaN('nine') => true
isNaN(9) => false

throw new Error('error message');























