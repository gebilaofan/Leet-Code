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
  // let index = nums.indexOf(target)
  // console.log(index)
  // if (index) {
  //   return index
  // }
  // 吧target插入

  // nums.push(target)
  // // 从小到大排序  // 返回target在新数组中的位置
  // return nums.sort((a, b) => {return a - b }).indexOf(target)

  // 暴力循环  直接遍历nums  看每一项是否小于等于 targt 返回下标  如果都比targe大 返回整个数组的长度
  // for(let i = 0; i < nums.length; i++) {
  //   if (nums[i] >= target) {
  //     return i
  //   }
  // }

  // return nums.length



  // 二分法   在排序数组中寻找是否存在一个目标值
  let left = 0
  let right = nums.length

};
// @lc code=end