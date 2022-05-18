# Kata Tic Tac Toe

## First pomodoro
Be able to create an empty game board,
Place player markers, and maybe even detect the first win condition

✔ Create empty board

We want to place markers:
✔ Place an X in the top left
✔ Place an X in the top center
✔ Place an X in the bottom right
✔ Place an O in the center

We want to detect X wins in the first column:
✔ One X in first column: no win
✔ Three Xes in first column: win!
✔ Two Xes in first column: no win

We want to detect X wins in other columns:
✔ Three Xes in third column: win!

We want to detect column wins for O:
✔ Three O's in second column: win
✔ Three Xes in second column: no win for O

POMODORO OVER, NOW HALF HOUR BREAK BECAUSE OF DAILY

## Second pomodoro
First, we want to test the second UAT, so we have a complete story
Then, we want to be able to detect horizontal lines, followed by diagonals

✔ UAT Scenario 2

We want to detect horizontal wins:
✔ One X in first row: no win
✔ Three Xes in first row: win!
✔ Three Xes in second row: win!
✔ Three O's in third row: win!

✔ UAT Scenario 3

We want to detect diagonal wins:
✔ ↘ X: win
✔ ↗ O: win

✔ UAT Scenario 4

A little bit of time left, maybe we want to check for a draw
✔ Board empty: no draw
✔ Board almost full: no draw
✔ Board full: draw

## Third pomodoro
We want to check for UAT scenario 5
Format the board
Detect if a space is empty (so we can place something there)
And be able to select the next player based on the current one

✔ UAT Scenario 5

Formatting the board:
✔ UAT 1 (Empty)
- UAT 2 (Half full)
- UAT 5 (Full)