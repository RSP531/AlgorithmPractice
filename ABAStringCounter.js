/*
We are given a string S of Length N consisting only of letters 'A' and/ or 'B'. Our goal is to obtain a string in the format "A...AB...B" (all letters 'A' occur before all letters 'B') by deleting some letters from S. In particular, string consisting only of letters 'A' or only of letters 'B' fit this format.

Write a function that given a string S, returns the minimum nbumber of letters that need to be delted from S in order to obtain a string in the above format.

Examples:
1. Given S="BAAABAB" Output: 2
//delete first occurance of B and last occurence of A
2. Given S="BBABAA" Output: 3
//either delete all B's or all A's
3. Given S="AABBBB" Output: 0
//nno letters to delete
N is an integer withini the range [1..100,000]
string S consists only of the characters 'A' and/or 'B'
*/

//working solution

let abCounter = abString => {
  let counter = 0;
  let storObj = {
    A: 0,
    B: 0
  };

  for (let i = 0; i < abString.length; i++) {
    if (abString[i] === "A") {
      storObj["A"]++;
    }
    if (abString[i] === "B") {
      storObj["B"]++;
    }
  }

  let stringArray = abString.split("");

  for (let i = 0; i < storObj["A"]; i++) {
    if (stringArray[i] === "A") {
      //do nothing
    }
    if (stringArray[i] === "B") {
      stringArray.splice(i, 1);
      i--;
      storObj["B"]--;
      counter++;
    }
  }

  for (let i = storObj["A"]; i < stringArray.length; i++) {
    if (stringArray[i] === "A") {
      stringArray.splice(i, 1);
      i--;
      storObj["A"]--;
      counter++;
    }
    if (stringArray[i] === "B") {
      //do nothing
    }
  }

  console.log(storObj);
  console.log(stringArray);

  return counter;
};
// console.log(abCounter('BAAABAB')) // return 2
// console.log(abCounter('BBABAA')) // return 3
console.log(abCounter("AABBB")); //return 0
