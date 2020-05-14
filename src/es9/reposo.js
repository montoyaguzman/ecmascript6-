const obj = {
    name: 'José',
    app: 'Montoya',
    age: 23
}

let { age, ...all } = obj
console.log('objAll: ', all)


const obj2 = {
    name: 'José',
    app: 'Montoya',
}
const obj3 = {
    ...obj2,
    age: 23
}
console.log('obj3: ', obj3)