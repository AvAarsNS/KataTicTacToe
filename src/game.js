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
}

ticTacToe()