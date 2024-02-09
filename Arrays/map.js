// utilizando o map para iterar sobre um array e retornar um novo array

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((item, index) => 
`O elemento multiplicado por 2: ${item * 2} está na posição do Array: ${index}`
);

console.log(doubleNumbers); // [2, 4, 6, 8, 10]

const tvShows = [
    { name: 'Breaking Bad', release: 2008 },
    { name: 'Mr. Robot', release: 2015 },
    { name: 'True Detective', release: 2014 },
    { name: 'Hannibal', release: 2013 },
    { name: 'The Leftovers', release: 2014 }
];

const tvShowsNames = tvShows.map(({ name}) =>
       name
);

console.log(tvShowsNames); // ["Breaking Bad", "Mr. Robot", "True Detective", "Hannibal", "The Leftovers"]
