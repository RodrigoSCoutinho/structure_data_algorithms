// Ordenando os elementos 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

numbers.reverse()
numbers.sort((a, b) => {
    // if(a < b) return -1
    // else if(a > b) return 1

    return a - b 
})

console.log(numbers)

//ou

numbers.sort((a, b) => {
    if(a < b) return -1
    else if(a > b) return 1 
})

console.log(numbers)

//<-------- Ordenação Personalizada ------------>

const friends = [
    { name: 'John', age: 30},
    { name: 'Maria', age: 25},
    { name: 'Jessica', age: 20}
]

friends.sort((a, b) => {
   return a.age - b.age
})

console.log(friends)

//<-------- Ordenação Strings ------------>


let friends2 = [
    { name: 'Rodrigo'},
    { name: 'Pedro'},
    { name: 'rodrigo'},
    { name: 'pedro'}
]

friends2.sort((a, b) => {
    // if (a.name.toLowerCase() < b.name.toLowerCase()) {
    //     return -1
    // } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //     return 1
    // }
    // return 0;
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
})

console.log(friends2)
