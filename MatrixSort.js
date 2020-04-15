var diagonalSort = function(mat) {
  let obj = {}
  for(var i = 0; i<mat.length; i++){
    for(let j = 0; j<mat[i].length;j++){
      console.log(mat[i][j])
    }
  }
  
};

console.log('sorted', diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]))
// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]


//Input: [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
//Output: [[5,17,4,1,52,7],
//         [11,11,25,45,8,69],
//         [14,23,25,44,58,15],
//         [22,27,31,36,50,66],
//         [84,28,75,33,55,68]]


// for(var i = 0; i<mat.length; i++){
//   for(let j = 0; j<mat[i].length;j++){
//     let temp = i+1;
//     if(j <= i){
//       temp = j+1;
//     }
//     //console.log(j)
//     arr[i][j] = temp;
//   }
// }

//This works!!
var diagonalSort = function(mat) {
  let obj = {};
  let arr = mat;
  let returnArr = mat

  //sorting function
  function sort(myArr, number){
    for(let i = 0; i<myArr.length;i++){
      if(number < myArr[i]){
        myArr.splice(i,0,number)
        return myArr;
      } 
    }
    if(number >= myArr[myArr.length -1]){
      myArr.push(number)
    }
    return myArr;
  }
  
  
  for(var i = 0; i<mat.length; i++){
    for(let j = 0; j<mat[i].length;j++){
      let index = i-j;
      console.log(i + ' ' + j + ' ' + index)
      if (obj[index]){
        obj[index] = sort(obj[index], mat[i][j])
      } else {
        obj[index] = [mat[i][j]]
      }
    }
  }

  for(var i = 0; i<mat.length; i++){
    for(let j = 0; j<mat[i].length;j++){
      let index = i-j;
      //console.log(i + ' ' + j + ' ' + index)
      returnArr[i][j] = obj[index].shift() 
    }
  }


  //console.log('hi')
  //console.log(returnArr)
  return returnArr;
};

console.log('sorted: ', diagonalSort([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]))
// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]