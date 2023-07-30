// Not fast enough
function findTwoUnique(nums, l = nums.length - 1, memo = {}) {
    let first, second;
    let end = l / 2;
    for (let i = 0; i < end; i++) {
        first = nums[i];
        second = nums[l - i];
        if (first in memo) delete memo[first];
        else memo[first] = true;

        if (second in memo) delete memo[second];
        else memo[second] = true;
    }
    return Object.keys(memo).map(Number)
}


console.log(findTwoUnique([1,2,4,3,5,4,2,1])); // === [3,5]
console.log(findTwoUnique([9,9,8,8,7,6,5,4,3,2,1,2,3,4,5,6])); // === [1,7]