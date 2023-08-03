function combos(n) {
    let arr = [];
    let nums = Array.from(Array(29), (x, i) => i + 1);

    function helper(n, nums, i = 0, memo = {}, str = '') {
        if (n === 0 && i > nums.length - 1) {
            str = str.slice(0, -1)
            arr.push(str.split('-').map(Number));
            return;
        }

        let num = nums[i];
        for (let qty = 0; qty * num <= n; qty++) {
            let remainder = n - (qty * num);
            if (remainder < 0) break;
            let numAsStr = `${num.toString()}-`
            let subStr = numAsStr.repeat(qty);
            str += subStr;
            helper(remainder, nums, i + 1, memo, str);
            str = str.slice(0, str.length - subStr.length);
        }
    }
    helper(n, nums);
    return arr;
}

console.log(combos(5));
// [
//     [2, 3],
//     [1, 4],
//     [1, 2, 2],
//     [1, 1, 3],
//     [1, 1, 1, 2],
//     [1, 1, 1, 1, 1]
// ]

// This is from internet
// function combos(number) {
// 	let results = [];
  
//   (function partition(num, max = num, arr = []) {
//   	if (num === 0) {
//       results.push(arr);
//     	return;
//     }
//     for (let i = Math.min(max, num); i >= 1; i--) {
//       partition(num - i, i, [...arr, i]);
//     }
//   })(number);
  
//   return results;
// }