/*
Still to do:
1) bug... if board is full, but still able to make a move, still gameover.
  should be able to make a move first before actual game over.
  ===> half fixed. made flags to check if any movement was done in any direction
    if movement was attempted in all directions but nothing moved, this means game over


*/

var gameLost = false;
var tileMoved = false;
var noMoveUp = false;
var noMoveDown = false;
var noMoveLeft = false;
var noMoveRight = false;

var boardArray = [
  [
    {value:Number(document.getElementById("uull").innerHTML), combined:false, elementId:"uull"},
    {value:Number(document.getElementById("uul").innerHTML), combined:false, elementId:"uul"},
    {value:Number(document.getElementById("uur").innerHTML), combined:false, elementId:"uur"},
    {value:Number(document.getElementById("uurr").innerHTML), combined:false, elementId:"uurr"}
  ],
  [
    {value:Number(document.getElementById("ull").innerHTML), combined:false, elementId:"ull"},
    {value:Number(document.getElementById("ul").innerHTML), combined:false, elementId:"ul"},
    {value:Number(document.getElementById("ur").innerHTML), combined:false, elementId:"ur"},
    {value:Number(document.getElementById("urr").innerHTML), combined:false, elementId:"urr"}
  ],
  [
    {value:Number(document.getElementById("dll").innerHTML), combined:false, elementId:"dll"},
    {value:Number(document.getElementById("dl").innerHTML), combined:false, elementId:"dl"},
    {value:Number(document.getElementById("dr").innerHTML), combined:false, elementId:"dr"},
    {value:Number(document.getElementById("drr").innerHTML), combined:false, elementId:"drr"}
  ],
  [
    {value:Number(document.getElementById("ddll").innerHTML), combined:false, elementId:"ddll"},
    {value:Number(document.getElementById("ddl").innerHTML), combined:false, elementId:"ddl"},
    {value:Number(document.getElementById("ddr").innerHTML), combined:false, elementId:"ddr"},
    {value:Number(document.getElementById("ddrr").innerHTML), combined:false, elementId:"ddrr"}
  ]
];

document.onkeydown = function(key) {
  if(key.keyCode == 37) {
    console.log("Left arrow ", key.keyCode);
    leftButtonPress();
  }
  else if(key.keyCode == 38) {
    console.log("Up arrow ", key.keyCode);
    upButtonPress();
  }
  else if(key.keyCode == 39) {
    console.log("Right arrow ", key.keyCode);
    rightButtonPress();
  }
  else if(key.keyCode == 40) {
    console.log("Down arrow ", key.keyCode);
    downButtonPress();
  }
  else {
    console.log("other key pressed ", key.keyCode);
  }
}

function moveElement(increasingElement, element, newElementRow, newElementCol) {
  console.log("moving element: ", element, " into element: ", increasingElement, " at row, col: ", newElementRow, ", ", newElementCol);
  boardArray[newElementRow][newElementCol].value = increasingElement + element;
  tileMoved = true;
  noMoveUp = false;
  noMoveDown = false;
  noMoveLeft = false;
  noMoveRight = false;
}

function deleteElement(row, col) {
  console.log("deleting element at: ", row, ", ", col);
  boardArray[row][col].value = 0;
}

function newElement() {
  console.log("making new element");
  do {
    var newRow = Math.floor(Math.random() * 4);
    var newCol = Math.floor(Math.random() * 4);
    console.log("random row = ", newRow, " random col = ", newCol);
  } while(boardArray[newRow][newCol].value !== 0);
  console.log("newElement row = ", newRow, " newElement col = ", newCol);

  var newElementNum = Math.floor(Math.random() * 10);
  if(newElementNum < 7) {
    newElementNum = 2;
  }
  else {
    newElementNum = 4;
  }
  console.log("newElement number = ", newElementNum);

  boardArray[newRow][newCol].value = newElementNum;

  console.log("calling function to set color of new element");
  changeElementColor(newRow, newCol);
}

function displayBoard() {
  console.log("displaying the board");
  document.getElementById("uull").innerHTML = boardArray[0][0].value;
  document.getElementById("uul").innerHTML = boardArray[0][1].value;
  document.getElementById("uur").innerHTML = boardArray[0][2].value;
  document.getElementById("uurr").innerHTML = boardArray[0][3].value;

  document.getElementById("ull").innerHTML = boardArray[1][0].value;
  document.getElementById("ul").innerHTML = boardArray[1][1].value;
  document.getElementById("ur").innerHTML = boardArray[1][2].value;
  document.getElementById("urr").innerHTML = boardArray[1][3].value;

  document.getElementById("dll").innerHTML = boardArray[2][0].value;
  document.getElementById("dl").innerHTML = boardArray[2][1].value;
  document.getElementById("dr").innerHTML = boardArray[2][2].value;
  document.getElementById("drr").innerHTML = boardArray[2][3].value;

  document.getElementById("ddll").innerHTML = boardArray[3][0].value;
  document.getElementById("ddl").innerHTML = boardArray[3][1].value;
  document.getElementById("ddr").innerHTML = boardArray[3][2].value;
  document.getElementById("ddrr").innerHTML = boardArray[3][3].value;
}

function clearBoard() {
  console.log("clearing the boardArray to all 0");
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      boardArray[i][j].value = 0;
      boardArray[i][j].combined = false;
      changeElementColor(i, j);
    }
  }
  console.log("calling function to display board");
  displayBoard();
}

