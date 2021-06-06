// BUCLES --> Tambien conocidos como ciclos o loops

/* WHILE Y DO WHILE --> Cada vez se utilizan menos 

Diferencias

    While --> Siempre va a comparar o evaluar primero la condición y despues se va a ejecutar el código

    Do while --> Va a ejecutar el código que se encuentra dentro del do al menos la primera vez y despues va a evaluar la condición

For, For in y For of

    // For in permite recorrer cada una de las propiedades de un objeto primitivo

    // For of permite recorrer cada uno de los elementos de cualquier objeto que sea iterable
*/

// WHILE

let contador = 0
let cont = 0

while (contador < 10) {
    contador++
    console.log(contador);
}
    // En el caso de arriba el operador de incremento antes del console.log lo que hace es incrementar el valor de la variable y despues la imprime en consola, lo que provoca que el contador llegue hasta el 10 ya que al llegar a 9 la condición sigue cumpliendose y en ese caso se aplica nuevamente una iteracion, en este momento la variable llega a 10 y es donde la condición deja de cumplirse, aqui se vuelve a imprimir en consola pero con el valor 10 y al momento de ya no cumplirse la condicion detiene el incremento y queda en 10. En otras palabras evalua la condición antes de imprimir el resultado. Analizando el while le estamos diciendo que si contador es menor que 10 le aumente el valor a la variable en uno y acto seguido imprima el resultado, al momento de que llega a 9 vuelve a evaluar la condición y al seguirse cumpliendo porque 9 es menor que 10 le vuelve a incrementar el valor en 1 a la variable

console.log('***********');
while (cont < 10) {
    console.log(cont);
    cont++
}
    // En este segundo caso pasa lo contrario con el caso anterior, en este caso el valor se imprime primero el resultado y ya impreso incrementa el valor del cont lo que hace que el conteo llegue hasta 9 ya que en el momento que llega a 9 evalua una siguiente iteración y al momento en que esta ya no se cumple por consecuente ya no imprime el resltado siguiente. Analizando el while le estamos diciendo que si cont es menor que 10 imprima el resultado y acto seguido incremente el valor y si se sigue cumpliendo la condición continue haciendo este proceso, en el momento que evalua que 10 no es menor que 10, ya no imprime el resultado y ahi detiene el ciclo

console.log('*****do while******');

// DO WHILE

let contDoWhile = 0

while (contDoWhile < 10) {
    console.log(contDoWhile);
    contDoWhile++
}

do {
    console.log('Do while ' + contDoWhile);
    contDoWhile++
} while (contDoWhile < 10)
    // Aqui podemos ver que como la variable del while de arriba ya viene con el valor de 9, al entrar al do ya no se cumple la condición pero aun asi lo imprime una vez, con esto confirmamos lo descrito al inicio de este archivo. En el caso de abajo lo veeremos mas claro

console.log('*****2do ejemplo do while******');

let contDoWhile2 = 0

do {
    console.log('Do while ' + contDoWhile2);
    contDoWhile2++
} while (contDoWhile2 < 10)

do {
    contDoWhile2++
    console.log('Do while ' + contDoWhile2);
} while (contDoWhile2 < 10)
    // En este caso veemos lo mencionado antes mas claro, donde en el primer do while la variable llega hasta el punto de valer 10, en este momento ya no se cumple la condición del primer do while sale de este y al momento de entrar en el segundo do while ejecuta el codigo dentro de do, es decir aumenta en valor de la variable, aunque este pase el numero 10 puesto como limite en la condición, despues imprime el resultado y por último evalua la condición, el ver que esta ya no se cumple pues se detiene el ciclo, pero por lo mientras el codigo ya se ejecuto una vez, la primera vez que entro al segundo do while provocando que el valor de variable se fuera hasta 11 y si viendolo de cierta manera valiendole la condición, pero esto es debido a que en este tipo de bucle, primero se ejecuta el código y despues evalua la condición, lo que provoca esto precisamente

// FOR

/* for (inicializacion de la variable; condicion; incremento o decremento) {
    codigo a ejecutar
    codigo a ejecutar
    codigo a ejecutar
} */

for(let i = 0; i < 10; ++i){
    console.log(i);
}

let numbers = [10,20,30,40,50,60,70,80,90, 100]
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// FOR IN --> El bucle for in, es un bucle digamos que diseñado para recorrer objetos, solo objetos como tal (const moy = {}). En este tenemos que declarar la variable que sea la que recorra los elementos del objeto y la variable o constante del objeto a recorrer

const moy = {
    name: 'Moises',
    apellido: 'Hernández',
    edad : 30,
    dragon: 'meraxes'
}

for (const elementos in moy) {
    console.log(elementos);
}
for (const elementos in moy) {
    console.log(`${elementos} --> ${moy[elementos]}`);
}
// Es importante saber que dentro de un bucle for in el punto (.) ya no sera valido para ingresar al valor de los elementos/atributos del objeto, por lo tanto haremos uso de los corchetes donde pondremos primero la variable del objeto y dentro la variable de for in

console.log(Object.keys(moy));
console.log(Object.values(moy));
console.log(moy.dragon);

// FOR OF --> El bucle for of, es un bucle el cual nos permitira recorrer cualquier objeto (recordar que en js basicamente todo es un objeto) sea cual sea, objeto, array etc mientras este sea iterable. En este tenemos que declarar la variable que sea la que recorra los elementos del objeto y la variable o constante del objeto a recorrer

let numeros = [10,20,30,40,50]

for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = 'Hola Mundo'
for (const letra of cadena) {
    console.log(letra);
}