const {createBoard, place, detectWin, boardIsFull, formatBoard, placeIsEmpty, nextPlayer} = require('./functions');

async function ticTacToe() {
    var board, player;
    var winConditionMet = false;

    console.log('Game board creation...')

    board = createBoard();

    console.log(formatBoard(board) + '\n');
    console.log('Board Created.');

    player = nextPlayer(player);

    console.log('The game will start with player ' + player);

    while (!winConditionMet) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Player ' + player + ':');

        var column, row;
        do {
            column = Math.floor(Math.random() * 3);
            row = Math.floor(Math.random() * 3);
        } while (!placeIsEmpty(board, column, row));

        board = place(board, column, row, player);
        console.log(formatBoard(board) + '\n');

        winConditionMet = true;
    }
}

ticTacToe()