/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 暴力递归
  // if (n <=2) return n

  // return fib(n-1) + fib(n-2)

  // 设一个变量 用变量来做缓存  循环n
  // 递推
  // if (n <=2) return n

  // let arr = [0,1, 2]

  // for(let i = 2; i<=n; i++) {
  //   arr[i] = arr[i-1] + arr[i-2]
  // }

  // return arr[n]

  // 缓存之  交换变量
  // if (n <= 2) return n
  // let current = 0
  // let nex = 1

  // for (let i = 0; i < n; i++) {
  //   [current, nex] = [nex, current + nex]
  // }

  // return current

  // 递归 + map缓存
  const map = new Map();
  if (n < 2) return n;

  if (!map.has(n)) {
    map.set(n, fib(n - 1) + fib(n - 2));
  }

  return map.get(n);
};
// @lc code=end
