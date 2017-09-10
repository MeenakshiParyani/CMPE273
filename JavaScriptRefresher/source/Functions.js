/**
 *  Recursive Function to calculate the factorial of a number
 */

function factorial(number){
	var fact = 1;
	for(var i=number; i>=1;i--){
		fact = fact * i;
	}
	return fact;
}

var fact = factorial(6);
console.log("Factorial of number 6 is " + fact);

