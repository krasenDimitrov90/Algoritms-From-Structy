// An integer partition of n is a weakly decreasing list of positive integers which sum to n.
// For example, there are 7 integer partitions of 5:
// [5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].

function partitions(n, arr = null, idx = 0, memo = {}) {
    if (!arr) {
        arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
    }
    let key = n + ',' + idx;
    if (key in memo) return memo[key]
    if (n === 0) return 1;

    let factor = arr[idx]
    let total = 0;
    for (let i = 0; i * factor <= n; i++) {
        let remainder = n - (i * factor);
        total += partitions(remainder, arr, idx + 1, memo);
    }

    memo[key] = total;
    return total;
}

console.log(partitions(5))