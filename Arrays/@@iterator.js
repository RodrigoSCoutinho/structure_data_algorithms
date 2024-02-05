//usando o objeto @@iterator para iterar sobre um array e retornar um novo array com o método next() do objeto iterator

const numbers = [1, 2, 3, 4, 5];

const iterator = numbers[Symbol.iterator]();

let next = iterator.next();

while(!next.done) {

    console.log(next.value);
    next = iterator.next();

}

//1