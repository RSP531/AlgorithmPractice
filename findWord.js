function findWord(inputArr) {
  let returnString = [];
  returnString.push(inputArr[0][0]);
  returnString.push(inputArr[0][2]); //[P,E]

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i][0] === returnString[i]) {
      returnString.push(inputArr[i][2]);
    } else if (inputArr[i][2] === returnString[0]) {
      returnString.unshift(inputArr[i][0]);
    } else {
      returnString.push(inputArr[i][0]);
      returnString.push(inputArr[i][2]);
    }
    console.log(returnString);
  }

  return returnString;
}

console.log(findWord(["P>E", "E>R", "R>U"])); // PERU
console.log(findWord(["I>N", "A>I", "P>A", "S>P"])); // SPAIN
console.log(findWord(["A>I", "S>P", "P>A", "I>N"])); //
