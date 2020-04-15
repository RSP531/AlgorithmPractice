var findNumbers = function(nums) {
  let count = 0;
  for(let i=0; i<nums.length; i++){
      //console.log(nums[i].toString().length%2)
      if(nums[i].toString().length%2 === 0){
        count++;
      }
  }
  return count;
};

console.log(findNumbers([1,23,432,245,2343]))