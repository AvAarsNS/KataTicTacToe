const {createBoard, placeX} = require('../src/functions');

describe('This is the game of tic tac toe', () => {
    it('we want to create an empty board', () => {
        const board = createBoard();
        expect(board).toStrictEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
    });

    describe('We want to be able to place player markers', () => {
        it('An X in the top left', () => {
            var board = createBoard();
            board = placeX(board);

            expect(board).toStrictEqual([['X',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
        });
    });
});