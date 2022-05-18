const {createBoard} = require('../src/functions');

describe('This is the game of tic tac toe', () => {
    it('we want to create an empty board', () => {
        const board = createBoard();
        expect(board).toStrictEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
    });
});