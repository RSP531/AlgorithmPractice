/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let bool = false;
  s = s.split("");
  ``;
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
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      for (let m = 0; m < s.length; m++) {
        if (s[m] === "*") {
          s.splice(m, 1);
          s.splice(i, 1);
          break;
        }
      }
    }
    if (s[i] === "*") {
      s.splice(i, 1);
      i--;
    }
  }

  if (s.length === 0) {
    bool = true;
  }

  return bool;
};
