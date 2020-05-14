const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('OK')
        } else {
            reject('ups!')
        }
    })
}


helloPromise()
    .then( response => console.log('response: ', response))
    .then( response => console.log('hola desde el then'))
    .catch( error => console.log('error:', error))