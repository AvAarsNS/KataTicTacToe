const {createBoard, place, detectWin, boardIsFull, formatBoard} = require('../src/functions');

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
            it('O wins when the board is:\n' + 
            '-O-\n' +
            '-O-\n' +
            '-O-', () => {
                var board = createBoard();
                board = place(board, 1, 0, 'O');
                board = place(board, 1, 1, 'O');
                board = place(board, 1, 2, 'O');
                expect(detectWin(board, 'O')).toBe(true);
            });

            it('O doesn\'t win when the board is:\n' + 
            '-X-\n' +
            '-X-\n' +
            '-X-', () => {
                var board = createBoard();
                board = place(board, 1, 0, 'X');
                board = place(board, 1, 1, 'X');
                board = place(board, 1, 2, 'X');
                expect(detectWin(board, 'O')).toBe(false);
            });
        });
    });

    describe('We want to be able to detect horizontal wins:', () => {
        describe('In the first horizontal row:', () => {
            it('X doesn\'t win when when the board is:\n' + 
            'X--\n' +
            '---\n' +
            '---', () => {
                var board = createBoard();
                board = place(board, 0, 0, 'X');
                expect(detectWin(board, 'X')).toBe(false);
            });

            it('X wins when when the board is:\n' + 
            'XXX\n' +
            '---\n' +
            '---', () => {
                var board = createBoard();
                board = place(board, 0, 0, 'X');
                board = place(board, 1, 0, 'X');
                board = place(board, 2, 0, 'X');
                expect(detectWin(board, 'X')).toBe(true);
            });

            it('X wins when when the board is:\n' + 
            '---\n' +
            'XXX\n' +
            '---', () => {
                var board = createBoard();
                board = place(board, 0, 1, 'X');
                board = place(board, 1, 1, 'X');
                board = place(board, 2, 1, 'X');
                expect(detectWin(board, 'X')).toBe(true);
            });

            it('O wins when when the board is:\n' + 
            '---\n' +
            '---\n' +
            'OOO', () => {
                var board = createBoard();
                board = place(board, 0, 2, 'O');
                board = place(board, 1, 2, 'O');
                board = place(board, 2, 2, 'O');
                expect(detectWin(board, 'O')).toBe(true);
            });
        });
    });

    describe('We also want to detect diagonal wins:', () => {
        it('X wins when when the board is:\n' + 
        'X--\n' +
        '-X-\n' +
        '--X', () => {
            var board = createBoard();
            board = place(board, 0, 0, 'X');
            board = place(board, 1, 1, 'X');
            board = place(board, 2, 2, 'X');
            expect(detectWin(board, 'X')).toBe(true);
        });
        it('O wins when when the board is:\n' + 
        '--O\n' +
        '-O-\n' +
        'O--', () => {
            var board = createBoard();
            board = place(board, 0, 2, 'O');
            board = place(board, 1, 1, 'O');
            board = place(board, 2, 0, 'O');
            expect(detectWin(board, 'O')).toBe(true);
        });
    });
    describe('We want to check for a full board, to detect a draw', () => {
        it('An empty board is NOT full', () => {
            var board = createBoard();
            expect(boardIsFull(board)).toBe(false);
        });
        it('An almost full board is, still, NOT full', () => {
            var board = createBoard();
            board[0] = ['X', 'O', 'X'];
            board[1] = ['O', ' ', 'O'];
            board[2] = ['X', 'O', 'X'];
            expect(boardIsFull(board)).toBe(false);
        });
        it('An full board IS full', () => {
            var board = createBoard();
            board[0] = ['X', 'O', 'X'];
            board[1] = ['O', 'O', 'X'];
            board[2] = ['X', 'O', 'O'];
            expect(boardIsFull(board)).toBe(true);
        });
    });

    describe('We want to test the UAT scenarios:', () => {
        it('UAT scenario 2:\n' + 
        'X--\n' +
        'XO-\n' +
        'X-O\n' +
        'X should win, and O should not', () => {
            var board = createBoard();
            board = place(board, 0, 0, 'X');
            board = place(board, 1, 1, 'O');

            expect(detectWin(board, 'O')).toBe(false);
            expect(detectWin(board, 'X')).toBe(false);

            board = place(board, 0, 1, 'X');
            board = place(board, 2, 2, 'O');

            expect(detectWin(board, 'O')).toBe(false);
            expect(detectWin(board, 'X')).toBe(false);

            board = place(board, 0, 2, 'X');
            expect(detectWin(board, 'O')).toBe(false);
            expect(detectWin(board, 'X')).toBe(true);
        });
        it('UAT scenario 3:\n' + 
        'X-X\n' +
        'OOO\n' +
        'X--\n' +
        'O should win, and X should not', () => {
            var board = createBoard();
            board = place(board, 0, 0, 'X');
            board = place(board, 0, 1, 'O');

            expect(detectWin(board, 'O')).toBe(false);
            expect(detectWin(board, 'X')).toBe(false);

            board = place(board, 0, 2, 'X');
            board = place(board, 1, 1, 'O');

            expect(detectWin(board, 'O')).toBe(false);
            expect(detectWin(board, 'X')).toBe(false);

            board = place(board, 2, 0, 'X');
            board = place(board, 2, 1, 'O');
            expect(detectWin(board, 'O')).toBe(true);
            expect(detectWin(board, 'X')).toBe(false);
        });

        it('UAT scenario 4:\n' + 
        'X--\n' +
        'OX-\n' +
        'O-X\n' +
        'X should win, and O should not', () => {
            var board = createBoard();

            board = place(board, 0, 0, 'X');
            board = place(board, 0, 1, 'O');

            expect(detectWin(board, 'X')).toBe(false);
            expect(detectWin(board, 'O')).toBe(false);

            board = place(board, 1, 1, 'X');
            board = place(board, 0, 2, 'O');
            
            expect(detectWin(board, 'X')).toBe(false);
            expect(detectWin(board, 'O')).toBe(false);

            board = place(board, 2, 2, 'X');
            
            expect(detectWin(board, 'X')).toBe(true);
            expect(detectWin(board, 'O')).toBe(false);
        });

        it('UAT scenario 5:\n' + 
        'XOX\n' +
        'OOX\n' +
        'XXO\n' +
        'X and O both should not win, it should be a draw', () => {
            var board = createBoard();

            board = place(board, 0, 0, 'X');
            board = place(board, 1, 0, 'O');
            board = place(board, 2, 0, 'X');
            board = place(board, 0, 1, 'O');
            board = place(board, 1, 1, 'O');
            board = place(board, 2, 1, 'X');
            board = place(board, 0, 2, 'X');
            board = place(board, 1, 2, 'X');
            board = place(board, 2, 2, 'O');
            
            expect(detectWin(board, 'X')).toBe(false);
            expect(detectWin(board, 'O')).toBe(false);
            expect(boardIsFull(board)).toBe(true);
        });
    });

    describe('We want to be able to format the board:', () => {
        it('An empty board:\n' + 
            ' | | \n' + 
            '-----\n' + 
            ' | | \n' + 
            '-----\n' + 
            ' | | ', () => {
            var board = createBoard();
            expect(formatBoard(board)).toBe(' | | \n' + 
                                            '-----\n' + 
                                            ' | | \n' + 
                                            '-----\n' + 
                                            ' | | ')
        });
        it('A half full board:\n' + 
            'X| | \n' + 
            '-----\n' + 
            'X|O| \n' + 
            '-----\n' + 
            'X| |O', () => {
            var board = createBoard();

            board = place(board, 0, 0, 'X');
            board = place(board, 1, 1, 'O');
            board = place(board, 0, 1, 'X');
            board = place(board, 2, 2, 'O');
            board = place(board, 0, 2, 'X');

            expect(formatBoard(board)).toBe('X| | \n' + 
                                            '-----\n' + 
                                            'X|O| \n' + 
                                            '-----\n' + 
                                            'X| |O')
        });
    });
});