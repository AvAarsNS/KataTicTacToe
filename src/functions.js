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

    if (board[0][0] == marker && board[0][1] == marker && board[0][2] == marker)
        return true;
    return false;
}

module.exports = {
    createBoard,
    place,
    detectWin
};