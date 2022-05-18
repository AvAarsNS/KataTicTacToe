function createBoard() {
    return [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
}

function place(board, column, row, marker) {
    board[row][column] = marker;
    return board;
}

function detectWin(board, marker) {
    for (let column = 0; column < 3; column++) {
        if (board[0][column] == marker && board[1][column] == marker && board[2][column] == marker)
            return true;
        
    }

    return false;
}

module.exports = {
    createBoard,
    place,
    detectWin
};