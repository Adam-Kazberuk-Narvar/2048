var boardArray = [
  [
    Number(document.getElementById("uull").innerHTML),
    Number(document.getElementById("uul").innerHTML),
    Number(document.getElementById("uur").innerHTML),
    Number(document.getElementById("uurr").innerHTML)
  ],
  [
    Number(document.getElementById("ull").innerHTML),
    Number(document.getElementById("ul").innerHTML),
    Number(document.getElementById("ur").innerHTML),
    Number(document.getElementById("urr").innerHTML)
  ],
  [
    Number(document.getElementById("dll").innerHTML),
    Number(document.getElementById("dl").innerHTML),
    Number(document.getElementById("dr").innerHTML),
    Number(document.getElementById("drr").innerHTML)
  ],
  [
    Number(document.getElementById("ddll").innerHTML),
    Number(document.getElementById("ddl").innerHTML),
    Number(document.getElementById("ddr").innerHTML),
    Number(document.getElementById("ddrr").innerHTML)
  ]
];

function moveElement(increasingElement, element, array, newElementRow, newElementCol) {
  array[newElementRow][newElementCol] = increasingElement + element;
  return;
}

function upButtonPress() {
  console.log("Up is pressed");
  document.getElementById("debugText").innerHTML = "Up is pressed";

  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 4; j++){
      moveElement(boardArray[i][j], boardArray[i+1][j], boardArray, i, j);
    }
  }
  displayBoard();
}

function downButtonPress() {
  console.log("Down is pressed");
  document.getElementById("debugText").innerHTML = "Down is pressed";

  for(var i = 3; i > 0; i--){
    for(var j = 0; j < 4; j++){
      moveElement(boardArray[i][j], boardArray[i-1][j], boardArray, i, j);
    }
  }
  displayBoard();
}

function leftButtonPress() {
  console.log("Left is pressed");
  document.getElementById("debugText").innerHTML = "Left is pressed";

  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 3; j++){
      moveElement(boardArray[i][j], boardArray[i][j+1], boardArray, i, j);
    }
  }
  displayBoard();
}

function rightButtonPress() {
  console.log("Right is pressed");
  document.getElementById("debugText").innerHTML = "Right is pressed";
}

function displayBoard() {
  document.getElementById("uull").innerHTML = boardArray[0][0];
  document.getElementById("uul").innerHTML = boardArray[0][1];
  document.getElementById("uur").innerHTML = boardArray[0][2];
  document.getElementById("uurr").innerHTML = boardArray[0][3];

  document.getElementById("ull").innerHTML = boardArray[1][0];
  document.getElementById("ul").innerHTML = boardArray[1][1];
  document.getElementById("ur").innerHTML = boardArray[1][2];
  document.getElementById("urr").innerHTML = boardArray[1][3];

  document.getElementById("dll").innerHTML = boardArray[2][0];
  document.getElementById("dl").innerHTML = boardArray[2][1];
  document.getElementById("dr").innerHTML = boardArray[2][2];
  document.getElementById("drr").innerHTML = boardArray[2][3];

  document.getElementById("ddll").innerHTML = boardArray[3][0];
  document.getElementById("ddl").innerHTML = boardArray[3][1];
  document.getElementById("ddr").innerHTML = boardArray[3][2];
  document.getElementById("ddrr").innerHTML = boardArray[3][3];
}

//current test in progress
function currentTestPress() {
  var arr2D = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  console.log(arr2D[3][2]);

  moveElement(boardArray[0][0], boardArray[0][1], boardArray, 0, 0);
  displayBoard();
}

//for checking what's in the arrays
function boardButtonPress() {
  document.getElementById("debugText").innerHTML = "Look at console to see what's on the boardArray";
  console.log(boardArray[0][0], boardArray[0][1], boardArray[0][2], boardArray[0][3]);
  console.log(boardArray[1][0], boardArray[1][1], boardArray[1][2], boardArray[1][3]);
  console.log(boardArray[2][0], boardArray[2][1], boardArray[2][2], boardArray[2][3]);
  console.log(boardArray[3][0], boardArray[3][1], boardArray[3][2], boardArray[3][3]);
}
