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