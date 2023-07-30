function makeMatrix(nums) {
    function getSubArrCount(n, i = 0, sum = 0) {
        while (sum < n) {
            sum += ++i;
        }
        return n - sum === 0 && i;
    }

    let l = getSubArrCount(nums.length);
    if (!l) return [];

    let matrix = Array.from(Array((nums.length * 2) / l), () => new Array(l).fill('?'));
    let l2 = matrix.length - 1;

    let idx = 0;
    let numsL = nums.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0, end = l - i; j < end; j++ ) {
            matrix[i][j] = nums[idx++];
            matrix[l2-i][l - 1 - j] = nums[numsL - idx] ** 2;
        }
    }

    return matrix;
}

console.log(makeMatrix([1,2,3,4,5,6]));
// console.log(makeMatrix([2,4,6]));
// console.log(makeMatrix([9,8,7,6,5,4]));
// console.log(makeMatrix([9,8,7,6,5,4,3]));

// console.log(getSubArrCount(1), 1)
// console.log(getSubArrCount(2), 'false')
// console.log(getSubArrCount(3), 2)
// console.log(getSubArrCount(4), 'false')
// console.log(getSubArrCount(5), 'false')
// console.log(getSubArrCount(6), 3)
// console.log(getSubArrCount(7), 'false')
// console.log(getSubArrCount(8), 'false')
// console.log(getSubArrCount(9), 'false')
// console.log(getSubArrCount(10), 4)
// console.log(getSubArrCount(15), 5)