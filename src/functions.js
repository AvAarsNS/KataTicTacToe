function createBoard() {
    return [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
}

function placeX(board, column, row, marker) {
    board[row][column] = marker;
    return board;
}

module.exports = {
    createBoard,
    placeX
};