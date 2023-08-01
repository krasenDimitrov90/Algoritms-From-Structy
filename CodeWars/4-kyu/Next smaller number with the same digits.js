function nextSmaller(n) {
    let nums = n.toString().split('');
    let len = nums.length;
    if (n == 1) return -1;

    let i = 0;
    for (i = len - 1; i > 0; i--) {
        if (nums[i] < nums[i - 1]) break;
    }

    if (i != 0) {

        for (let j = len - 1; j >= i; j--) {
            if (nums[i - 1] > nums[j]) {
                [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
                break;
            }
        }
        nums = nums.slice(0, i).concat(nums.slice(i, nums.length).reverse());
        return nums[0] == '0' ? - 1 : Number(nums.join(''));
    }
    return -1;
}


console.log((nextSmaller(836))); //, 683)
console.log((nextSmaller(21))); //, 12)
console.log((nextSmaller(907))); //, 790)
console.log((nextSmaller(531))); //, 513)
console.log((nextSmaller(135))); //, -1)
console.log((nextSmaller(2071))); //, 2017)
console.log((nextSmaller(1027))); //, -1)
console.log((nextSmaller(414))); //, 144)
console.log((nextSmaller(274622120359))); //, 274622109532)