/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // 判断 i 是否在map中存在   9 - 2 = 7
    if (map.has(target - element)) {
      return [map.get(target - element), i];
    } else {
      // 不存在  存入 map
      map.set(element, i);
    }
  }

  return [];
}
twoSum([1, 2, 4, 5, 3], 5);
// @lc code=end
