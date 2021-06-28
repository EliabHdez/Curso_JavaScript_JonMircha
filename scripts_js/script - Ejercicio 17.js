// 17.- Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 	pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const anios = (fecha) => {
    if(fecha === undefined) return console.warn('No ingresaste ninguna fecha')

    if(!(fecha instanceof Date)) return console.error('El valor de fecha no es valido')

    let difFecha = new Date().getTime() - fecha.getTime()
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365
    let aniosHumanos = Math.floor(difFecha / aniosEnMS)

    return (Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde el año ${fecha.getFullYear()}`)
            : console.info(`${fecha.getFullYear()} es el año en curso`)
}

anios()
anios({})
anios('hola')
anios(new Date())
anios(new Date(1890,8,25))
anios(new Date(1990,8,25))
anios(new Date(2090,8,25))