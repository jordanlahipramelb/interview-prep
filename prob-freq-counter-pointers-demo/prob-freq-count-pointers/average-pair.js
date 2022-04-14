/**
 * Write a function called averagePair. Given a SORTED array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)
 */

// add whatever parameters you deem necessary
function averagePair(arr, num) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const avg = (arr[leftPointer] + arr[rightPointer]) / 2;

    if (avg === num) return true;

    if (avg < num) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return false;
}
