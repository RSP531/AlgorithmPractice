/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

var addTwoNumbers = function(l1, l2) {
  let tempArray1 =[]
  let tempArray2 =[]
  for(let i=l2.length-1;i>=0;i--) {
    tempArray1.push(l1[i])
    tempArray2.push(l2[i])
  }
  tempArray1=tempArray1.join('')
  tempArray2=tempArray2.join('')

  let temp = Number(tempArray1)+Number(tempArray2)
  let test= temp.toString().split('')
  return test
};
console.log(addTwoNumbers([2,4,3],[5,6,4]))

// let hi= l2.reverse().join('')
// let hi2= l1.reverse().join('')
// let temp = Number(hi)+Number(hi2)
// return temp.toString().split('')