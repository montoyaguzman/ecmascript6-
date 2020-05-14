let student = {
    name: 'josé',
    age: 26,
    country: 'MX'
}

// js
console.log(student.name, student.age, student.country)
es6
let { name, age, country } = student
console.log(name, age, country)


let employee = {
    fullName: 'josé montoya',
    deparment: 'front end',
    certification: ['java', 'js']
}
let des1 = { ...employee, fullName:'Mario', certification: ['webpack'] }
const { certification, ...des2 } = employee

console.log('des1: ', des1)
console.log('des2: ', des2)