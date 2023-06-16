/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (!s) return false
  const map: any = {
    '{': '}',
    '[': ']',
    '(': ')',
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(map[s[i]])
    } else {
      console.log('stack', stack)
      if (!stack.length || stack.pop() !== s[i]) {
        return false
      }
    }
  }

  return !stack.length
}
isValid('()')
// @lc code=end
