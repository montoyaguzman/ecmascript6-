let numbers = [1, 2, 3, 4, 5]
let numberToFind = 6

//js
numbers.indexOf(numberToFind) !== -1
    ? console.log(`Encontre el ${numberToFind}`)
    : console.log(`${numberToFind} no existe en el arreglo`)

//es7
numbers.includes(numberToFind)
    ? console.log(`Encontre el ${numberToFind}`)
    : console.log(`${numberToFind} no existe en el arreglo`)
