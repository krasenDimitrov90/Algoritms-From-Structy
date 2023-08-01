function nextBigger(n) {
    let nums = n.toString().split('');
    let len = nums.length;
    if (n == 1) return -1;

    let i = 0;
    for (i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) break;
    }

    if (i != 0) {

        for (let j = len - 1; j >= i; j--) {
            if (nums[i - 1] < nums[j]) {
                [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
                break;
            }
        }
        nums = nums.slice(0, i).concat(nums.slice(i, nums.length).reverse());
        return nums[0] == '0' ? - 1 : Number(nums.join(''));
    }
    return -1;
}


console.log(nextBigger(12)) // 21)
console.log(nextBigger(513)) // 531)
console.log(nextBigger(2017)) // 2071)
console.log(nextBigger(414)) // 441)
console.log(nextBigger(144)) // 414)