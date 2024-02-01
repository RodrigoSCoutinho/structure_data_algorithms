// utilizando o método some para verificar se algum elemento de um array atende a uma condição

const isEven = (x) => x % 2 === 0;

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.some(isEven)); // true