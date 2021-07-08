// 22.- Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const numAltoBajo = (arr) => {
    if(arr === undefined) return console.warn('No ingresaste ningun Array')

    if(!(arr instanceof Array)) return console.error('El dato ingresado debe ser un Array')

    if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

    for(let num of arr){
        if(typeof num !== 'number') return console.error(`El dato ${num} ingresado NO es un número`)
    }

    // El ordenamiento de un array por medio del metodo sort esta basado en el valor UNICODE de los caracteres, por lo tanto no siempre sera de forma ordena como nosotros lo conocemos, para esto necesitamos agregar ciertos parametros para tener el orden como comunmente lo conocemos. Para hacer un orden en especifico vamos a hacer uso de una funcion dentro del metodo sort y ademas debemos pasar ciertos argumentos, parametros o codigo dentro de esta funcion el cual nos ayudara con el orden en especifico que necesitemos, en este caso fue la operacion a - b, la cual genera un orden de forma ascedente, esta operacion solo. Para informacion mas clara y detallada por que a lo mejor no me supe explicar aqui, hay que ir a MDN para ver mas acerca del metodo sort

    arr.sort((a,b) => a - b) // El a - b ordena los numeros de forma ascendente

    /* Otra manera de hacerlo seria. Donde abrimos llaves en la funcion y agregamos el return

        arr.sort(a, b) => {
            return a - b
        } */

    // Y abajo del todo el ejercicio podemos ver las formas que podemos ocupar para generar la funcion que ira en el metodo sort

    console.log(`Numero mas bajo: ${arr[0]} / Numero mas alto ${arr[arr.length-1]}`)
}

numAltoBajo()
numAltoBajo('')
numAltoBajo({})
numAltoBajo([])
numAltoBajo([1,2,'3',4])
numAltoBajo([1,2,'Jelouda',4])
numAltoBajo([1,5,10,50,100])
numAltoBajo([10,25,-80,50,99])
numAltoBajo([199,150,100,75,50,25,0,-25,-50,-75,-100])
numAltoBajo([200,-150,100,-75,50,-25,0,25,-50,75,-100])

/* Tenemos varias formas de declara la funcion que nos servira con el metodo sort 
    
    Podemos declarar la funcion en una variable y despues esa variable ocuparla en el sort
        let arr = [1,2,3]
        function comparar (a, b) {return a - b}
        arr.sort(comparar)
        
    Podemos usar una funcion anonima normal
        let arr = [1,2,3]
        arr.sort(function(a,b){return a - b})
        
    Podemos utilizar una funcion de flecha
        let arr = [1,2,3]
        arr.sort((a,b) => a-b)
            En la funcion de flecha podemos o no abrir o utilizar llaves si no abra mas de una linea de codigo como en este ejemplo*/

const arrayMinMax = (arr) => {
	if(arr === undefined) return console.warn('No ingresaste ningun Array')

	if(!(arr instanceof Array)) return console.error('El dato que ingresaste NO es un Array')

	if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

	for(let num of arr){
		if(typeof num !== 'number') return console.error(`El valor ${num} NO es un numero`)
	}

	return console.log(`Array original ${arr}\nValor mas alto: ${Math.max(...arr)}\nValor mas bajo: ${Math.min(...arr)}`)
}

arrayMinMax()
arrayMinMax('')
arrayMinMax(123)
arrayMinMax([])
arrayMinMax([1,2,true])
arrayMinMax([10,15,25,-99])