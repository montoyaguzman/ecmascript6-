/*
Un generador es una funcion con sintaxis especial,
de acuerdo a un algoritmo dado
*/

function* hello() {
    if(true) {
        yield 'Hellow'
    }
    if(true) {
        yield 'Hellow'
    }
}

const generatorHello = hello()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)