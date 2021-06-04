// Operadores

    // Aritméticos, Relacionales, De Asignación, Incremento y Decremento(Unario) y Lógicos

// Los lenguajes de progrmación respetan las leyes de los signos. Las cuales son que si hay una operación con suma, resta, multiplicación y division en la misma operación se realizara primero la división, después la multiplicación, seguida de la suma y por último la resta. Si hay parentesis de por medio, primero resolvera las operaciones que se encuentran dentro de los parentesis y continuara con las siguientes operaciones deacuerdo a las leyes de los signos antes mencionadas

/* ARITMÉTICOS
    - suma --> +
    - resta --> -
    - multiplicación --> *
    - división --> /
    - modulo --> % (El modulo devuelve el residuo de una división)
    - agrupación --> ()
*/

console.log('---aritméticos---');

let a = 5 + 10 - 5 * 3 /* Aqui podemos ver aplicada la ley de los signos, donde primero se esta realizando la multipliación, despues la suma y por último la resta (10*3=30) (5+5=10) (10-30=-20) o puesto de otra forma: 
    5 + 5 - 10 * 3
    5 + 5 - 30
    10 - 30 = -20 */

let a1 = 5 + (10 - 5) * 3
console.log(a);
console.log(a1);

let b = 5
let c = 5
console.log(b * c);

let modulo = 5 % 2
console.log(modulo);

let division = 10/3
console.log(division);

/* RELACIONALES
    < --> menor que
    > --> mayor que
    <= --> menor o igual que
    >= --> mayor o igual que
    == --> igual igual a/que
    === --> igual igual igual a/que
    != --> diferente a/que
    !== --> super diferente a/que
*/

console.log('---Relacionales---');

console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(5 < 5);
console.log(5 <= 5);
console.log(5 >= 5);

/* 
    = --> 1 igual es para asignación de valores a las variables ej. let a "=" 5
    == --> 2 iguales es comparación de valores
    === --> 3 iguales es comparación de tipo de dato y de valor
*/

console.log('*********1 igual********');
console.log(z = 50);
console.log(x = 'meraxes'); // Asigna el valor dado a la letra que se le asigno, es por eso que solo nos da en consola como resultado el valor de la letra y no la letra como tal

console.log('*********2 iguales********');
console.log(7 == 7);
console.log("7" == 7); // Esto es igual porque aunque uno sea un string no deja de ser el numero 7 y valer 7
console.log(0 == false); // Este true en consola es debido al truthy y al falsy donde 0 es equivalente a false, ver esto de truthy y falsy en MDN para mayor aclaración

// Actualmente utilizar doble igual se esta empezando a considerar como mala practica ya que evalua solo los valores pero no el tipo, por eso tanto en el 2do y el 3er console.log dio como resultado true, porque solo esta comparando el valor, que por ej "7" es igual a 7 es true ya que ambos valores son un numero 7, aunque el tipo de dato sea diferente y el primero sea un string mientras el segundo sea un numero

console.log('*********3 iguales********');
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

// Utilizar triple igual evaluara el valor mas aparte el tipo de dato, por lo tanto en los casos anteriores podemos ver que los 2 últimos console.log fueron false porque aunque el valor sea igual el tipo de dato ya no es igual o el mismo, en el 2do console.log aunque el 7 en ambos casos es 7 uno esta declara como string y el otro como numero por lo tanto el tipo de dato ya no es igual y por eso arroja false y el 3er console.log aunque para el falsy el 0 sea equivalente a 0 el tipo de dato ya no es igual ya que el 0 es un numero mientras que el false es un boolean, por lo tanto es false

// Practicar o utilizar el triple = es la forma en la que deberiamos comparar o utilizar en nuestro codigo cuando programemos

/* DE ASIGNACION */

console.log('---Incremento y decremento---');

let i = 1
let i1 = 1
let i1_1 = 1
let i2 = 1
let i2_2 = 1
let i3 = 1
let i3_3 = 1
let i4 = 1
let i4_4 = 1
i = i + 2
i1 = i1 + 2
i1_1 += 2
i2 = i2 - 2
i2_2 -= 2
i3 = i3 * 2
i3_3 *= 2
i4 = i4 / 2
i4_4 /= 2 // Esto es lo mismo que lo que tiene justo arriba, solo que simplificado. Esto lo hacemos colocando el operador que queremos utilizar seguido del igual (i += 2), es una forma abreviada y rapida en lugar de tener que poner la variable mas el igual mas la operacion a realizar (i = i + 2). Ambas son correctas y dan el mismo resultado, solo que para efectos practicos se utliza la segunda forma que es la simplificada
console.log(i);
console.log('---suma---');
console.log(i1);
console.log(i1_1);
console.log('---resta---');
console.log(i2);
console.log(i2_2);
console.log('---multi---');
console.log(i3);
console.log(i3_3);
console.log('---div---');
console.log(i4);
console.log(i4_4);