function checkBoard() {
  console.log("checking the board for win or loss");
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      changeElementColor(i, j);
      if(boardArray[i][j].value === 2048){
        window.alert("Congrats! You Win!")
        return;
      }
    }
  }
  if(gameLost === true){
    window.alert("Game Over. Click New Game to start over.");
  }
  else{
    if(noMoveUp && noMoveDown && noMoveLeft && noMoveRight){
      gameLost = true;
    }
  }
}

function clearCombinedAndTileMoved() {
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      boardArray[i][j].combined = false;
    }
  }
  tileMoved = false;
}

function changeElementColor(row, col) {
  console.log("changing element color at: ", row, ", ", col);
  var elementVal = boardArray[row][col].value;
  console.log("element number is ", elementVal);
  switch(elementVal) {
    case 0:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "white";
      break;
    case 2:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#ffff99";
      break;
    case 4:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#ffff66";
      break;
    case 8:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#ffff00";
      break;
    case 16:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#ccffcc";
      break;
    case 32:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#99ff99";
      break;
    case 64:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#66ff66";
      break;
    case 128:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#ccffff";
      break;
    case 256:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#66ffff";
      break;
    case 512:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#00ffff";
      break;
    case 1024:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "#ff9966";
      break;
    case 2048:
      document.getElementById(boardArray[row][col].elementId).style.backgroundColor = "red";
      break;
    default:
      break;
  }
}

function newGameButtonPress() {
  console.log("new game button pressed");
  gameLost = false;
  clearBoard();
  newElement();
  newElement();
  displayBoard();
}

function upButtonPress() {
  console.log("Up is pressed");

  for(var k = 0; k < 4; k++) {
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 4; j++) {
        if(boardArray[i][j].value === boardArray[i+1][j].value &&
        boardArray[i][j].combined === false &&
        boardArray[i+1][j].combined === false &&
        boardArray[i][j].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i+1][j].value, i, j);
          boardArray[i][j].combined = true;
          deleteElement(i+1, j);
        }
        else if(boardArray[i][j].value === 0 && boardArray[i+1][j].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i+1][j].value, i, j);
          deleteElement(i+1, j);
        }
        else {
        }
      }
    }
  }
  console.log("tileMoved = ", tileMoved);
  if(tileMoved === true) {
    newElement();
  }
  else {
    noMoveUp = true;
  }
  displayBoard();
  checkBoard();
  clearCombinedAndTileMoved();
}

function downButtonPress() {
  console.log("Down is pressed");

  for(var k = 0; k < 4; k++) {
    for(var i = 3; i > 0; i--) {
      for(var j = 0; j < 4; j++) {
        if(boardArray[i][j].value === boardArray[i-1][j].value &&
        boardArray[i][j].combined === false &&
        boardArray[i-1][j].combined === false &&
        boardArray[i-1][j].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i-1][j].value, i, j);
          boardArray[i][j].combined = true;
          deleteElement(i-1, j);
        }
        else if(boardArray[i][j].value === 0 && boardArray[i-1][j].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i-1][j].value, i, j);
          deleteElement(i-1, j);
        }
        else {
        }
      }
    }
  }
  console.log("tileMoved = ", tileMoved);
  if(tileMoved === true) {
    newElement();
  }
  else {
    noMoveDown = true;
  }
  displayBoard();
  checkBoard();
  clearCombinedAndTileMoved();
}

function leftButtonPress() {
  console.log("Left is pressed");

  for(var k = 0; k < 4; k++) {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 3; j++) {
        if(boardArray[i][j].value === boardArray[i][j+1].value &&
        boardArray[i][j].combined === false &&
        boardArray[i][j+1].combined === false &&
        boardArray[i][j].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i][j+1].value, i, j);
          boardArray[i][j].combined = true;
          deleteElement(i, j+1);
        }
        else if(boardArray[i][j].value === 0 && boardArray[i][j+1].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i][j+1].value, i, j);
          deleteElement(i, j+1);
        }
        else {
        }
      }
    }
  }
  console.log("tileMoved = ", tileMoved);
  if(tileMoved === true) {
    newElement();
  }
  else {
    noMoveLeft = true;
  }
  displayBoard();
  checkBoard();
  clearCombinedAndTileMoved();
}

function rightButtonPress() {
  console.log("Right is pressed");

  for(var k = 0; k < 4; k++) {
    for(var i = 0; i < 4; i++) {
      for(var j = 3; j > 0; j--) {
        if(boardArray[i][j].value === boardArray[i][j-1].value &&
        boardArray[i][j].combined === false &&
        boardArray[i][j-1].combined === false &&
        boardArray[i][j-1].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i][j-1].value, i, j);
          boardArray[i][j].combined = true;
          deleteElement(i, j-1);
        }
        else if(boardArray[i][j].value === 0 && boardArray[i][j-1].value !== 0) {
          moveElement(boardArray[i][j].value, boardArray[i][j-1].value, i, j);
          deleteElement(i, j-1);
        }
        else {
        }
      }
    }
  }
  console.log("tileMoved = ", tileMoved);
  if(tileMoved === true) {
    newElement();
  }
  else {
    noMoveRight = true;
  }
  displayBoard();
  checkBoard();
  clearCombinedAndTileMoved();
}


function currentTestPress() {
  document.getElementById("currentTest").innerHTML = "No test being performed.";

}

//for checking what's in the arrays
function boardButtonPress() {
  console.log(boardArray[0][0], boardArray[0][1], boardArray[0][2], boardArray[0][3]);
  console.log(boardArray[1][0], boardArray[1][1], boardArray[1][2], boardArray[1][3]);
  console.log(boardArray[2][0], boardArray[2][1], boardArray[2][2], boardArray[2][3]);
  console.log(boardArray[3][0], boardArray[3][1], boardArray[3][2], boardArray[3][3]);
}
