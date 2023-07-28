function findUniq(nums) {
    let num1 = nums[0];
    let num2 = nums[1];
    let num3 = nums[2]
    if (num1 !== num2) return num1 === num3 ? num2 : num1;
    
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== num1) return nums[i];
    }
}



console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) )// === 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]) )// === 0.55