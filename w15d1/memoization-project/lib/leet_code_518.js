// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

const change = function (amount, coins, memo={}) {
  let key = amount + '-' + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  
  let currentCoin = coins[coins.length - 1];
  let total = 0;
  for (let quantity = 0; quantity * currentCoin <= amount; quantity++) {
    total += change(amount - (quantity * currentCoin), coins.slice(0, -1), memo)
  }

  memo[key] = total;
  return memo[key];
};