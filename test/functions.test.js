const {createBoard, place, detectWin} = require('../src/functions');

describe('This is the game of tic tac toe', () => {
    it('we want to create an empty board', () => {
        const board = createBoard();
        expect(board).toStrictEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
    });

    describe('We want to be able to place player markers', () => {
        it('An X in the top left', () => {
            var board = createBoard();
            board = place(board, 0, 0, 'X');

            expect(board).toStrictEqual([['X',' ',' '],
                                         [' ',' ',' '],
                                         [' ',' ',' ']]);
        });
        it('An X in the top center', () => {
            var board = createBoard();
            board = place(board, 1, 0, 'X');

            expect(board).toStrictEqual([[' ','X',' '],
                                         [' ',' ',' '],
                                         [' ',' ',' ']]);
        });
        it('An X in the bottom right', () => {
            var board = createBoard();
            board = place(board, 2, 2, 'X');

            expect(board).toStrictEqual([[' ',' ',' '],
                                         [' ',' ',' '],
                                         [' ',' ','X']]);
        });
        it('An O in the center', () => {
            var board = createBoard();
            board = place(board, 1, 1, 'O');

            expect(board).toStrictEqual([[' ',' ',' '],
                                         [' ','O',' '],
                                         [' ',' ',' ']]);
        });
    });

    describe('We want to be able to detect vertical wins:', () => {
        describe('In the first vertical column:', () => {
            it('No win when the board is:\n' + 
               'X--\n' +
               '---\n' +
               '---', () => {
                var board = createBoard();
                board = place(board, 0, 0, 'X');
                expect(detectWin(board, 'X')).toBe(false);
            });
            
        });
    });
});