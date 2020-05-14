const helloPromise = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => resolve('OK'), 3000)
            : reject(new Error('ups!'))
    })
}


helloPromise()
    .then(response => console.log('response: ', response))
    .catch(error => console.log('error:', error))
    .finally(() => console.log('promesa terminada'))

// finally is not used in node 8 y 9