// Una funcion asincrona se declara por medio de async y puede ser una funcion declarada o una funcion expresada (let / const = arrow function)

// Estas funciones asincronas trabajan de la mano con las promesas

// El await sirve para decirle a la funcion asincrona que se detenga en la ejecucion de su codigo hasta que cierto codigo este resuelto, en cuanto este resuelto pase a ejecutar la sig linea de codigo

numAlCuadrado = (value) => {
    if(typeof value !== 'number') return Promise.reject(`El valor "${value}" ingresado no es un número`)
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random())
    })
}

async function funcionAsincronadaDeclarada() {
    try {
        console.log('Inicio Async')
        
        let obj = await numAlCuadrado(0)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(1)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(2)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(3)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(4)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado('5')
        console.log(`Async Function: ${obj.value}, ${obj.result}`)

        console.log('Fin Async Function')
    } catch (err) {
        console.error(err)
    }
}

// Si no utilizamos el await la consola nos arroja los resultados como undefined, esto debido a que lanza el console.log pero el proceso del setTimeout de la promesa aun no termina, es por eso que no nos da valores ni resultados, con el await lo que le decimos es que detenga la ejecucion del codigo hasta que esa linea de codigo este resuelta, una vez resuelta ahora si que siga ejecutando el codígo. Dicho en palabras del profe el await lo que hace es que le dice a javascript dentro de una funcion asincrona "vas a esperar el resultado de esta ejecucion antes de pasar a la siguiente linea y ejecutarla". Entonces para el ejemplo anterior lo que pasa es que dentro de la funcion asincrona le estamos diciento que espere a que se ejecute y termine la ejecucion de la funcion numAlCuadrado antes de ejecutar el console.log

funcionAsincronadaDeclarada()

const funcionExpresada = async () => {
    try {
        console.log('Inicio Async')
        
        let obj = await numAlCuadrado(6)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(7)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(8)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(9)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        obj = await numAlCuadrado(10)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        
        console.log('Fin Async Function')
    } catch (err) {
        console.error(err)
    }
}

funcionExpresada()