/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  /* 
  flower ===> f l o
  flow ===> f l o
  flight ===> f l i 
  */
  // 建立两个指针  一个指针扫描 strs  一个指针扫描str
  // if(strs.length == 0) 
  // return ""
  // else if (strs.length === 1)
  // return strs[0]

  // const str = strs[0]
  // if (!str.length) return str

  // for (let j = 0; j < str.length; j++) {

  //   for (let i = 1; i < strs.length; i++) {
  //     if (str[j] !== strs[i][j]) {
  //       return str.slice(0, j)
  //     }
  //   }
  // }
  var re = '';
    if (!strs.length) return re;
    for (var j=0;j<strs[0].length;j++){//第j位
        for (var i=1;i<strs.length;i++){//第i个
            if (strs[i][j]!=strs[0][j]) return re
        }
        re += strs[0][j];
    }
    return re
};
// @lc code=end

