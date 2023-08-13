function solution(nums) {
    let result = [];
    let first = nums[0];
    let second = null;

    for (let i = 1, l = nums.length; i < l; i++) {
        let current = nums[i];
        if (current > nums[i - 1] + 1) {
            second = nums[i - 1];
            if (second === first) result.push(first);
            else if (second - 1 === first) result.push(...[first, second]);
            else result.push(first + '-' + nums[i - 1]);
            first = current;
        }
    }

    if (nums[nums.length - 1] === first) result.push(first);
    else if (nums[nums.length - 1] - 1 === first) result.push(...[first, nums[nums.length - 1]]);
    else result.push(first + '-' + nums[nums.length - 1]);

    return result.join(',');
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))