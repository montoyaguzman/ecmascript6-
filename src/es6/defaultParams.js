// JS
function newFn(name, age, country) {
    var name = name || 'josé'
    var age = age || 26
    var country = country || 'MX'
    console.log(name, age, country)
}
newFn()
newFn('Tan', 25, 'ES')

// ES6
function newFnEs6(name='josé', age=26, country='MX') {
    console.log(name, age, country)
}
newFnEs6()
newFnEs6('Tan', 25, 'ES')