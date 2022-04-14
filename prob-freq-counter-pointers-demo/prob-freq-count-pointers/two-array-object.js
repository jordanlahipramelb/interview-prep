/**
 * Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.
 */

// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  return keys.reduce((obj, currVal, currIdx) => {
    // for each idx of the obj accumulated,
    //    if the currentIdx is less than the length of value, set it to that value. if there's not enough keys, return null
    obj[currVal] = currIdx < values.length ? values[currIdx] : null;
    return obj;
  }, {});
}
