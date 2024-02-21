// Criando um outro array a partir de um array já existente 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numbers2 = Array.from(numbers);

//OU

let evens = Array.from(numbers, x  => (x % 2 === 0));

console.log(evens) 

// [
//     false, true,  false,
//     true,  false, true,
//     false, true,  false,
//     true
//   ]