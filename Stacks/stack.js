class Stack {
    constructor(){
        this.count = 0;
        this.items = {}
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.count == 0;
    }

    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1]; //é expressão usada para acessar o índice do último elemento na pilha. (2 - 1) = 1
    }

    clear(){
        this.items = {};
        this.count = 0;
        // ou
        while (!this.isEmpty()) {
            this.pop();
        }
    }

    //Exibindo o conteudo de pilha semelhante a um array
    toString(){
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[1]}`
        }
    }
}

const stack = new Stack();

stack.push(5);
stack.push(8);
console.log(stack); // Stack { count: 2, items: { '0': 5, '1': 8 } }

console.log(stack.pop())
console.log(stack); // Stack { count: 1, items: { '0': 5 } }