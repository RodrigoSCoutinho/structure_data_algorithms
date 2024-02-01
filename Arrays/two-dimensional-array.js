// construindo um array bidimensional


// 1. Construindo um array bidimensional

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];


function printMatrix(MyMatrix) {
  for (let i = 0; i < MyMatrix.length; i++) {
    for (let j = 0; j < MyMatrix[i].length; j++) {
        console.log(MyMatrix[i][j])
    }
  }
}

console.table(averageTemp); 