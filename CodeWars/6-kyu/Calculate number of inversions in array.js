function countInversions(nums) {
    let count = 0;
    let isSwap = true;
    while (isSwap) {
        isSwap = false;
        for (let i = 0, l = nums.length; i < l; i++) {
            if (nums[i + 1] < nums[i]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                isSwap = true;
                count++;
            }
        }
    }

    return count;
}

console.log(countInversions([6, 5, 4, 3, 2, 1]));