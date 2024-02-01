// utilizando o metodo every para verificar se todos os elementos de um array atendem a uma condição

const isEven = (x) => x % 2 === 0;

const numbers = [2, 4, 6, 8, 10];

console.log(numbers.every(isEven)); // true