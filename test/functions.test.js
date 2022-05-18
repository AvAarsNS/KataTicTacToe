const {createBoard, placeX} = require('../src/functions');

describe('This is the game of tic tac toe', () => {
    it('we want to create an empty board', () => {
        const board = createBoard();
        expect(board).toStrictEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
    });

    describe('We want to be able to place player markers', () => {
        it('An X in the top left', () => {
            var board = createBoard();
            board = placeX(board, 0, 0);

            expect(board).toStrictEqual([['X',' ',' '],
                                         [' ',' ',' '],
                                         [' ',' ',' ']]);
        });
        it('An X in the top center', () => {
            var board = createBoard();
            board = placeX(board, 1, 0);

            expect(board).toStrictEqual([[' ','X',' '],
                                         [' ',' ',' '],
                                         [' ',' ',' ']]);
        });
        it('An X in the bottom right', () => {
            var board = createBoard();
            board = placeX(board, 2, 2);

            expect(board).toStrictEqual([[' ',' ',' '],
                                         [' ',' ',' '],
                                         [' ',' ','X']]);
        });
    });
});