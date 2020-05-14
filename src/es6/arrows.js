let students = [
    { name: 'Mario', age: 24 },
    { name: 'Carlos', age: 20 },
    { name: 'Armenta', age: 25 }
]

//js - funciones anonimas
students.map(function(element) {
    console.log('student', element.name)
})

//es6 - flechas
students.map(element => console.log('student es6', element.name) )

const listNames = (name, age) => {
    console.log(`name: ${name} | age: ${age}`)
}
listNames('un nombre', 'un app')

let num = 9
const square = n => num * num
console.log(`${num} ^ 2 = ${square(num)}`)
console.log(square, typeof square)
