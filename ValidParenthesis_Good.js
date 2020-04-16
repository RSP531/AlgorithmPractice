/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let bool = false;
  s = s.split("");

  // first filter to remove "()"
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" && s[i + 1] === ")") {
      s.splice(i, 1);
      s.splice(i, 1);
      i--;
      i--;
    }
  }

  // clean from the back
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      for (let m = i; m >= 0; m--) {
        if (s[m] === "(") {
          s.splice(i, 1);
          s.splice(m, 1);
          break;
        }
      }
    }
  }
  //clean some stars backwards
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      for (let m = i; m >= 0; m--) {
        if (s[m] === "*") {
          s.splice(i, 1);
          s.splice(m, 1);
          break;
        }
      }
    }
  }

  //clean some stars forwards
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" && s[i + 1] === "*") {
      s.splice(i, 1);
      s.splice(i, 1);
      i--;
      i--;
    }
  }

  let countObj2 = {
    "(": 0,
    ")": 0,
    "*": 0
  };
  for (let i = 0; i < s.length; i++) {
    countObj2[s[i]]++;
  }

  if (countObj2["("] === 0 && countObj2[")"] === 0) {
    bool = true;
  }

  return bool;
};

//simple solution from leetcode with o(n) time, o(1) space
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function(s) {
//   const len = s.length;
//   let leftBalance = 0, rightBalance = 0;

//   for (let i = 0; i < len; i++) {
//       leftBalance += s[i] === '(' || s[i] === '*' ? 1 : -1;
//       rightBalance += s[len - i - 1] === ')' || s[len - i - 1] === '*' ? 1 : -1;

//       if (leftBalance < 0 || rightBalance < 0) {
//           return false;
//       }
//   }

//   return true;
// };
