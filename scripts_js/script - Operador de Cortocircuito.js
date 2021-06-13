// Operadores de cortocircuito

/* 
Cortocircuito OR --> Cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

Cortocircuito AND --> Cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
*/

function saludar(nombre){
    nombre = nombre || 'Desconocido' // Esto es un operador de cortocircuito. Este quiere decir que si esta definido el valor de la variable (nombre) es el que tomara en cuenta, si no le asignara el valor 'Desconocido'. Esto es pasar valores por defecto, donde si está definido el valor de la variable es el que tomara si no tomara el valor por defecto (Desconocido en este caso)
    console.log(`Hola ${nombre}`);
}

function saludar1(nombre1 = 'Desconocido1'){
    console.log(`Hello ${nombre1}`);
}
    // Está es otra manera de poner o declarar valores por defecto. Ahora los valores por defecto se declaran de esta manera, de forma mas directa

saludar('Moises')
saludar()

saludar1('Eliab')
saludar1()

// A continuación veremos por medio del console.log como se comportan los cortocircuitos o la asignación de valores por defecto que se mencionan al comienzo de este archivo donde se menciona como trabaja el OR y el AND

// Valor de la izquierda es truthy
    // A continuacion vemos que todos los valores de la izquierda son truthys, esto de truthys son los valores que son verdaderos para js los cuales son casi todos, podemos ver mas informacion de esto en MDN
console.log('cadena' || 'Valor de la derecha');
console.log(10 || 'Valor de la derecha');
console.log(true || 'Valor de la derecha');
console.log([] || 'Valor de la derecha');
console.log({} || 'Valor de la derecha');

// Valor de l derecha es falsy
    // Vemos que nos esta mostrando en consola el valor de la izquierda por que al ser por medio del AND si el valor de la izquierda es un valor tipo falsy es el que tomara en cuenta y por defecto
console.log('' && 'Valor de la derecha');
console.log(0 && 'Valor de la derecha');
console.log(NaN && 'Valor de la derecha');
console.log(null && 'Valor de la derecha');
console.log(undefined && 'Valor de la derecha');
console.log(-0 && 'Valor de la derecha');

// A continuación veremos que pasa cuando el valor de la izquierda no cumple con el requisito para tomarlo en cuenta por defecto dependiendo si es OR o AND

// OR
console.log(null || 'Valor de la derecha');
console.log('' || 'Valor de la derecha');

// AND
console.log('string' && 'Valor de la derecha');
console.log(20 && 'Valor de la derecha');