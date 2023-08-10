function perimeter(n) {
    const fib = (n, start = true, memo = { sum: 1 }) => {
        if (n === 0) return 1;
        if (n < 0) return 0;
        if (n in memo) return memo[n];

        memo[n] = fib(n - 1, false, memo) + fib(n - 2, false, memo);
        memo.sum += memo[n];
        return start ? memo.sum : memo[n];
    };
    return 4 * fib(n);
}


console.log(perimeter(0)); // 4)
console.log(perimeter(5)); // 80)
console.log(perimeter(7)); // 216)
console.log(perimeter(20)); // 114624)
console.log(perimeter(30)); // 14098308)