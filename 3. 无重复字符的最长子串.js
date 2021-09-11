/* 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
 */

let s = "abcabcbb"
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let l = 0; // 定义左指针
  let res = 0; // 结果
  let map = new Map(); // 存放字符和对应下标
  for (let r = 0; r < s.length; r++) {
    // 如果出现了重复字符，则把左指针移到重复字符的下一位。注意同时满足重复字符的索引大于左指针。
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1); // 计算结果
    map.set(s[r], r); // 存下每个字符的下标
  }
  return res;

};

console.log(lengthOfLongestSubstring(s));