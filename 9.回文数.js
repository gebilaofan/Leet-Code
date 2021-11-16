/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 反转字符串  判断反转后的和反转前是否相等
  if (x < 0) return false
  // const x2 = parseInt(x.toString().split('').reverse().join(''))

  // return x === x2

  // 通过两个指针  一个指针从左到右  一个指针从右到左  从中间开始扫描 判断扫描的左右数据是否相等
  const str = x.toString()

  for(let i = 0; i < str.length / 2; i++) {
    // str.leng -1 为最后一个 从后往前
    if(str[i] !== str[str.length - 1 -i]) {
      return false
    }
  }
  return true
};
// @lc code=end

