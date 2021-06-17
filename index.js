/*Part 1 */
function makeLine(size = 0){
  let i = 0; 
  let line="";
  if(size === 0){
    return "";
  }
  for(i =0 ; i < size; i++){
    line += "#";
  }
  return line;
}

function makeLineRec(size = 0){
  if(size === 0){
    return "";
  }
  return ("#" + makeLineRec(size-1));
}

let str = "Make line:";
console.log(str);
console.log("iterative:\n" + makeLine(6));
console.log("recursive:\n" + makeLineRec(6) + "\n");

/*Part 2 */
function makeSquare (size = 0){
  let i = 0;
  let squareShape = "";
  if(size === 0){
    return "";
  }
  for (i =0; i < size; i++){
    squareShape += makeLine(size);
    if (i < size -1){
    squareShape += "\n"
    }
  }
  return squareShape;
}

function makeSquareRec(squareSize = 0, lineSize = squareSize){
  if(squareSize === 1){
    return makeLineRec(lineSize);
  }
  return ( makeLineRec(lineSize)+ "\n" + makeSquareRec(squareSize -1, lineSize));
}

str = "Make square: ";
console.log(str);
console.log("iterative:\n" + makeSquare(6));
console.log("recursive:\n" + makeSquareRec(6) + "\n");

/*Part 3 */
function makeRectangle (rectSize = 0, lineSize = 0){
  let i = 0;
  let rectShape = "";
  if(rectSize === 0){
    return "";
  }
  for (i =0; i < rectSize; i++){
    rectShape += makeLine(lineSize);
    if (i < rectSize -1){
    rectShape += "\n"
    }
  }
  return rectShape;
}

str = "Make rectangle: ";
console.log(str);
console.log("iterative:\n" + makeRectangle(5,7));
console.log("recursive:\n" + makeSquareRec(5,7) + "\n");

/*Part 4 */
function makeDownwardStairs(height = 0){
  let i =0; let j = 0;
  let stairs = "";
  if(height === 0){
    return "";
  }
  for(i=0;i<height; i++){
    for (j=0; j <= i; j++){
    stairs += "#";
    }
    if (i < height -1){
    stairs += "\n"
  }
  }
  return stairs;
}

function makeDownwardStairsRec(height = 0, row = 0){
  if(height === 0){
    return "";
  }
//had to reverse these to get stairs in right direction
  return (makeDownwardStairsRec(height-1) + makeLine(height)+ "\n"  );
}

str = "Make downward stairs: ";
console.log(str);
console.log("iterative:\n" + makeDownwardStairs(5));
console.log("recursive:\n" + makeDownwardStairsRec(5) + "\n");

/*Part 5 */
function makeSpaceLine(numSpaces=0, numChars=0){
  let i = 0;
  let line="";
  if(numChars === 0){
    return "";
  }
    for(i=0;i < numSpaces; i++){
      line += "_";
    }
    for(i =0 ; i < numChars; i++){
    line += "#";
    }
    for(i=0;i < numSpaces; i++){
      line += "_";
    }
  return line;
}

function numSpacesRec(numSpaces){
  if(numSpaces === 0){
    return ""; 
  }
    return ("_" + numSpacesRec(numSpaces-1));
}
function numCharsRec(numChars){
if(numChars === 0){
    return"";
  }
    return ("#" + numCharsRec(numChars-1));
}

function makeSpaceLineRec(numSpaces=0, numChars = 0){
  return ( numSpacesRec(numSpaces) + numCharsRec(numChars) + numSpacesRec(numSpaces) ) ;
}

str = "Make line with number spaces: ";
console.log(str);
console.log("iterative:\n" + makeSpaceLine(3,5));
console.log("recursive:\n" + makeSpaceLineRec(3,5) + "\n");

/*part 6 */
function makeIsoscelesTriangle(height = 0){
  let i = 0;
  let triangleShape = "";

  for (i < 0; i < height; i++){
    triangleShape += makeSpaceLine( (height - i - 1) , (2 * i + 1) );
    triangleShape += "\n";
  }
  return triangleShape;
}

//too many calls to the stack
function makeIsoscelesTriangleRec(height = 0, counter = 0){
  if (height === 0)
  return "";

  return(makeIsoscelesTriangleRec(height-1 , counter +1) + makeSpaceLineRec(height -counter -1 , 2*counter + 1 ) + "\n" );
}

str = "Make triangle: ";
console.log(str);
console.log("iterative:\n" + makeIsoscelesTriangle(5));
//console.log("recursive:\n" + makeIsoscelesTriangleRec(1,0) + "\n");

/* part 7 */


function makeDiamond(height){
  let i = 0;
  let triangleShape = "";

  for (i = 0; i < height; i++){
    triangleShape += makeSpaceLine( (height - i - 1) , (2 * i + 1) );
    triangleShape += "\n";
  }
 for(i = height-2; i >= 0 ; i--){
    triangleShape += makeSpaceLine( (height - i - 1) , (2 * i + 1) );
    triangleShape += "\n";
 }

  return triangleShape;
}

str = "Make diamond: ";
console.log(str);
console.log("iterative:\n" + makeDiamond(5));
//console.log("recursive:\n" + makeDiamondRec(5) + "\n");
