/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0

  // 直接使用indexOf
  // return haystack.indexOf(needle)

  // 可以吧这题看作是用js  实现一个indexOf
  // 直接遍历 haystack  通过substr方法获取i到needle长度到字符串  判断两个字符串是否相等

  for(let i = 0; i<haystack.length; i++ ) {

    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needle.length) === needle) {
        return i
      }
    }
  }
  return -1
};
// @lc code=end

