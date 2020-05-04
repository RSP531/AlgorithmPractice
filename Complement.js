//Given a positive integer, output its complement number.
//The complement strategy is to flip the bits of its binary representation.

var findComplement = function(num) {
  //convert to binary
  let newNum = num.toString(2).split("");
  console.log(newNum);
  //change 0 and 1s
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] === "1") {
      newNum[i] = "0";
    } else {
      newNum[i] = "1";
    }
  }

  return parseInt(newNum.join(""), 2);
  //return
};

console.log(findComplement(5)); //answer is 2
console.log(findComplement(1)); //answer is 0
