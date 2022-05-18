function createBoard() {
    return [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
}

function placeX(board, column, row) {
    board[row][column] = 'X';
    return board;
}

module.exports = {
    createBoard,
    placeX
};