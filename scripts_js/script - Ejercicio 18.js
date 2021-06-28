// 18.- Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const vocCons = (text) => {
    if(!text) return console.warn('No ingresaste ningun texto')
    
    if(typeof text !== 'string') return console.error('El tipo de dato ingresado no es valido')

    let vocales = 0
    let consonantes = 0
    let signos = 0

    text = text.toLowerCase()

    for(let letra of text){
        if(/[aeiouáéíóú]/.test(letra)){
            vocales++
        }
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
            consonantes++
        }
        if(/[,.;:/?!-]/.test(letra)){
            signos++
        }
    }
    return console.info({
        text,
        vocales,
        consonantes,
        signos
    })
}

vocCons()
vocCons(10)
vocCons('3')
vocCons('hola mundo')
vocCons('ÑOÑO')
vocCons('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum! quia adipisci ipsa non at ipsum facere, repellendus repudiandae iste laudantium veritatis placeat aperiam sequi, temporibus voluptatibus perferendis illo voluptates nostrum?.')