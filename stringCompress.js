//completed and working solution

// solution("ABBBCCDDCCC", 3); //returns 5 ->A3B4C
// solution("AAAAAAAAAAABXXAAAAAAAAAA", 3); //returns 10 ->21A
// solution("AAAAAAAAAAABXXAAAAAAAAAA", 3); //returns 10 ->21A
// console.log(solution("ABBBCCDDCCC", 3));
// returns 5
// removes DDC
// left with ABBBCCCC
// A3B4C = length of 5

function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let lowestCount = S.length;
  let arr = S.split("");
  let temp = S.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && i + 1 < arr.length) {
      arr.splice(i, K);
      if (compress(arr) < lowestCount) {
        lowestCount = compress(arr);
      }
    }
    arr = temp;
  }

  return lowestCount;
}

function compress(S) {
  // first solve how to compress the string
  let pointer = 0;
  let comp = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== S[i + 1]) {
      let count = i + 1 - pointer;
      if (count === 1) {
        comp.push(S[i]);
      } else {
        comp.push(count, S[i]);
      }
      pointer = i + 1;
    }
  }
  return comp.join("").length;
}
