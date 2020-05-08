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
  let modes = {};
  let modes2 = {};
  let modes3 = {};
  // node=[key], value = [parent,depth]
  // search BST recursively
  function search(node, count) {
    if (!node) {
      return null;
    }
    let key = node.val;
    count++;
    if (!modes[count]) {
      modes[count] = [];
    }
    modes2[key] = count;
    modes[count].push(node.val);

    if (!modes3[count]) {
      modes3[count] = [0, 0];
    }
    if (node.left !== null) {
      modes3[node.left.val] = [node.val, count + 1];
    }
    if (node.right !== null) {
      modes3[node.right.val] = [node.val, count + 1];
    }
    // modes3[node.left]
    // modes3[key] =[]

    search(node.left, count);
    search(node.right, count);
  }
  // start search
  search(root, 0);

  //     function isSibling(node,a,b){
  //         // console.log('val: ', node.val);
  //         // console.log('left: ',node.left)
  //         // console.log('right: ',node.right)

  //         if(node == null){
  //             return false;
  //         }
  //         return ((node.left === a && node.right === b) || (node.left === b && node.right === a) || isSibling(node.left, a, b) || isSibling(node.right, a, b))
  //     }
  if (modes3[x][0] !== modes3[y][0] && modes3[x][1] === modes3[y][1]) {
    return true;
  } else {
    return false;
  }

  // console.log(modes2[x.toString()])
  // console.log('IS SIBLING',isSibling(root,x,y))
  // if(modes2[x.toString()] === modes2[y.toString()] && !isSibling(root,x,y)){
  //     return true;
  // } else {
  //     return false;
  // }
};
