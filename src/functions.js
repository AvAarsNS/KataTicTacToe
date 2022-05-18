function createBoard() {
    return [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
}

function place(board, column, row, marker) {
    board[row][column] = marker;
    return board;
}

function detectWin(board) {
    for (let column = 0; column < 3; column++) {
        if (board[0][column] == 'X' && board[1][column] == 'X' && board[2][column] == 'X')
            return true;
        
    }

    return false;
}

module.exports = {
    createBoard,
    place,
    detectWin
};