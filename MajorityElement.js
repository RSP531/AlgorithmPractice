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
//Runtime: 64 ms
//Memory Usage: 37.9 MB
var majorityElement = function(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let highest = Math.max(...Object.values(obj));

  return Object.keys(obj).find(key => obj[key] === highest);
};

//FASTEST solution Runtime: 56ms

var majorityElement = function(nums) {
  let sto = {};
  let highCount = 0;
  let valu = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (sto[nums[i]]) {
      sto[nums[i]]++;
      if (sto[nums[i]] > highCount) {
        valu = nums[i];
        highCount = sto[nums[i]];
      }
    } else {
      sto[nums[i]] = 1;
    }
  }
  return valu;
};

var majorityElement = function(nums) {
  let obj = {};
  let largeCount = 0;
  let val;
  if (nums.length == 1) {
    return nums[0];
  }
  for (i = 0; i <= nums.length - 1; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
      if (obj[nums[i]] > largeCount) {
        largeCount = obj[nums[i]];
        val = nums[i];
      }
    } else {
      obj[nums[i]] = 1;
    }
  }
  return val;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 2, 3])); // 3
