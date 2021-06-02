/* Numbers */

let a = 1
let b = new Number(2)
let c = 7.19
let d = '5.6' // El valor de esta variable aun siendo números no es un valor númerico, es un string y esto es debido a que se encuentra entre comillas

console.log(a,b);
console.log(c);
console.log(c.toFixed(1)); // El metodo toFixed nos sirve para decidir cuantos numeros decimales queremos que tenga
console.log(c.toFixed(5));
console.log(parseInt(c)); // El método parseInt sirve para sacar solo el valor entero. Este tambien nos sirve para sacar/convertir el valor entero numerico de una string que este echa de números, sin embargo solo toma la parte entera
console.log(parseFloat(c)); // El método parseFloat sirve para sacar el valor con decimales. Este tambien nos sirve para sacar/convertir el valor numerico de una string que este echa de números, y a diferencia del parseInt el parseFloat si toma en cuanto los decimales
console.log(typeof c); // El typeof nos sirve para saber que tipo de dato es
console.log(typeof d); // Si vemos en consola podremos observar que nos dice que la c es de tipo number mientras que la d es de tipo string
console.log(a + b);
console.log(c + d); // Que esta pasando aqui. Bueno lo que esta pasando es que el valor de "d" no es un numero si no una string y al ser una string el operador "+" no esta sumando los valores si no que los esta concatenando, los esta juntando
console.log(c + parseInt(d)); // Aqui podemos observar que el parseInt nos sirvio para convertir un valor numerico que era una cadena en un valor de numero como tal y asi poder sacar la suma de la variable c + la variable d, sin embargo hay un inconveniente con parseInt al ocuparlo de esta manera y esto es que solo suma la parte entera, por lo tanto vemos como resultado en consola 12.19000000001, porque solo sumo 7.19 + 5
console.log(c + parseFloat(d)); // Como podemos ver aqui el resultado ya es el correcto ya que con el parseFloat esta tomando en cuanta tambien la parte decimal del valor de la variable d, por lo tanto la suma da el resultado correcto que es 12.79

// El método parseint y parseFloat se cuelgan o estan directamente relacionados con el objeto constructor Number, por lo tanto se pone de forma directa y entre parentesis la variable, esto no quedo del todo muy claro en esto momentos, pero segun esto lo veremos mas adelante en el curso. Sin embargo se puede declara el objeto constructor o no

console.log(c + Number.parseFloat(d));