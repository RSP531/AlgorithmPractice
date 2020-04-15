var maxIncreaseKeepingSkyline = function(grid) {
  let leftRightMax = [];
  let topBottomMax=[];
  let tempArry = [];
  let count = 0;
  
  for(let i=0;i<grid.length;i++){
      tempArry.push([])
      leftRightMax.push(Math.max(...grid[i]))
      for(let j=0;j<grid.length;j++){
        tempArry[i][j]=grid[j][i]
      }
    }
  for(let i=0;i<tempArry.length;i++){
    topBottomMax.push(Math.max(...tempArry[i]))
  }

  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid.length;j++){
      count += Math.min(leftRightMax[i],topBottomMax[j])-grid[i][j]
    }
  }
  return count;
};

//problem solved

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))

//expected output 35
// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]