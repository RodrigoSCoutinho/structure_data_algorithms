class Stack {
    constructor() {
      this.items = [];
     
    }

    //? Adicionando novos itens no topo da pilha.

    push(element){
        return this.items.push(element);
    }

    //? Removendo itens da pilha

    pop(){
        return this.items.pop();
    }
    
    //? Devolvendo o item que est[a no topo da pilha.

    peek(){
        return this.items[this.items.length - 1];

        //*[2] 100, [1] 72, [0] 80 ===> length - 1 ==> (3 - 1) === 2
    }

    //? Devolvendo true se a pilha estiver vazia(nenhum elemento foi adicionado), e false caso ao contrário.

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    //? Esvaziando a pilha, removendo todos os elementos.

    clear(){
        this.items = [];
    }
}

const stacks = new Stack();

console.log(stacks.isEmpty()); //exibe true

stacks.push(5);
stacks.push(8);

console.log(stacks.peek()); //6

stacks.push(11);

console.log(stacks.size()); //exibe 3
console.log(stacks.isEmpty()); // exibe false

stacks.push(15);