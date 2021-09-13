
/* 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 */

let x = 123;
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  if(x === 0 ) return 0

  let strArr = x.toString().split('').reverse()
  // 移除 -
  if (strArr.indexOf('-') !== -1) {
      strArr.splice(strArr.indexOf('-'), 1) 
      // 在开头插入
      strArr.unshift('-')
  }
  //  最后一项 0 
  if (strArr[strArr.length - 1] == '0') {
      strArr.pop()
  }

  // 数组转numer
  strArr = parseInt(strArr.join(''))
  return  strArr > 2147483647 || strArr < -2147483648 ? 0 : strArr;
};

reverse(x)