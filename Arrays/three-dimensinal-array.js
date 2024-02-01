// contruindo um array tridimensional

let averageTemp = [];

averageTemp[0] = [72, 75, 79];

averageTemp[1] = [72, 75, 79];

averageTemp[2] = [72, 75, 79];

function printMatrix(MyMatrix) {
    for (let i = 0; i < MyMatrix.length; i++) {
        for (let j = 0; j < MyMatrix[i].length; j++) {
           for (let k = 0; k < MyMatrix[i][j].length; k++) {
                 console.log(MyMatrix[i][j][k]);
           }
        }
    }
}

console.table(averageTemp);