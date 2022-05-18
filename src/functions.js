function createBoard() {
    return [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
}

function placeX(board, column) {
    board[0][column] = 'X';
    return board;
}

module.exports = {
    createBoard,
    placeX
};