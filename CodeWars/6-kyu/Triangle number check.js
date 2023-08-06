// 6 is triangle             8 is NOT a triangle number
//   1                    1
//  2 3                  2 3
// 4 5 6                4 5 6
//                     7 8

function isTriangleNumber(n, i = 0, sum = 0) {
    // i is like [1,2,3,...,n] AND sum is like 1+2+3+...+n
    while (sum < n) {
        sum += ++i;
    }
    return n - sum === 0;
}


console.log(isTriangleNumber(3)) // , true,
console.log(isTriangleNumber(5)) // , false, 
console.log(isTriangleNumber("hello!")) // , false
console.log(isTriangleNumber(6.15)) // , false, 