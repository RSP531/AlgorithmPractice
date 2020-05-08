/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let modes3 = {};
  // modes3 key=value, value=[parent,depth]

  // search BST recursively
  //store parent and depth for each node
  function makeobj(node, count) {
    if (!node) {
      return null;
    }
    count++;
    if (!modes3[count]) {
      modes3[count] = [0, 0];
    }
    if (node.left !== null) {
      modes3[node.left.val] = [node.val, count + 1];
    }
    if (node.right !== null) {
      modes3[node.right.val] = [node.val, count + 1];
    }

    makeobj(node.left, count);
    makeobj(node.right, count);
  }

  // start search
  makeobj(root, 0);

  //check if x and y do not have same parent and are at same depth
  if (modes3[x][0] !== modes3[y][0] && modes3[x][1] === modes3[y][1]) {
    return true;
  } else {
    return false;
  }
};
