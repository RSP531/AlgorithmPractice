// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Note:

// Your algorithm should run in O(n) time and uses constant extra space.

// Runtime: 60 ms, faster than 60.25% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 34 MB, less than 91.67% of JavaScript online submissions for First Missing Positive.

var firstMissingPositive = function(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = true;
    }
  }

  for (i = 1; i <= nums.length + 1; i++) {
    if (!obj[i]) {
      return i;
    }
  }
};
