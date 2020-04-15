//Given a binary tree, return the sum of values of its deepest leaves.
//Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
//Output: 15

// var deepestLeavesSum = function(root) {
//   //step 1 find the deepest leaves

// };
// var deepestLeavesSum = function(root) {
//     var currLevel = [root]
//     var nextLevel = []
//     var levelSum = 0
//     while (currLevel.length) {
//         currNode = currLevel[0]
//         levelSum += currNode.val
//         currLevel = currLevel.slice(1)
//         if (currNode.left) nextLevel.push(currNode.left)
//         if (currNode.right) nextLevel.push(currNode.right)
//         if (!currLevel.length && !nextLevel.length) {
//             return levelSum
//         }
//         if (!currLevel.length) {
//             currLevel = nextLevel
//             nextLevel = []
//             levelSum = 0
//         }
//     }
//     return 0;
// };

//this solution works, but leet code does not like splice
let deepestLeavesSum = function (root1){
    if(root1.length === 0){
        return 0;
    }
    let counter = 0;
    let bottomArrayFinder = (passedArr, arrLength, sum1) => {
        let negCount = 0;
        for(let i = 0; i < arrLength; i++){
            if(passedArr[i] === null){
                negCount++;
            }
            sum1 += passedArr[i];
        }
        passedArr.splice(0, arrLength)
        if(passedArr.length === 0){
            return counter += sum1;
        } 
        let newLength = 2 * (arrLength-negCount);
        bottomArrayFinder(passedArr, newLength, 0);
    }
    bottomArrayFinder(root1,1,0);
    return counter;
}

console.log(deepestLeavesSum([1,2,3,4,5,null,6,7,null,null,null,null,8]))
