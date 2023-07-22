const nonAdjacentSum = (nums, memo = {}) => {
    if (nums.length <= 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(...nums);

    let positions = [nums[0], nums.slice(2)].toString();
    if (positions in memo) return memo[positions];

    memo[positions] = Math.max(nums[0] + nonAdjacentSum(nums.slice(2), memo), nonAdjacentSum(nums.slice(1), memo));

    return  memo[positions];
};

// Teachers solution
// const nonAdjacentSum = (nums, memo = {}) => {
//     // todo
//     let numbers = nums[0] + ',' + nums[2];
//     if (numbers in memo) return memo[numbers];

//     if (nums.length === 0) return 0;

//     const num1 = nums[0] + nonAdjacentSum(nums.slice(2));
//     const num2 = nonAdjacentSum(nums.slice(1));

//     memo[numbers] = Math.max(num1, num2)

//     return memo[numbers];
// };

console.log(nonAdjacentSum([2, 4, 5, 12, 7]));
console.log(nonAdjacentSum([7, 5, 5, 12, 17, 29]));
console.log(nonAdjacentSum([
    72, 62, 10, 6, 20, 19, 42,
    46, 24, 78, 30, 41, 75, 38,
    23, 28, 66, 55, 12, 17, 9,
    12, 3, 1, 19, 30, 50, 20
]));