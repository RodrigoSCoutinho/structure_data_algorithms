// usando o filter para iterar sobre um array e retornar um novo array

const numbers = [1, 2, 3, 4, 5];

const oddNumbers = numbers.filter(
     (item, index) => item % 2 !== 0
);

console.log(oddNumbers); // [1, 3, 5]

const tarantinoMovies = [
     { name: 'Bastardos Inglórios', release: 2009 },
     { name: 'Pulp Fiction', release: 1994 },
     { name: 'Kill Bill: Volume 2', release: 2004 },
     { name: 'Quatro Quartos', release: 1995 },
     { name: 'Django Livre', release: 2012 }
     
];

const moviesAfter2000 = tarantinoMovies.filter(({ release }) => release > 2000);

console.log(moviesAfter2000); // [{ name: 'Bastardos Inglórios', release: 2009 }, { name: 'Django Livre', release: 2012 }]