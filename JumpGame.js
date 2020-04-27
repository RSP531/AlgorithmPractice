//DOES NOT WORK
// var canJump = function(nums) {
//   let ans = false;
//   let target = nums.length;

//   for(let i = 0; i < nums.length; i++){
//       debugger
//       let pointer = i
// //         if(nums[pointer] === 0 && ) {
// //             ans = false;
// //         }
//       while(pointer < target && nums[pointer] !== 0){
//           pointer += nums[pointer]
//           if(pointer === target){
//               return ans = true;
//           }
//       }
//       if(nums[pointer] >= target){
//           return ans = true;
//       }

//   }
//   return ans
// };

// // console.log(canJump([2,3,1,1,4]))
// // console.log(canJump([3,2,1,0,4]))
// // console.log(canJump([3,0,8,2,0,0,1]))
// console.log(canJump([2,0,0]))

var canJump = nums => {
  let last = nums.length - 1;
  for (let i = last - 1; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }
  return last === 0;
};
