// Write a function sumPossible that takes in an amount and an array of positive numbers.
//  The function should return a boolean indicating whether or not it is possible to create 
//  the amount by summing numbers of the array. You may reuse numbers of the array
//   as many times as necessary.

// You may assume that the target amount is non-negative.

const sumPossible = (amount, numbers, memo = { isPosible: false }) => {

    if (memo.isPosible) return true;
    if (amount === 0) {
        memo.isPosible = true;
        return true;
    }


    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let strToMemoize = `${amount}-${num}`;
        if (strToMemoize in memo) return memo[strToMemoize];
        if (amount < 0) return false;

        memo[`${amount}-${num}`] = sumPossible(amount - num, numbers, memo);
    }

    // console.log(memo);
    return memo.isPosible;
};

console.log(sumPossible(8, [5, 12, 4])) // -> true, 4 + 4);
console.log(sumPossible(15, [6, 2, 10, 19])) // -> false);
console.log(sumPossible(271, [10, 8, 265, 24])); // -> false