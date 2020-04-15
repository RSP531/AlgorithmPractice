var removeDuplicates = function(nums) {
  let length = nums.length;
  for(let i = 0; i<nums.length; i++){
      if(nums[i] === nums[i-1]){
          nums.splice(i,1)
          i--;
      }
  }
  return nums.length;
};

console.log(removeDuplicates([0,0,1,1,2,3,4,4,4,5]))
//working and solved