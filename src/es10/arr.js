let arr = [1,2,3, [1,2,3, [1,2,3]]]

console.log(arr.flat())
console.log(arr.flat(2))

let arr2 = [1, 2, 3]
console.log(arr2.flatMap(value => [value, value *2]))

