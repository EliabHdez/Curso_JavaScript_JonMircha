// Las propiedades dinamicas son propias de los objetos

let aleatorio = Math.round(Math.random() * 100 + 5)

/* 
    Para poder reutilizar una operacion es necesario guardarla en una funcion, ya que si solo esta en una variable esta variable almacena el valor arrojado de dicha operacion pero no vuelve a ejecutar la operacion para estarla utilizando en un bucle, si no que solo ocupa el valor que dio en el momento de realizar dicha operacion por primera vez

    Esto fue lo que me respondieron al respecto en discord

        "La operación se ejecuta y da como resultado un valor, y ese valor es el que se guarda en la variable, al tu querer usar la variable en el bucle solo estas concatenando el valor que te había dado la operación anteriormente, no volviendo a ejecutar la operación."

    Es por eso que si yo genero mas propiedades con la variable aleatorio solo me arrojara un solo resultado, lo mismo pasa cuando ocupo la variable en el template string donde me arroja el ultimo elemento del array (Sandra) con el valor generado del math almacenado en la variable, un unico valor

    Si quiero reutilizar esta operacion ya sea en el objeto o en el template string del forEach tengo que almacenarla en una funcion, como se ve a continuacion

        const aleatorio = () => Math.round(Math.random() * 100 + 5) */

const objUsuarios = {
    propiedad: 'Valor', // Esta es una propiedad del objeto comun y corriente
    [`id_${aleatorio}`]: 'Valor aleatorio', // Esta es una propiedad dinamica

    // [`id_${aleatorio}`]: 'Valor aleatorio2',
}

console.log(objUsuarios)

const usuarios = ['Moises', 'Eliab', 'Susett', 'Sandra']

usuarios.forEach((usuario) => objUsuarios[`id_${Math.round(Math.random() * 100 + 5)}`] = usuario)
console.log(objUsuarios)