// INCREMENTO Y DECREMENTO (UNARIO - Tambien se le conoce con este nombre a estos tipos de operadores ya que su incremento o decremento es de uno en uno)
    /* 
        variable++
        variable--
        ++variable
        --variable
    */

console.log('---unario---');

let incdec = 50
incdec++
console.log(incdec);
incdec++
console.log(incdec);
incdec--
console.log(incdec);
++incdec
console.log(incdec);
--incdec
console.log(incdec);

// Aparentemente el ++ y el -- antes y despues de la variable hacen lo mismo, pero en realidad no es asi. Los signos despues de la variable hacen su funcion hasta despues de haberse ejecutado la linea de codigo donde fueron declarados y su resultado se ve reflejado hasta la siguiente linea de codigo, mientras que los signos aplicados antes de la variable hacen su funcion de forma inmediata y su resultado se ve reflejado en esa misma linea de codigo

let incdec2 = 100
console.log(incdec2++); // Aqui hicimos un incremento de la variable sin embargo al estar los signos delante de la variable no veremos su resultado de forma inmediata, si no hasta despues
console.log(incdec2); // Aqui ya podremos observar el resultado del incremento en la variable declarado en la linea de codigo de arriba. Esto quiere decir que tuvimos que hacer 2 console.log para ver el resultado, digamos que uno fue para declar el incremento y el otro para verlo realizado
console.log(incdec2++); // Aqui podemos ver otro incremento sin embargo no vemos reflejado su resultado en la consola debido a lo mencionado con anterioridad, este se veria reflejado hasta la siguiente linea de codigo sea cual sea como por ej un console.log

let incdec3 = 200
console.log(++incdec3); // Aqui de igual manera hicimos un incremento en la variable sin embargo al tener los signos por antes de la variable veremos que su efecto asi como su resultado son de forma inmediata y aplicados en la misma linea de codigo, por lo tanto solo fue necesario un console.log tanto para declarar el incremento como para ver su resultado, ambas acciones se ejecutan en la misma linea de codigo de forma simultanea e inmediata
console.log(++incdec3); // Aqui podremos ver otro incremento de forma inmediata
console.log(--incdec3); // Aqui vemos el decremento de forma inmediata

// LO MAS RECOMENDABLE ES OCUPAR EL INCREMENTO Y DECREMENTO DESPUES DE LA VARIABLE (VAR++/--) ESTO DEBIDO A QUE POR EL TIEMPO DE EJECUCION PODRIAMOS TENER CIERTAS DIFERENCIAS. ESTO AHORITA NO ME QUEDA MUY CLARO, DE ECHO ME PARECE QUE LO MEJOR SERIA QUE EL INCREMENTO O DECREMENTO SE GENERE DE FORMA INMEDIATA (++/--VAR) SIN EMBARGO ALGUNA RAZON DE PESO HABRA PARA QUE NO SEA ASI Y LO RECOMENDABLE SEA OCUPAR EL UNARIO DESPUES DE LA VARIABLE, CLARO ESTA QUE POR ALGO EL PROFE HACE ESTA RECOMENDACION DE UTILIZAR EL UNARIO DESPUES DEL NOMBRE DE LA VARIABLE

// En el siguiente ejemplo podemos ver de una forma talves mas clara el comportamiento de cada uno

let edad = 30
let edad2 = 30
let edad3 = 30
let edad4 = 30

if(edad === 30){
    edad++
    console.log(`El proximo año tendras ${edad} años`);
}

if(edad2 === 30){
    console.log(`El proximo año tendras ${edad2++} años`);
}

if(edad3 === 30){
    ++edad3
    console.log(`El proximo año tendras ${edad3} años`);
}

if(edad4 === 30){
    console.log(`El proximo año tendras ${++edad4} años`);
}

// LOGICOS

/* 
    ! - Not --> Niega, es decir lo que es verdadero lo vuelve falso y visceversa
    || - Or --> Cuando tengo una o mas condiciones, con que una se cumpla, es decir sea verdadera, el OR validara como true, si ninguna es verdadera validara como falso
    && - And --> Cuando tengo 2 o mas condiciones es necesario que todas las condiciones se cumplan como verdadero para que and valide como true, con que una no se cumpla validara como false
*/

console.log('---Logicos---');

console.log('---Not !---');
console.log(!true);
console.log(!false);

console.log('---Or ||---');
console.log((9 === 9) || ("9" === 9));
console.log(("9" === 9) || ("9" === 9));

console.log('---And &&---');
console.log((9 === 9) && ("9" === 9));
console.log((9 === 9) && ("9" === "9"));