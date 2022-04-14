/** Developing a problem solving process
The process
1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve a Simpler Problem
5. Use Tools Strategically
6. Look Back and Refactor


//! 1. Understand the Problem

// write a function which takes 2 numbers and returns their sum

- Can I restate the problem in my own words?
    write a function which adds 2 numbers together

- What are the inputs that go into the problem?
    2 numbers, integers or floats?

- What are the outputs that should come from the solution to the problem?
    output is sum

- Can the outputs be determined from the inputs?
    yes, if we have the 2 numbers we could determine the sum.
    but what if only 1 number is passed in? or a string? think of EDGE CASES

- How should I label the important pieces of data that are a part of the problem? 
    write the function as 'add' or 'sum', 2 parameters; 'num1' and 'num2'

//! 2. Explore Concrete Examples

// write a function that takes in a string and returns counts of each character in the string

1. Start with Simple Examples
    - write how it should work. should you include every letter of the alphabet? 'a': 0
charCount('hello') => {'h': 1, 'e': 1, 'l': 2, 'o': 1}

2. Progress to More Complex Examples
    = should we include numbers and special characters? is it case insensitive?
charCount('My phone number is (345)-222-3333')

3. Explore Examples with Empty Inputs
    - what do we return when it's empty? undefined, false, null, 'empty input'..

4. Explore Examples with Invalid Inputs
    - what happens when ypu pass in a number, or null? What is invalid?


//! 3. Break It Down

// write a function that takes in a string and returns counts of each character in the string

- Explicitly write out the steps you need to take.
- You can type this as pseudocode or write it on a whiteboard (or desk)
- This forces you to think about the code you’ll write before you write it
- This helps you catch any lingering conceptual issues or misunderstandings
- Don’t write code!

function charCount(str) {
    // create empty object to hold char counts

 // for each character in the string, i want to do something (this usualy means LOOPING)
    // LOOP over each char in the string
        // if char is letter or number - downcase first, we only want 1 entry, not upper/lower
            // if char is in object, add 1 to count
            // otherwise, add to object and set count to 1

    // return object with character count
}

// ! 4. Solve A Simpler Problem

- Find the core difficulty in what you’re trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in
*/

// Simpler implementation process
// although simpler, this is storing spaces and punctuations. but this is closer
function charCount(str) {
  // create empty object to hold char counts
  const obj = {};
  // LOOP over each char in the string
  for (let char of str) {
    // if char is in object, add 1 to count
    if (obj[char]) {
      obj[char] += 1;
    } else {
      // otherwise, add to object and set count to 1
      obj[char] = 1;
    }
  }
  // return object with character count
  return obj;
}

function charCount2(str) {
  // create empty object to hold char counts
  const obj = {};
  // LOOP over each char in the string
  for (let char of str) {
    // if char is letter or number - downcase first, we only want 1 entry, not upper/lower
    if (/[A-Z0-9]/.test(char)) {
      // match anything A to Z, 0 to 9, case insensitive
      char = char.toLowerCase();
      // if char is in object, add 1 to count
      if (obj[char]) {
        obj[char] += 1;
      } else {
        // otherwise, add to object and set count to 1
        obj[char] = 1;
      }
    }
  }
  // return object with character count
  return obj;
}

/**
// ! 5. Use Tools Strategically

- Use your debugging tools.
- Don’t guess and check!
- Scientific approach: formulate hypotheses, test, draw conclusions. Repeat.


//! 6. Look back and refactor
- Does the result match your expected output?
  Edge cases: what if they pass in a number instead of a string?
- Can you improve the performance of your solution?
  Time complexity
- What other ideas could you have pursued?
 */

function charCount2Refactor(str) {
  // create empty object to hold char counts
  const obj = {};
  // LOOP over each char in the string
  for (let char of str) {
    // if char is letter or number - downcase first, we only want 1 entry, not upper/lower
    if (/[A-Z0-9]/.test(char)) {
      // match anything A to Z, 0 to 9, case insensitive
      char = char.toLowerCase();
      obj[char] = obj[char] + 1 || 1;

      // if char is in object, add 1 to count
      // if (obj[char]) {
      //   obj[char] += 1;
      // } else {
      //    otherwise, add to object and set count to 1
      //   obj[char] = 1;
      // }
    }
  }
  // return object with character count
  return obj;
}

// we're loopng through the string and reducing it into
// the object with the charcater frequencies

