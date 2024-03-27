const items = new WeakMap();

class Stack {
    constructor(stack){
       items.set(this, []);
    }

    push(element){
        const s = items.get(this);
        s.push(element);
    }

    pop(){
        const s = items.get(this);
        const r = s.pop();
        return r;
    }


}