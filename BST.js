//Ben's BST Stuff
let Tree = function(val){
  this.val = val;
  this.left = null;
  this.right = null;
}
​
Tree.prototype.insert = function(val){
  if (val < this.val){
      if (!this.left){
          this.left = new Tree(val);
      } else {
          this.left.insert(val)
      }
  } else {
      if (!this.right){
          this.right = new Tree(val);
      } else {
          this.right.insert(val)
      }
  }
}
​
Tree.prototype.inOrder = function(cb) {
  if (this.left) {
      this.left.inOrder(cb)
  }
  cb(this.val);
  if (this.right){
      this.right.inOrder(cb)
  }
}
​
Tree.prototype.preOrder = function(cb){
  cb(this.val);
  if (this.left) {
      this.left.preOrder(cb)
  }
  if (this.right){
      this.right.preOrder(cb)
  }
}
​
Tree.prototype.postOrder = function(cb){
  if (this.left) {
      this.left.postOrder(cb)
  }
  if (this.right){
      this.right.postOrder(cb)
  }
  cb(this.val);
}
​
Tree.prototype.BFS = function (cb){
  let queue = [this];
  
  let innerFunc = () =>{
      let current = queue.pop()
      cb(current.val)
      if (current.left){
          queue.unshift(current.left)
      }
      if (current.right){
          queue.unshift(current.right)
      }
      if (queue.length){
          innerFunc()
      }
  }
  innerFunc()
}
​
​
let ben = new Tree(4);
ben.insert(2);
ben.insert(1);
ben.insert(3);
ben.insert(5);
ben.insert(6);
​
ben.BFS(function(val) {
  console.log(val)
