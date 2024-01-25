// FUNCIONALIDADES IMPLEMENTADAS A PARTIR DO ECMASCRIPT 2015+ (ES6)

// * const e let (1)
// * Arrow Functions
// * Valores padrão
// * Desestruturação
// * Operadores rest/spread
// * Template Literals
// * Object Short Syntax


// *TODO const e let (1)

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

// *TODO Template Literals

const book = {
    name: 'Learning JavaScript Data Structures and Algorithms',
}

console.log(`Você está lendo ${book.name}.`);

// *TODO Arrow Functions

var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};

console.log(circleAreaES5(2));

//simplificando o código com arrow function

const circleAreaES6 = (r) => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
}

console.log(circleAreaES6(2));

// *TODO Operadores rest/spread

function sum(...params) {
    return params.reduce((total, next) => total + next);
}

let params = [3, 4, 5];
console.log(sum.apply(undefined, params));

// *TODO Desestruturação

const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, idade, endereco: { cidade } } = user;

console.log(nome);

// *TODO POO

class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn);
    }
}

let books = new Book('title', 'pag', 'isbn');

console.log(books.title);

books.title = 'new title';

console.log(books.title);

// *TODO Herança

class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');

console.log(jsBook.title);

jsBook.printTechnology();

// *TODO Getters e Setters (ENCAPSULAMENT)

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        }
        console.log('Rejected!');
    }
}

let person = new Person('Diego');

console.log(person.name);

person.name = 'Lu';

console.log(person.name);

// *TODO Módulos

const circleArea = r => 3.14 * r * r;

const squareArea = s => s * s;

export { circleArea, squareArea };



