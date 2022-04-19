/** Closures
- The ability for inner functions to remember variables defined in outer functions, long after the outer function has returned
- Useful for encapsulating logic and creating private variables
 */

function idGenerator() {
	let start = 0;
	return function generate() {
		start++;
		return start;
	};
}

/** IIFE
 * Immediately Invoked Function Expression
 *
 * Useful for scoping something right away and protecting the global namespace
 */

(function () {
	console.log("just ran!");
})();

/** IIFE + Closure */

const $ = (function () {
	const version = "3.1.4";
	return {
		displayVersion() {
			return version;
		},
		html(elem) {
			return document.querySelector(elem).innerHTML;
		},
	};
})();

// JS OO Under the Hood

/** new
 * 
The new keyword does four things:
- Creates an empty object
- Sets the keyword this to be that object
- Returns the object - return this
- Creates a link to the object’s prototype

Creates a Link?
Before we get there - let’s review objects/functions in JS
- Every function has a property on it called prototype
- The prototype object has a property called constructor which points back to the function
- When the new keyword is used to invoke a function, a link between the object created from new and the prototype object is established
- This link is called the internal prototype and can be accessed using Object.getPrototypeOf()*/

// Constructor function that creates a class object
function Dog(name, breed, age) {
	this.name = name;
	this.breed = breed;
	this.age = age;
	// Functions on the prototype. The problem with this is that every object will have this
	this.bark = function () {
		return `${this.name} says woof woof`;
		//   };
	};
}
Dog("coco", "beagle", 9);
window.age; // 9
window.name; //'coco'
window.breed; // 'beagle

Dog.prototype; // constructor object

// new keyword creates an emoty plain JS object that links to the dog function prototype object
const ringo = new Dog("ringo", "corgi", 7);

Object.getPrototypeOf(ringo); // constructor object

// new keyword makes a new empty object at the beginning,
//      then connects the Dog prototype function
Dog.prototype === Object.getPrototypeOf(ringo); //true

ringo; // {name: 'ringo', breed: 'corgi', age: 7, bark: f}
ringo.bark(); // 'ringo days woof woof'

const harry = new Dog("harry", "sheepdog", 4);
harry.bark(); // 'harry says woof woof'

/** Functions on the prototype (Proto function)
 * It’s better to create instance methods on the prototype instead of defining them in the constructor.
 */
Dog.prototype.howl = function () {
	return `${this.name} says AWOOOOOOOO`;
};
Dog.prototype; // reveals new function/method
// this is not contained in the harry object itself!
harry.howl(); // 'harry says AWOOOOOOOO'

ringo.bark === harry.bark; // false
ringo.howl === harry.howl; // true. functions are the same, but exist outside of their objects

// Class syntax
class Dog {
	constructor() {
		this.name;
		this.age;
		this.breed;
	}

	// this is the same as Dog.prototype.howl
	bark() {
		return `${this.name} says bark bark`;
	}
}

/** Another Example **********************/
// ES5
function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.start = function () {
		return "Starting!";
	};
}

Vehicle.prototype.honk = function () {
	return "Beep!";
};

Vehicle.prototype; // an object
Vehicle.prototype.constructor === Vehicle; // true

let myFirstCar = new Vehicle("Toyota", "Corolla", 2005);

Object.getPrototypeOf(myFirstCar) === Vehicle.prototype; // true

// ES2015
class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.start = function () {
			return "Starting!";
		};
	}
	honk() {
		return "Beep!";
	}
}
/************************************* */

/** The Purpose of the Prototype
- JavaScript uses this object to find methods and properties on everything in JS!
- If a property can not be found, JS works it’s way up the “prototype chain”, finding the prototype of every object
- If the property can not be found, undefined is returned
 */

const arr = [];
arr.lollipop; // undefined

function Animal(species) {
	this.species = species;
	this.isAlive = true;
}

Animal.prototype.die = function () {
	if (this.isAlive) {
		this.isAlive = false;
		return `The ${this.species} has died.`;
	}

	return `CAN'T DIE TWICE DUMMY`;
};

const a = new Animal("penguin");
a.die(); // 'The penguin has died.'
a.die(); // 'CAN'T DIE TWICE DUMMY`'

// Prototypal Inheritance
const person = {
	name: "Thomas",
	age: 55,
};
const x = Object.create(person);
x.age; // 55

// ! Make the Dog prototype a new object where its prototype is set to Animal prototype
// Allows us to share instance methods with one another
Dog.prototype = Object.create(Animal.prototype);

function Dog2(name, breed, age) {
	// Combine 'this' object, along with an argument from the Animal object
	Animal.call(this, "dog");
	this.name = name;
	this.breed = breed;
	this.age = age;
}

const star = new Dog2("star", "corgi", 9);
star; // {name: 'star', breed: 'corgi', age: 9, species: 'dog'}
// Now you can call die() on it from Animal object
star.die(); // 'star has died.'

/** Another Example ****************** */
function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

Vehicle.prototype.honk = function () {
	return "Beep!";
};

function Car(make, model, year) {
	Vehicle.call(this, make, model, year); // similar to "super(make, model, year)"
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

/************** */

// Loops with closure

for (var i = 0; i < 5; i++) {
	console.log("i is:", i);
	setTimeout(function () {
		console.log(i);
	}, 1000);
}
// console.logs 5, 5 times
// but loop should go from 0-4?

console.log("AFTER LOOP i is:", i);

/** 
Issues here
- i is scoped globally
    var creates a globally scoped variable. used EVERYWHERE
- by the time the setTimeout runs, the value is 5
    loop is ran, increments, tan, increments.. but once it reaches 4, i is still hanging around. Thus, i++ is ran which runs to 5
- We can fix this using the let keyword or writing an IIFE
 */

for (let i = 0; i < 5; i++) {
	console.log("i is:", i);
	setTimeout(function () {
		console.log(i);
	}, 1000);
}

// now this is block-scoped. So each time the loop is ran, it sticks with this i and nothing outside of it can access it unlike var
