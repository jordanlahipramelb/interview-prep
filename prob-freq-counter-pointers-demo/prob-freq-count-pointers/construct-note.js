/** Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters: */

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  let lettersFreq = {};
  let msgFreq = {};

  //   * build frequency counter for letters
  for (let key of letters) {
    // set the letterFreq counter to be whatever it currently is plus 1, but if it's not in there yet, set to 1
    lettersFreq[key] = lettersFreq[key] + 1 || 1;
  }

  //   * build frequency counter for message
  for (let key of msg) {
    // set the msgFreq counter to be whatever it currently is plus 1, but if it's not in there yet, set to 1
    msgFreq[key] = msgFreq[key] + 1 || 1;
  }

  for (let key in msgFreq) {
    //   if the key/character from msgFreq is not in letterFreq
    if (!lettersFreq[key]) return false;
    if (msgFreq[key] > lettersFreq[key]) return false;
  }

  return true;
}
