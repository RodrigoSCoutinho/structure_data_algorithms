// usando o filter para iterar sobre um array e retornar um novo array

const numbers = [1, 2, 3, 4, 5];

const oddNumbers = numbers.filter(
     (item, index) => item % 2 !== 0
);

console.log(oddNumbers); // [1, 3, 5]