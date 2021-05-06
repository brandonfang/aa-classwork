// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
// function _makeGrid () {
//   let grid = new Array(8);
//   for (let i = 0; i < grid.length; i++) {
//     grid[i] = new Array(8);
//   }

//   grid[3][4] = new Piece("black");
//   grid[4][3] = new Piece("black");
//   grid[3][3] = new Piece("white");
//   grid[4][4] = new Piece("white");

//   return grid;
// }

function _makeGrid() {
  let grid = new Array(8); 

  for (let i = 0; i < grid.length; i++) {
    temp = new Array(8); 
    grid[i] = temp.fill(undefined);  
  }

  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();

}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let [x, y] = pos; 

  if ((x < 0 || y < 0 ) || (x > 7 || y > 7)) {
    return false; 
  }

  return true; 
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    throw new Error('Not valid pos!');
    }
  return this.grid[pos[0]][pos[1]];
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos); 
  return (this.isOccupied(pos) && piece.color === color)
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !!this.getPiece(pos);
};

// Board.prototype.isOccupied = function(pos) {
//   return this.getPiece(pos) !== undefined; 
// }

function addArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * if(!piecesToFlip) { [] }  /
 * 
 * 
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 //[1, 1]   

 
 Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  


  return piecesToFlip; 
};


//   if (!this.isValidPos(pos)) return [];
//   let pieces = [];

//   Board.DIRS.forEach(dir => {
//     let piecesBetween = [];
//     let nextPos = addArrays(pos, dir);
//     let visitedSameColor = true;
//     let visitedEmpty = true;
//     let visitedOppColor = true;

//     while (this.isValidPos(nextPos) && !this.isMine(nextPos, color)) {
//       if (this.isMine(nextPos, color)) visitedSameColor = false;
//       if (!this.isMine(nextPos, color)) visitedOppColor = false;
//       if (!this.isOccupied(nextPos)) visitedEmpty = false;
//     }



//     if (!(visitedSameColor && visitedEmpty ** visitedOppColor)) {
//       piecesBetween = [];
//     }
//     pieces.push(piecesBetween);
//   })

//   return pieces;
// this.DIRS.forEach(dir => {
//     let piecesBetween = [];
//     let nextPos = addArrays(pos, dir);

//     while (this.isValidPos(nextPos) && !this.isMine(nextPos, color)) {
//       piecesBetween.push(nextPos);
//       pos = nextPos;
//     }

//     pieces.concat(piecesBetween);
//   });

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {


  // call positionsToFlip and check that it's not empty

};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE
