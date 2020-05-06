// Given an array of size n, find the majority element.
//The majority element is the element that appears more
//than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the
//majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

//SOLVED!
var majorityElement = function(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  //     console.log(obj)
  let highest = Math.max(...Object.values(obj));

  return Object.keys(obj).find(key => obj[key] === highest);
};

// Input: [2,2,1,1,1,2,2]
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 2, 3])); // 3
