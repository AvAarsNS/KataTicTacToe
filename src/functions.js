function createBoard() {
    return [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
}

function placeX(board) {
    board[0][0] = 'X';
    return board;
}

module.exports = {
    createBoard,
    placeX
};