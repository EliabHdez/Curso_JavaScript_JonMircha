function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random() * 1000)
}

// Se puede declara la funcion para como una funcion normal o de forma mas directa con una arrow function. Ambas maneras son correctas. Tanto la de arriba de este texto como la de abajo de este texto

cuadradoCallback = (value, callback) => {
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random() * 1000)
}

cuadradoCallback(0, (value, result) => {
    console.log('Inicia Callback')
    console.log(`Callback: ${value}, ${result}`)
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`)
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`)
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`)
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`)
                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`)
                        console.log('Fin Callback')
                        console.log('CallbackHell!!! Se le conoce callback hell al efecto visual que se va generando en el codigo al meter una callback dentro de otra callback y este efecto provoca que el codigo parezca un mayor que (>)')
                        console.log('http://callbackhell.com/')
                    })
                })
            })
        })
    })
})