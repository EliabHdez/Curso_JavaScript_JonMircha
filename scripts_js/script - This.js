console.log(this)
console.log(window)
console.log(this === window)

this.nombre = 'Contexto Global'
console.log(this.nombre)

function imprimir() {
    console.log(this.nombre)
}

imprimir()

const obj = {
    nombre: 'Contexto Objeto 1',
    imprimir: function () {
        console.log(this.nombre)
    }
}

obj.imprimir()

const obj2 = {
    nombre: 'Contexto Objeto 2',
    imprimir /* Aqui estamos haciendo uso de los shorthands de los objetos, los cuales sirven para que si la propiedad tiene el mismo nombre que la variable que guarda el valor no es necesario poner ambos, si no que lo podemos simplificar a solo un dato. Vaya el "imprimir" solo, es lo mismo que: 
        imprimir: imprimir
    Y con esto estamos llamando a la funcion que declaramos al inicio en la linea 8*/
}

obj2.imprimir()

const obj3 = {
    nombre: 'Contexto Objeto 3',
    imprimir: () => {
        console.log(this.nombre)
    }
}

obj3.imprimir() /* Por que en esta ocacion el resultado de esta funcion del obj3 es el contexto global??? Esto es debido a que estamos usando una arrow function y el problema de estas es que no tienen un scope propio como las funciones anonimas. Las arrow functions utilizan el scope general del elemento donde se encuentran y no el scope del elemento donde estan como tal. En otras palabras aqui esta ocupando el scope de la constante "obj3" que es el scope global y no el scope del objeto como tal, que seria el scope que se encuentra dentro del objeto */

function Persona(nombre) {
    this.nombre = nombre

    console.log(this.nombre)

    return function(){
        console.log(this.nombre)
    }
        // Con una function en el return hay que invocarla para ejecutarla, ya que de no hacerlo no estariamos viendo la impresion del console.log. Adicional a esto en la consola estamos viendo un contexto global. Abajo en la invocacion de la funcion se explica el porque de esto, pero para solucionarlo de forma facil lo podemos hacer con una arrow function debido a que esta no genera un contexto y scope propio si no que utiliza el scope de donde ha sido creada, es decir de su padre, con lo cual no estara buscando la propiedad nombre dentro de la arrow function como es el caso actual que busca esta propiedad dentro de la funcion anonima. Esto lo veremos mas abajo para no modificar este ejemplo
}

const moy = new Persona('Moises')

moy() // Aqui estamos invocando la funcion para ejecutar el codigo en ella. Y porque obtenemos "contexto global" en lugar del nombre "Moises"??? Esto se debe a que las funciones anonimas generan un contexto propio, pero al momento de que internamente en la funcion no encuentra ningun propiedad "nombre" dentro de este contexto propio, lo que hace es salir y regresarse y leer el "this" del contexto global

function Persona2(nombre) {
    this.nombre = nombre

    return () => console.log(this.nombre)
}

const eliab = new Persona2("Eliab")

eliab() // Aqui podemos ver el resultado explicado en la invocacion de la funcion moy() donde al momento de ya no declarar en el return una funcion anonima si no una arrow function el resultado en la consola ya no es el contexto global si no el nombre asignado a la propiedad nombre en la constante "eliab" ya que esta tomando el scope de la function Persona2 y no un contexto propio donde estaria buscando la propiedad nombre dentro de la funcion