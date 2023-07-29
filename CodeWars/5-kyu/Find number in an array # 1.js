// Find the dublicate value, or unique value in array 

// This is from Internet

const duplicateOrUnique = arr => {
    let i = arr.length - 1, sum = 0;
    for (; i >= 0; i--) sum += arr[i];
    const lSum = ((arr.length - 1) * arr.length) / 2;

    if (sum > lSum) {
        return sum - lSum;
    } else {
        const n = (arr.length + 1) / 2;
        return (n * (n + 1)) - sum;
    }
}

// This is my solution but it's not fast enough

// function duplicateOrUnique(nums, l = nums.length, memo = {}) {
//     let uniques = new Set(nums);
//     let setSum = 0;
//     for (const n of uniques) {
//         setSum += n;
//     }
//     let n1 = n2 = n3 = n4 = n5 = 0;
//     let sum = 0;
//     for (let i = 0; i < l; i += 5) {
//         n1 = nums[i], n2 = nums[i + 1], n3 = nums[i + 2], n4 = nums[i + 3], n5 = nums[i + 4];
//         sum += n1 || 0;
//         sum += n2 || 0;
//         sum += n3 || 0;
//         sum += n4 || 0;
//         sum += n5 || 0;
//     }
//     let isUnique = uniques.size + 1 === nums.length ? false : true;
//     if (isUnique) return (setSum * 2) - sum;

//     return sum - setSum;
// }

console.log(duplicateOrUnique([1, 2, 3, 6, 5, 4, 1])); // === 1
console.log(duplicateOrUnique([1, 2, 3, 1, 2, 3, 4])); // === 4
console.log(duplicateOrUnique([3, 6, 9, 2, 5, 8, 1, 4, 8, 7])); // === 8
console.log(duplicateOrUnique([9, 8, 7, 1, 2, 3, 9, 7, 1, 2, 3, 4, 4, 5, 5, 6, 6])); // === 8
