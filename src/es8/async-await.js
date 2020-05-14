const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true    
            ? setTimeout(() => resolve('OK'), 3000)
            : reject('ERROR')
    })
}

const helloAsync = async() => {
    const hello = await helloWorld()
    console.log(hello)
}
helloAsync()


const anotherFunction = async() => {
    try{
        const hello = await helloWorld()
        console.log(hello)
    } catch(error) {
        console.log(error)
    }
}
anotherFunction()