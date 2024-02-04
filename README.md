Tic Tac Toe Game:
This repository contains the code for a browser-based Tic Tac Toe game implemented using HTML, CSS, and JavaScript.

Implementation:
It consists of a 3x3 grid where players take turns marking spaces with their respective symbols (X or O). The game interface shows whose turn it is and displays the winner when the game is won.

How the Game Works:
  - Players are prompted to enter their names at the beginning of the game.
  - The game starts with player X making the first move.
  - Players take turns clicking on the empty boxes to place their symbols (X or O).
  - The game checks for win conditions after each move.
  - If a player successfully aligns three of their symbols horizontally, vertically, or diagonally, they win the game.
  - The game ends when either a player wins or the entire grid is filled (resulting in a draw).
  - Players can refresh the game board at any time to start a new game.

Win Conditions:
![360_F_425540496_7gebvyFAgSVFl4inFZtU7XKRRXH7dVfa](https://github.com/AjayR-7/TIC-TOC-TOE/assets/140146943/b3ccac77-23c1-4f60-afe1-ffe3b8017a96)
The game checks for win conditions by comparing the symbols in each winning combination. If all symbols in a winning combination match and are not empty, the player who owns those symbols wins the game.

Functions:
  - changeturn(): This function changes the turn from X to O and vice versa.
  - checkwin(): This function checks for win conditions after each move and declares the winner if a win condition is met.
  - Refresh(): This function resets the game board, allowing players to start a new game.
