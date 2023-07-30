function solution(nums, l = nums.length) {
    let dublicate = null;
    let memo = {};
    let realSum = 0;
    
    let sum = nums.reduce((acc, n, i) => {
        if (n in memo) dublicate = n;
        memo[n] = true;
        realSum += i + 1;
        return acc += n;
    },0);

    let missing = realSum - sum + dublicate;
    return ([missing, dublicate])
}


console.log(solution ([2,4,1,6,3,4])); // [5, 4]
console.log(solution ([2,2])); // [1, 2]
console.log(solution([2, 3, 1, 3, 4, 5])); // [6,3]