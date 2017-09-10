/**
 *  To understand use case of Global/Local variables
 */

var bill = 0;
bill = getTotalBillAmount();    // Collects the total bill amount in a global variable
console.log("Total Bill Amount is " + bill);

function getTotalBillAmount() {
	var amount = 0; // amount here is a local variable used to keep the current value of amount
	amount += getTacoAmount();
	amount += getBurritoAmount();
	return amount;
}

function getTacoAmount(){
	return 4.5;
}

function getBurritoAmount(){
	return 6.5;
}