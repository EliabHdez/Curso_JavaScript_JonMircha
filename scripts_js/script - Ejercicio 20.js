// 20.- Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const email = (email) => {
    if(!email) return console.warn('No ingresaste ningun email')

    if(typeof email !== 'string') return console.error(`El valor ${email} ingresado no es valido`)

    let expReg = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$/g.test(email)
    // /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
        // Expresion regular utilizada por el profe Jon Mircha

    return (expReg)
        ? console.info(`${email} es un correo válido`)
        : console.info(`El email ${email} NO es válido`)
}

email()
email('')
email(4323)
email('238948')
email('238948@')
email('238948@gmail.')
email('238948@.outlook')
email('238948@.com')
email('238734@gmail.com')
email('eliab.hdez@icloud.com')
email('moises_hl_zod@hotmail.com')

// Fusion ejercicios 19 - 20

const nameEmail = (name_email, expReg) => {
    if(!name_email) return console.warn('No ingresaste ningun nombre')

    if(typeof name_email !== 'string') return console.error(`El nombre ${name_email} no es válido`)

    if(expReg === undefined) return console.warn('No ingresaste el patron a evaluar')
    
    if(!(expReg instanceof RegExp)) return console.error(`El valor ${expReg} no es una expresion regular`)

    let expReg1 = expReg.test(name_email)

    return (expReg1)
        ? console.info(`El valor ${name_email} coincide con el patron`)
        : console.warn(`El valor ${name_email} NO coincide con el patron`)
}

nameEmail('')
nameEmail(25)
nameEmail('Moises Hernandez')
nameEmail('Moises Hernandez', 'hola')
nameEmail('Moises Hernandez', /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g)
nameEmail('moises_hl_zod@hotmail', /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$/g)
nameEmail('moises_hl_zod@hotmail.com', new RegExp(/^[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$/g))