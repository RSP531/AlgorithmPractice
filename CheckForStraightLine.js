// y = mx+b
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

//Solved Straight Line 52 ms!
var checkStraightLine = function(c) {
  if (c.length === 2) {
    return true;
  }
  let bool = true;

  let m = (c[1][1] - c[0][1]) / (c[1][0] - c[0][0]); // 1
  let b = c[0][1] - m * c[0][0]; // 1

  //check if points lie on the line.
  for (let i = 2; i < c.length; i++) {
    if (!(c[i][1] === m * c[i][0] + b)) {
      bool = false;
    }
  }
  return bool;
};

//Solved, but 120ms (slow!)
var checkStraightLine = function(c) {
  if (c.length === 2) {
    return true;
  }
  let bool = true;
  let xDelta = c[1][0] - c[0][0]; // 1
  let yDelta = c[1][1] - c[0][1]; // 1

  let m = yDelta / xDelta; // 1
  let b = c[0][1] - m * c[0][0]; // 1

  //check if points lie on the line.
  for (let i = 2; i < c.length; i++) {
    if (c[i][1] === m * c[i][0] + b) {
      //bool = true;
    } else {
      bool = false;
    }
  }
  return bool;
};
