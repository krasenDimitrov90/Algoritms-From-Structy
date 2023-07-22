// Write a function, countPaths, that takes in a grid as an argument. 
// In the grid, 'X' represents walls and 'O' represents open spaces. 
// You may only move down or to the right and cannot pass through walls. 
// The function should return the number of ways possible to travel 
// from the top-left corner of the grid to the bottom-right corner.


const countPaths = (grid) => {
    let rows = grid.length;
    let cols = grid[0].length;

    return gridTravers(rows, cols, grid);
};

const gridTravers = (rows, cols, grid, r = 0, c = 0, memo = {}) => {

    let count = 0;
    const position = r + ',' + c;

    if (position in memo) return memo[position];

    if (r >= rows || c >= cols || grid[r][c] === "X") return count;
    if (r === rows - 1 && c === cols - 1) return count + 1;

    count += gridTravers(rows, cols, grid, r + 1, c, memo); // down
    count += gridTravers(rows, cols, grid, r, c + 1, memo); // right

    memo[position] = count;
    return count
};



// const grid = [
//     ["O", "O", "X"],
//     ["O", "O", "O"],
//     ["O", "O", "O"],
// ]; --> 5 paths
const grid = [
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
];
console.log(countPaths(grid)); // -> 40116600