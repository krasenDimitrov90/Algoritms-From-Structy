const maxValue = (nums) => {
    // todo

    let max = -Infinity

    for (let n of nums) {
        max = Math.max(max, n);
    }
    return max;
};

console.log(maxValue([4, 7, 2, 8, 10, 9]));
console.log(maxValue([-5, -2, -1, -11]));
console.log(maxValue([42]));
