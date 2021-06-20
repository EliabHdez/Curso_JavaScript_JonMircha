// 10.- Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido 	que en otro)

const numCapicua = (num = '') => {
    num = num.toString()
    if(!num){
        console.warn('No ingresaste un numero')
    }else{
        if(num === num.split('').reverse().join('')){
            console.info(`El número ${num} SI es un número capicuo`)
        }else{
            console.info(`El número ${num} NO es un numero capicuo`)
        }
    }
}

const numCap = (numero) => {
    (!numero)
        ? console.warn('No ingresaste un numero')
        : (numero.length === 1)
            ? console.error('Un numero menor a 10 no es valido')
            : (numero === numero.split('').reverse().join(''))
                ? console.info(`El número ${numero} SI es un número capicuo`)
                : console.info(`El número ${numero} NO es un numero capicuo`)
}

numCapicua('')
numCapicua('300')
numCapicua(1001)
numCap('')
numCap('0')
numCap('2002')