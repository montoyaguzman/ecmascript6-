let str = "    Hola mundo"
let str2 = "Hola mundo         "

console.log(str)
console.log(str.trimStart())

console.log(`${str2} ${str}`)
console.log(`${str2.trimEnd()} ${str}`)