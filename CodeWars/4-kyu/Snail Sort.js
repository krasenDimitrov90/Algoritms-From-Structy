function snail(matrix) {
    let spiral = [];
    let row = col = 0;

    (function helper(matrix) {
        if (!matrix.length) return;
        spiral.push(...matrix.shift());// right

        for (let i = 0; i < matrix.length - 1; i++) { // down
            spiral.push(matrix[i].pop());
        }

        spiral.push(...((matrix.pop() || []).reverse())); // left

        for (let i = matrix.length - 1; i >= 0; i--) { // up
            spiral.push(matrix[i].shift());
        }
        helper(matrix);
    })(matrix);

    return spiral;
}

let array = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];

console.log(snail(array));
console.log(snail([[]]));