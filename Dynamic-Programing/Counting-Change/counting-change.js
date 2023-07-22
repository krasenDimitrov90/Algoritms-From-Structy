const countingChange = (amount, coins, i = 0, memo = {}) => {

    let key = amount + ',' + i;

    if (key in memo) return memo[key];
    if (amount === 0) return 1;
    
    let coin = coins[i];
    let total = 0;

    for (let qty = 0; qty * coin <= amount; qty++) {
        let remainder = amount - (qty * coin);
        total += countingChange(remainder, coins, i + 1, memo);
    }
    
    memo[key] = total;
    return total;
}

console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]));