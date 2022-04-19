// What will the code below output to the console and why?

var myObject = {
	foo: "bar",
	func: function () {
		var self = this;
		console.log("outer func:  this.foo = " + this.foo);
		console.log("outer func:  self.foo = " + self.foo);
		(function () {
			console.log("inner func:  this.foo = " + this.foo);
			console.log("inner func:  self.foo = " + self.foo);
		})();
	},
};

myObject.func();

/** In the outer func, both this and self refer to myObject and can access foo */
// outer func: this.foo = bar
// outer func: self.foo = bar

/** In the inner function, this does not refer to myObject, so it's undefined deeper.
 * self is a local variable (part of func property), so it's in scope and accessible
 */
// inner func: this.foo = undefined
// inner func: this.foo = bar

/******************************** */

// What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

// Creates closure
// Private namespace for variables
// Avoids clashing with other JS modules and libraries
