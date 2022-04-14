/** Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. */

// add whatever parameters you deem necessary
function sameFrequency(nums1, nums2) {
  let str1 = nums1.toString();
  let str2 = nums2.toString();

  let str1Freq = {};
  let str2Freq = {};

  //   return false if they're not the sme length
  if (str1.length !== str2.length) return false;

  //   build nums1 frequency
  for (let i = 0; i < str1.length; i++) {
    str1Freq[str1[i]] = (str1Freq[str1[i]] || 0) + 1;
  }

  //   build nums2 frequency
  for (let j = 0; j < str2.length; j++) {
    str2Freq[str2[j]] = (str2Freq[str2[j]] || 0) + 1;
  }

  //   if the frquencies aren't the same
  for (let key in str1Freq) {
    if (str1Freq[key] !== str2Freq[key]) return false;
  }

  return true;
}
