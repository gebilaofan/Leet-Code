/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 直接切割反转
  let res = parseInt(x.toString().split("").reverse().join(""))

  if (x < 0) {
    res = -res
  }

  // 判断越界
  return res > 2147483647 || res < -2147483648 ? 0 : res;
};
// @lc code=end

