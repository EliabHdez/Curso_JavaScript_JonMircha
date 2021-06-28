// 14.- Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const grados = (numero, unidad) => {
    if(numero === undefined) return console.warn('No ingresaste los grados a convertir')

    if(typeof numero !== 'number') return console.error('El valor ingresado no es valido. Por favor ingresa un numero')

    // if(numero === numero.toString()) return console.error('El valor ingresado no puede ser una cadena de texto')

    if(unidad === undefined) return console.warn('No ingresaste la unidad de temperatura')

    if(typeof unidad !== 'string') return console.error('El valor ingresado no es valido. Por favor ingresa la letra que represente la unidad de temperatura (C o F)')

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.error('Valor de unidad no reconocido. Ingresa la letra C para Celsius u F para Fahrenheit')

    let celsius = (numero * (9/5)) + 32
    let fahr = Math.round((numero-32) * (5/9))

    if(unidad === 'C'){
        console.info(`${numero}°C = ${celsius}°F`)
    }else{
        console.info(`${numero}°F = ${fahr}°C`)
    }
}

grados()
grados('2')
grados(2)
grados(2, true)
grados(2, 'Hola')
grados(2, 'E')
grados(2, 'C')
grados(1, 'C')
grados(0, 'C')
grados(32, 'F')
grados(33.8, 'F')
grados(35.6, 'F')