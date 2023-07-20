// Write a function minChange that takes in an amount and an array of coins. 
// The function should return the minimum number of coins required to create the amount. 
// You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

function minChange(amount, coins) {

    let answer = _minChage(amount, coins);

    return answer === Infinity ? -1 : answer;
}

function _minChage(amount, coins, memo = {}) {

    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return Infinity;

    let min = Infinity;

    for (let coin of coins) {
        let currentMin = 1 + _minChage(amount - coin, coins, memo);

        min = Math.min(currentMin, min);
    }

    memo[amount] = min;
    console.log(memo);
    return min;
}

console.log(minChange(8, [1, 5, 4, 12]));
// console.log(minChange(271, [10, 8, 265, 24]));