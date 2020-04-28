/*Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/*
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  let map = {};

  for (let val of strs) {
    //create a sorted key to check if it already exists
    let keey = [...val].sort();
    map[keey] = map[keey] ? [...map[keey], val] : [val];
  }

  return Object.values(map);
};
