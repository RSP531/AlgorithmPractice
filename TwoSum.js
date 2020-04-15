var twoSum = function(nums, target) {
  let targetValues = {};
  for(let i=0;i<nums.length;i++){
    if(targetValues[nums[i]] || targetValues[nums[i]] === 0){
      return [targetValues[nums[i]],i]
    }
    targetValues[target-nums[i]] = i
  }
};

console.log(twoSum([2,7,11,15],9))