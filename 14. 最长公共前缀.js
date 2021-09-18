/* 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。 */


const strs = 
["flower","flow","flight"]
/**
 * 纵向扫描
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if(strs.length == 0) 
  return ""
  else if (strs.length === 1)
  return strs[0]
  // 定义一个纵向指针和一个横向指针  横向指针对数组进行扫描  纵向指针对扫描对字符串进行匹配

  let rows = strs.length; // 3 用于遍历 flower  flow flight
  let cols = strs[0].length; // 数组第一项的第一个字符串 f l o w e r 用这个去和数组其他项匹配
  if (!cols) return ''

  for(let i = 0; i < cols; i++) {
    // 拿到纵向的字符串
    let first = strs[0][i]
    for(let j = 1; j < rows; j++) {
      // 横向遍历数组  拿每个字符串和纵向的进行匹配   
      // f ---> flow[0] 'f'  f ----> flight[0] 'f'  存放 f
      // l ---> flow[1] 'l'  f ----> flight[1] 'l'  存放 l
      // o ---> flow[2] 'o'  f ----> flight[2] 'i'  不想等  返回 cols i 以前的字符串
      if (first !== strs[j][i]) {
        return strs[0].substr(0, i)
      }
    }
  }
  console.log(strtt)
};


console.log(longestCommonPrefix(strs));