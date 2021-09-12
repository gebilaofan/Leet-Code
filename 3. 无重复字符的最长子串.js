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
/* 滑动窗口
  1、维护一个数组 遍历字符串  将字符串放入数组中
  2、如果字符串在数组中存在  则删除数组中该字符串出现以前的字符串
  3、将当前字符串push进去
  4、取max的最大值

*/
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (!s || s.length < 0) return 0;

//   let arr = [];
//   let max = 0;

//   for(let i = 0; i < s.length; i++) {
//     let index = arr.indexOf(s[i]);
//     if (index !== - 1) {
//       //  存在  删除该字符串在arr中以前的字段
//       // index + 1 是因为 indexOf获取到的是下标  而删除的是从1开始
//       arr.splice(0, index + 1 )
//     }
//       arr.push(s.charAt(i));
//       // max 取最大值
//       max = Math.max(arr.length, max);
//   };
//   return max;
// };

/* 
  利用map  在第一种方式的基础上   维护的数据通过map来存储
  将字符串下标 i 存进map中
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || s.length < 0) return 0;

  let map = new Map();
  let max = 0;
  let j = 0;

  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      j = Math.max(map.get(s[i]) + 1, j);
    }
    // 将当前字符串下标存入
    max = Math.max(max, i - j + 1)
    map.set(s[i], i);
  };
  return max;
};

console.log(lengthOfLongestSubstring(s));