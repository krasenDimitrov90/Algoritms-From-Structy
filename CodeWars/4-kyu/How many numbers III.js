// For example, generate all the numbers of three digits where:
// the sum of their digits is equal to 10
// their digits are in increasing order (the numbers may have two or more equal contiguous digits)
// The numbers that fulfill these constraints 
// are: [118, 127, 136, 145, 226, 235, 244, 334]. 
// There're 8 numbers in total with 118 being the lowest and 334 being the greatest.

function findAll(num, length) {
    let combinations = [];

    (function helper(n, l, i = 1, arr = []) {
        if (l === 0 && n === 0 && arr.length === length) {
            combinations.push(arr.join(''));
            return;
        }
        if (l === 0) return;

        for (; i <= 9; i++) {
            if (n - i >= 0) arr.push(i);
            if (n - i < 0) break;
            helper(n - i, l - 1, i, arr);
            arr.pop();
        }
    })(num, length);


    return !!combinations.length
        ? [combinations.length, combinations[0], combinations[combinations.length - 1]]
        : [];
}

console.log(findAll(10, 3)); // [8, '118', '334']);
console.log(findAll(27, 3)); // [1, '999', '999']);
console.log(findAll(84, 4)); // []);
console.log(findAll(35, 6)); // [123, '116999', '566666']) 