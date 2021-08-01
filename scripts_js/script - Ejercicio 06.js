// 6.- Programa una función para contar el número de veces que se repite una palabra en un texto largo


let x = 0
let cont = 0

const repWord = (texto = '', word = '') => {
    if(!texto) return console.warn('No ingresaste un texto')

    if(!word) return console.warn('No ingresaste la palabra a buscar')

    while (x !== -1){
        x = texto.toLowerCase().indexOf(word, x)
        if(x !== -1){
            x++
            cont++
        }
    }
    return console.info(`La palabra ${word}, se repite ${cont} veces`)
}

repWord()
repWord('', 'moto')
repWord('Tengo una moto, con esa moto hice uno de los mejores viajes de mi vida. AMO MI MOTO')
repWord('Tengo una moto, con esa moto hice uno de los mejores viajes de mi vida. AMO MI MOTO', 'moto')