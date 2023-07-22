const arrayStepper = (arr) => {

    let num = arr[0];

    if (num >= arr.length - 1) return true;
    if (num === 0) return false;

    let canGetToEnd = false;
    for (let i = 1; i <= num; i++) {
        if (arr[i] + i <= num) continue;
        canGetToEnd = arrayStepper(arr.slice(1));
        if (canGetToEnd) return true;
    }

    return false;
};

//             Teacher Solution
// const arrayStepper = (nums, i = 0, memo = {}) => {
//     if (i in memo) return memo[i];
//     if (i >= nums.length - 1) return true;

//     const maxStep = nums[i];
//     for (let step = 1; step <= maxStep; step++) {
//         if (arrayStepper(nums, i + step, memo === true)) {
//             memo[i] = true;
//             return true;
//         }
//     }

//     memo[i] = false
//     return false;
// };


console.log(arrayStepper([2, 4, 2, 0, 0, 1])); // true
// console.log(arrayStepper([ 
//   31, 30, 29, 28, 27,
//   26, 25, 24, 23, 22,
//   21, 20, 19, 18, 17,
//   16, 15, 14, 13, 12,
//   11, 10, 9, 8, 7, 6,
//   5, 3, 2, 1, 0, 0, 0
// ])); // false