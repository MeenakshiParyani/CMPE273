/**
 *  To create Custom Objects
 */

//var employee = {}; // Notation to define an object
var employee = new Object(); // Alternative notation to define an object

employee.id = 1234;
employee.name = "Meenakshi Paryani";
employee['dept'] = "Operations"; // Alternative way to define object properties
employee.ssn = "004-456-7878";
employee.dln = "Y675678";

console.log("Employee Id is " + employee.id);
console.log("Employee Name is " + employee.name);
console.log("Employee Department is " + employee.dept);
console.log("Employee SSN is " + employee.ssn);
console.log("Employee Drivers License number is " + employee.dln + "\n\n");

// Alternative way to iterate over all object properties
showAllProperties(employee, "employee");

function showAllProperties(object, objectName){
	for(var i in object){
		if(object.hasOwnProperty(i)){
			console.log(objectName + "." + i + " = " + object[i]); 
			// Object is considered as an array
		}
	}
}
