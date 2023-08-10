function isSolved(board) {
    let leftDiagonal = [board[0][0], board[1][1], board[2][2]];
    let rightDiagonal = [board[0][2], board[1][1], board[2][0]];

    if (leftDiagonal.every(x => x === leftDiagonal[0] && x !== 0)) return leftDiagonal[0];
    if (rightDiagonal.every(x => x === rightDiagonal[0] && x !== 0)) return rightDiagonal[0];

    for (const row of board) {
        if (row.every((x, i) => x !== 0 && x === row[i > 0 ? i - 1 : 0])) return row[0];
    }

    for (let i = 0, l = board.length; i < l; i++) {
        if (board[0][i] === board[0][i] === board[0][i]) return board[0][i];
    }

    for (const row of board) {
        if (row.some(x => x === 0)) return -1;
    }

    return 0;
}

let board = [[1, 1, 1], [0, 2, 2], [0, 0, 0]]

console.log(isSolved(board))