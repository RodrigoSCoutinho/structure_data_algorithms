const _items = Symbol('stackItems');
class Stack {
    constructor(){
        this[_items] = [];
    }

    push(element){
        return this[_items].push(element); 
    }

    print() {
        console.log(this[_items]);
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);

let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(1); 
stack.print(); // 5, 8, 1

// Tentativa de acesso direto a _items fora da classe
console.log(stack[_items]); // Erro: Uncaught ReferenceError: _items is not defined