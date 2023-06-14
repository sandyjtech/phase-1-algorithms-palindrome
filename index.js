function isPalindrome(word) {
  // Write your algorithm here
  reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}
isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("a");
isPalindrome("robot");
isPalindrome("ab");
/* 
  Add your pseudocode here
*/
console.log("Expecting: true");
/*
  Add written explanation of your solution here
  If our word is same as our reverse word, then it is a palindrome
*/

// // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
