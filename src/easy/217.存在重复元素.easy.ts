/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  // 使用 set set中的数据只能出现一次  如果已经出现 就返回true
  // const set: Set<number> = new Set();

  // for (const i of nums) {
  //   if (set.has(i)) {
  //     return true;
  //   } else {
  //     set.add(i);
  //   }
  // }
  // return false;

  // 快慢指针
  let i = 0 // 慢
  let j = 1 // 快
  while (i <= nums.length - 1) {
    ++j
    if (nums[i] === nums[j]) {
      // 相等
      return true
    } else if (j >= nums.length - 1) {
      // 快指针已经走完一遍
      i++
      j = i + 1
    }
  }
  return false
}

console.log(containsDuplicate([2, 14, 18, 22, 22]))
// @lc code=end
