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

    for (let row = 0; row < 3; row++) {
        if (board[row][0] == marker && board[row][1] == marker && board[row][2] == marker)
            return true;
    }

    if (board[0][0] == marker && board[1][1] == marker && board[2][2] == marker)
            return true;
            
    if (board[0][2] == marker && board[1][1] == marker && board[2][0] == marker)
        return true;

    return false;
}

function boardIsFull(board) {
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (board[row][column] == ' ') 
                return false;
        }
    }
    return true;
}

function formatBoard(board) {
    var formattedBoard = '';
    
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            formattedBoard += board[row][column];
            if (column < 2)
                formattedBoard += '|';
        }
        if (row < 2)
            formattedBoard += '\n-----\n';
    }

    return  formattedBoard;
}

function placeIsEmpty(board, column, row) {
    return board[column][row] == ' ';
}

function nextPlayer(previous) {
    return
}

module.exports = {
    createBoard,
    place,
    detectWin,
    boardIsFull,
    formatBoard,
    placeIsEmpty,
    nextPlayer
};