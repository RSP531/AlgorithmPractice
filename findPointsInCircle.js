function solution(S, X, Y) {
  let obj = {};
  S = S.split("");
  let bad = [];
  let badDist;

  for (let i = 0; i < S.length; i++) {
    let radius = Math.sqrt(Y[i] * Y[i] + X[i] * X[i]);

    if (!obj[S[i]]) {
      debugger;
      obj[S[i]] = radius;
    } else {
      if (radius < obj[S[i]]) {
        obj[S[i]] = radius;
      } else {
        bad.push([i, radius]);
        badDist = radius;
      }
    }
  }

  let arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= badDist) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.length;
}

console.log(solution("ABDCA", [2, -1, -4, -3, 3], [2, -2, 4, 1, -3])); // returns 3

console.log(solution("ABB", [1, -2, -2], [1, -2, 2])); // returns 1

console.log(solution("CCD", [1, -1, 2], [1, -1, -2])); // returns 0
