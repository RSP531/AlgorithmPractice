
var rotate = function(matrix) {
  var matrix2 = [];

  for (var i = 0; i < matrix.length; i++) {
      matrix2.push([])
  }

  for (var i = 0; i < matrix.length; i++) {
      var second = (matrix.length - 1 - i);

      for (var j = 0; j < matrix.length; j++) {
          matrix2[j][second] = matrix[i][j]
      }
      second--;
  }

  return matrix2
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))