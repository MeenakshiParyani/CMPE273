/**
 *  Prototypical Inheritance
 */
// Parent Class
function Parent(){
	this.parent_property1 = "Hello";
	this.parentMethod1 = function parentMethod1(arg){
		return arg + "Parent Method 1 returning data";
	}
}
// Child Class
function Child(){
	this.child_property1 = "Adios";
	this.childMethod1 = function childMethod1(arg){
		return arg + "Child Method 1 returning data";
	}
}
Child.prototype = new Parent();
var instance1 = new Child();
console.log(instance1 instanceof Parent);
console.log(instance1 instanceof Child);
console.log(instance1.parentMethod1("Result:"));
// Ovveriding parent method in child
Child.prototype.parentMethod1 = function parentMethod1(arg){
	return arg + "I have overridden Parent Method 1";
}
console.log(instance1.parentMethod1("Result:"));
