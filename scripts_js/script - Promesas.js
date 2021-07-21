cuadradoPromise = (value) => {
    if(typeof value !== 'number'){
        return Promise.reject(`ERROR. EL valor ${value} ingresado no es un número`)
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        },0)
    })
}

cuadradoPromise(0)
    .then((obj) => {
        // console.log(obj)
        console.log(obj)
        console.log('Inicio Promise')
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(1)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(2)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(3)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(4)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(5)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        console.log('Fin Promise')
    })
    .catch((err) => {
        console.error(err)
    })

cuadradoPromise1 = (value) => {
    if(typeof value !== 'number'){
        return Promise.reject(`ERROR. EL valor ${value} ingresado no es un número`)
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000)
    })
}

cuadradoPromise1(6)
    .then((obj) => {
        // console.log(obj)
        console.log(obj)
        console.log('Inicio Promise 1')
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise1(7)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise1(8)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise1(9)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise1(10)
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        console.log('Fin del Promise 1')
    })
    .catch((err) => {
        console.error(err)
    })