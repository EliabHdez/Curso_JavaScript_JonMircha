// 13.- Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero) => {
    if(numero === undefined) return console.warn('No ingresaste ningun numero')
    
    if(numero === numero.toString()) return console.error('El numero ingresado no puede ser de tipo cadena de texto')

    // if(typeof numero !== "number") return console.error('El valor ingresado no es un numero')

        // Con el if typeof y el if numero.toString le estamos diciendo casi lo mismo. La diferencia es que typeof le dice que mientras el valor no sea del tipo numero numero arroje el error, mientras que el toString le dice que si el valor es de tipo string arroje el error, pero en ambos casos el objetivo es que arroje un error si el valor no es un numero

    return (numero % 2 === 0)
    ? console.info(`El numero ${numero} es un numero par`)
    : console.info(`El numero ${numero} No es un numero par`)
}

parImpar()
parImpar('')
parImpar(0)
parImpar(-5)
parImpar(2)
parImpar(3)
parImpar(5)
parImpar(10)
parImpar(2021)
parImpar(1080)
parImpar('23')