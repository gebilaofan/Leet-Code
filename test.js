/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let index = nums.indexOf(target)
  console.log()
  if (!index) {
    return index
  }
  // 吧target插入

  // nums.push(target)
  // // 从小到大排序  // 返回target在新数组中的位置
  // return nums.sort((a, b) => {return a - b }).indexOf(target)

  let n = 0
  // 暴力循环
  // nums.push(target) //[1,3,5,6,7]
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      n++
    }
  }
  console.log(n, '---n')
  return nums.length - n
};
// @lc code=end

console.log( searchInsert([1,3,5,6], 0))