function charCount2Reduce(str) {
  return str.split("").reduce((obj, char) => {
    if (/[A-Z0-9]/.test(char)) {
      // match anything A to Z, 0 to 9, case insensitive
      char = char.toLowerCase();
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  }, {});
}

/** Write a function called squares, which accepts two arrays. The function should return true if every value in the array has it’s corresponding value squared in the second array. The frequency of values must be the same. */

squares([1, 2, 3], [4, 1, 9]); // true
squares([1, 2, 3], [1, 9]); // false
squares([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

// 0(n^2) slow

function squares(nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    if (nums1.length !== nums2.length) return false;

    const correctIdx = nums2.indexOf(nums1[i] ** 2);
    if (correctIdx === -1) return false;

    nums2.splice(correctIdx, 1);
  }
  return true;
}

/** 
//! Frequency counters
- This pattern uses objects, maps, or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n2) operations with arrays / strings
 */

// a function to create a simple
// frequency counter using a map
function createFrequencyCounter(array) {
  let frequencies = new Map();

  for (let val of array) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}

// a function to create a simple
// frequency counter using an object
// saves a lot of time
function makeFrequencyCounter(array) {
  let freqCounter = {};

  for (let val of array) {
    // set the freq counter to be whatever it currently is plus 1, but if it's not in there yet, set to 1
    freqCounter[val] = freqCounter[val] + 1 || 1;
  }

  return freqCounter;
}

// refactored squares
// O()
function squares(nums1, nums2) {
  if (nums1.length !== nums2.length) return false;

  // create frequencies for each array
  const nums1Freq = makeFrequencyCounter(nums1);
  const nums2Freq = makeFrequencyCounter(nums2);
  console.log(nums1Freq, nums2Freq);

  // loop through each key of object
  for (let key in nums1Freq) {
    // if key^2 of nums2Freq does not exist in nums1Freq
    if (!nums2Freq[key ** 2]) return false;

    // check to see if they have the same number of occurrencies
    if (nums1Freq[key] !== nums2Freq[key ** 2]) return false;
  }

  return true;
}

function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Freq = makeFrequencyCounter(str1);
  const str2Freq = makeFrequencyCounter(str2);
  console.log(str1Freq, str2Freq);

  for (let key in str1Freq) {
    if (str2Freq[key] !== str1Freq[key]) return false;
  }

  return true;
}

// using Map()
function isValidAnagramMap(str1, str2) {
  if (str1.length !== str2.length) return false;

  const strMap1 = createFrequencyCounter(str1);
  const strMap2 = createFrequencyCounter(str2);
  console.log(strMap1, strMap2);

  if (strMap1.size !== strMap2.size) return false;

  for (let letter of strMap1) {
    if (strMap2.get(letter) !== strMap2.get(letter)) return false;
  }

  return true;
}

isValidAnagram("", ""); // true
isValidAnagram("aaz", "zza"); // false
isValidAnagram("anagram", "nagaram"); // true
isValidAnagram("rat", "car"); // false
isValidAnagram("awesome", "awesom"); // false
isValidAnagram("qwerty", "qeywrt"); // true
isValidAnagram("texttwisttime", "timetwisttext"); // true

/** //! Multiple pointers
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
An example
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.

Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

// Naive Approach. Time Complexity - O(n2)
function sumzero(nums) {
  // Loop over nums. Gives us i variable, starts at 0
  for (let i = 0; i < nums.length; i++) {
    // array is sorted. if there is no match past 0, then there will be nothing to match
    if (nums[i] > 0) break;

    //  compare nums[0] to nums[1], nums[0] to nums[2], etc
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      // if the 2 nums equals 0
      if (nums[i] + nums[j] === 0) return [nums[i], nums[j]];
    }
  }
}

// Better Approach Using Multiple Pointers, while loops
// O(n)
function sumZeroMultiplePointers(nums) {
  // set the left and right indices to start at
  let leftPointerIdx = 0;
  let rightPointerIdx = nums.length - 1;

  while (leftPointerIdx < rightPointerIdx) {
    const sum = nums[leftPointerIdx] + nums[rightPointerIdx];
    if (sum === 0) return [nums[leftPointerIdx], nums[rightPointerIdx]];

    // move pointer left an idx if sum is still greater than 0
    if (sum > 0) {
      rightPointerIdx--;
    }
    // otherwise, if it's less than 0, move left pointer to the right
    else {
      leftPointerIdx++;
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
