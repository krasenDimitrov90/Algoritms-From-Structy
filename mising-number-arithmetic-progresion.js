function findMisingNumber(nums, n) {

    let minDifference = Infinity;
    let minNumber = Infinity;
    let secondMin = Infinity;

    //  2, -2, 8, -8, 4, -4, 6, -6
    for (let i = 0; i < n; i++) {
        if (minNumber > nums[i]) {
            secondMin = minNumber;
            minNumber = nums[i];
        } else {
            secondMin = Math.min(secondMin, nums[i]);
        }
    }

    minDifference = Math.abs(Math.abs(minNumber) - Math.abs(secondMin))

    // The formula for Arithmetic Progresion is 
    // (n / 2) * ((2a) + (n - 1)d) , Here "a" is minNumber and "d" is minDifference
    // but since we have missing number , ergo the length of the array (n) is with
    // 1 less then the actual number so the equation got this look: 
    let arithmeticSum = ((n + 1) / 2) * ((2 * minNumber) + (n) * minDifference);
    
    if (arithmeticSum === 0) return 0;

    for (let i = 0; i < n; i++) {
        arithmeticSum -= (nums[i]);
    }

    return arithmeticSum
}

console.log(findMisingNumber([3, 9, 1, 11, 13, 5], 6));
console.log(findMisingNumber([1, 2, 3, 5], 4));
console.log(findMisingNumber([2, -2, 8, -8, 4, -4, 6, -6], 8));