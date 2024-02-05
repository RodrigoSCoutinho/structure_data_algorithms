// utilizando o map para iterar sobre um array e retornar um novo array

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((item, index) => 
`O elemento multiplicado por 2: ${item * 2} está na posição ${index}`
);

console.log(doubleNumbers); // [2, 4, 6, 8, 10]