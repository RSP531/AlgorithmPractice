/*Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note
can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/
//SOLVED!

var canConstruct = function(ransomNote, magazine) {
  let storObj = {};
  let boolCheck = true;
  for (let i = 0; i < magazine.length; i++) {
    if (!storObj[magazine[i]]) {
      storObj[magazine[i]] = 1;
    } else {
      storObj[magazine[i]]++;
    }
  }
  console.log(storObj);
  for (let i = 0; i < ransomNote.length; i++) {
    if (storObj[ransomNote[i]] && storObj[ransomNote[i]] > 1) {
      storObj[ransomNote[i]]--;
    } else if (storObj[ransomNote[i]] && storObj[ransomNote[i]] === 1) {
      delete storObj[ransomNote[i]];
    } else if (!storObj[ransomNote[i]]) {
      boolCheck = false;
    }
  }
  return boolCheck;
};

console.log(canConstruct("a", "b")); // -> false
console.log(canConstruct("aa", "ab")); // -> false
console.log(canConstruct("aa", "aab")); // -> true)
