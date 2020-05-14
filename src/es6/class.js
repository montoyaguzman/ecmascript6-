class Calculadora{
    constructor() {
        this.num1 = 0
        this.num2 = 0
    }
    sum(num1, num2) {
        this.num1 = num1
        this.num2 = num2
        return this.num1 + this.num2
    }
}

const calculadora = new Calculadora()
let num1 = 4
let num2 = 6
console.log(`${num1} + ${num2} = ${calculadora.sum(num1, num2)}`)