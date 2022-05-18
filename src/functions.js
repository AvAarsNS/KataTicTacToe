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
    return board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X';
}

module.exports = {
    createBoard,
    place,
    detectWin
};