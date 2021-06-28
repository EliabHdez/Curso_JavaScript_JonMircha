// 12.- Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primo = (numero = undefined) => {
    if(numero === undefined) return console.warn('No ingresaste ningun número')

    if(numero === 0) return console.error('El numero no puede ser 0')

    if(numero === 1) return console.warn('El numero 1 no se considera primo ni compuesto')

    if(typeof numero !== 'number') return console.error('El valor ingresado no es un número')

    if(numero < 0) return console.error('El numero no puede ser negativo')

    let divisible = false

    for(let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = true
            break
        }
    }
    return (divisible)
    ? console.log(`El numero ${numero} NO es primo`)
    : console.log(`El numero ${numero} SI es primo`)
}

primo()
primo('')
primo(1)
primo(0)
primo(-3)
primo(2)
primo(3)
primo(4)
primo(5)
primo(6)
primo(7)
primo(8)
primo(9)
primo(10)
primo(11)
primo(200)