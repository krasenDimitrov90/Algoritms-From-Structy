function validate(n) {
    let nums = n.toString().split('').map(Number);
    let remainder = nums.length % 2;

    for (let i = 0 + remainder; i < nums.length; i += 2) {
        let num = Number(nums[i])
        if (num * 2 > 9) nums[i] = num * 2 - 9;
        else nums[i] = num * 2;
    }

    return nums.reduce((acc, n) => acc += n, 0) % 10 === 0;
}

console.log(validate(1714)); // false
console.log(validate(12345 )); // false
console.log(validate(891)); //  false
console.log(validate(2121));// true
console.log(validate(1230)) // true