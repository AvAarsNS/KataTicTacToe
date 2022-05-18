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
            
            it('Win when the board is:\n' + 
               'X--\n' +
               'X--\n' +
               'X--', () => {
                var board = createBoard();
                board = place(board, 0, 0, 'X');
                board = place(board, 0, 1, 'X');
                board = place(board, 0, 2, 'X');
                expect(detectWin(board, 'X')).toBe(true);
            });
            
            it('No win when the board is:\n' + 
               'X--\n' +
               '---\n' +
               'X--', () => {
                var board = createBoard();
                board = place(board, 0, 0, 'X');
                board = place(board, 0, 2, 'X');
                expect(detectWin(board, 'X')).toBe(false);
            });
        });

        describe('And in the third vertical column', () => {
            it('Win when the board is:\n' + 
            '--X\n' +
            '--X\n' +
            '--X', () => {
                var board = createBoard();
                board = place(board, 2, 0, 'X');
                board = place(board, 2, 1, 'X');
                board = place(board, 2, 2, 'X');
                expect(detectWin(board, 'X')).toBe(true);
            });
        });

        describe('And we want O to be able to win as well:', () => {
            it('On wins when the board is:\n' + 
            '-O-\n' +
            '-O-\n' +
            '-O-', () => {
                var board = createBoard();
                board = place(board, 1, 0, 'O');
                board = place(board, 1, 1, 'O');
                board = place(board, 1, 2, 'O');
                expect(detectWin(board, 'O')).toBe(true);
            });
        });
    });
});