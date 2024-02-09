// utilizando o metodo forEach para iterar sobre um array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((item, index) => {
    console.log(`O elemento ${item} está na posição ${index}`);
});


//O elemento 1 está na posição 0
//O elemento 2 está na posição 1
//O elemento 3 está na posição 2
//O elemento 4 está na posição 3
//O elemento 5 está na posição 4

//Parando um forEach com break

const num = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110];

try {
    num.forEach((item, index) => {
        console.log(item);
    
        if (item === 55 || index === 3) {
            throw new Error("Ops! Parando o loop!", item, index);
        }
    });
    
} catch (error) {
  console.log("Erro capturado", error);
}

//ou

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if(array[i] === 5) {
        break;
    }
    console.log("Continuando...", array[i])
}

//1
