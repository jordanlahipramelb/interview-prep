/**
Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.
 */

function curriedAdd(total) {
	if (total === undefined) return 0;

	return function addNextNum(num) {
		// if no args, returns total
		if (num === undefined) return total;

		// add each num to total
		total += num;

		return addNextNum;
	};
}

// let firstAdder = curriedAdd();
// let secondAdder = curriedAdd();
// let thirdAdder = curriedAdd();

// firstAdder(); // 0
// secondAdder(1)(2)(); // 3
// thirdAdder(2)(8)(5)(1)(); // 16

module.exports = { curriedAdd };
