// P(0) = P(1) = P(2) = 1
// P(n) = P(n-2) + P(n-3)
// The first few values of P(n) are
// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, ...

function padovan(n) {
    let nums = Array.from(Array(4), (x) => BigInt(1));
 
    for (let i = 3; i <= n; i++) {
        nums[3] = nums[0] + nums[1];
        nums[0] = nums[1];
        nums[1] = nums[2];
        nums[2] = nums[3];
    }
 
    return nums[3];
}

console.log(padovan(1n)) // 1n );
console.log(padovan(2n)) // 1n );
console.log(padovan(3n)) // 2n );
console.log(padovan(4n)) // 2n );
console.log(padovan(100n)) // 1177482265857n );
console.log(padovan(1000000n).toString().length) // 122124 );