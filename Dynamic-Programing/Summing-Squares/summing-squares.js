const summingSquares = (num, memo = {}) => {
    if (num === 0) return 0;
    if (num in memo) return memo[num];

    let min = Infinity;
    for (let i = 1; i <= num; i++) {
        if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
            min = Math.min(min, 1 + summingSquares(num - i, memo));
        }
    }

    memo[num] = min;
    console.log(memo)
    return memo[num];
};


//           Teachers Solution
// const summingSquares = (n, memo = {}) => {
//     // todo
//     if (n in memo) return memo[n];
//     if (n === 1) return 0;

//     let minSquares = Infinity;

//     for (let i = 1; i <= Math.sqrt(n); i++) {
//         let square = i * i;
//         let numSquares = 1 + summingSquares(n - square, memo);
//         minSquares = Math.min(minSquares, numSquares);
//     }

//     memo[n] = minSquares;
//     return minSquares;
// };

console.log(summingSquares(12))