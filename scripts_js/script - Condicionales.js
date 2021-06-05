// Estructura de control --> Mecanismo que permite controlar el flujo de la programación

// Estructuras condicionales

// if - else

// Operador ternario: Es la simplificación de un if - else en una linea de codigo

let edad = 17

if (edad > 17) {
    console.log(`Eres mayor de edad`);
} else {
    console.log(`Eres menor de edad`);
}

if (edad >= 18) {
    console.log(`Eres mayor de edad`);
} else {
    console.log(`Eres menor de edad`);
}

// if - else anidados 
    /* Esto quiere decir un if dentro de otro if y estos se ocupan cuando se van a tener mas de dos opciones o casos a evaluar, por ejemplo para dar los buenos dias, tardes o noches dependiendo de la hora del dia 
        - No estoy disponible, déjame dormir --> 0hrs - 6hrs
        - Buenos dias --> 6.01hrs - 11.59hrs    
        - Buenos tardes --> 12hrs - 18hrs    
        - Buenos noches --> 18.01hrs - 23.59hrs    
    */

let hora = 20

if(hora >= 6.01 && hora <= 11.59){
    console.log('Buenos días');
}else if(hora >= 12 && hora <= 18){
    console.log('Buenas tardes');
}else if(hora >= 18.01 && hora <= 23.59){
    console.log('Buenas noches');
}else{
    console.log('Dejame dormir');
}

if(hora > 6 && hora < 12){
    console.log('Buenos días');
}else if(hora > 11.59 && hora < 18.01){
    console.log('Buenas tardes');
}else if(hora > 18 && hora < 24){ // hora < 24 se puede eliminar, esta de mas de cierto modo
    console.log('Buenas noches');
}else{
    console.log('Dejame dormir');
}

if(hora === 6.01 && hora === 11.59){
    console.log('Buenos días');
}else if(hora === 12 && hora === 18){
    console.log('Buenas tardes');
}else if(hora === 18.01 && hora === 23.59){
    console.log('Buenas noches');
}else{
    console.log('Dejame dormir');
}

// En los tres casos anteriores utilizamos diferentes operadores relacionales, lo cual provoca que el resultado arrojado en cada uno de los if cambie o tengamos que cambiar la logica en el codigo, ya que con >=, <= estamos incluyendo al numero, es decir lo tomamos en cuenta y damos un rango entre ambos numeros o valores de horas, con el <, > no estamos incluyendo el numero que se declara, por lo tanto necesitamos hacer ajustes para que el saludo cuadre dependiendo de la hora y por ultimo con los iguales le estamos diciendo que solo si la hora es exactamente igual al valor nos arroje el saludo, por lo tanto no tenemos ningun rango de numeros entre estos y aunque pongamos una hora intermedia entre estos rangos nos arrojara el mensaje de dejame dormir ya que para arrojar el saludo adecuado necesita tener si o si la hora exacta que se les declaro en los if

// OPERADOR TERNARIO [ (condición) ? verdadero : falso ]. Solo se puede ejecutar una línea de codigo

let edad1 = 29

/* let eresMayor = (edad > 18) ? 'Eres mayor de edad' : 'Eres menor de edad' 
    Puede quedar declarado en una sola linea o bien podemos dar saltos de linea para una mejor visualizacion y hacer mas entendible el código */

let eresMayor = (edad1 >= 18) 
    ? 'Eres mayor de edad' 
    : 'Eres menor de edad'

console.log(eresMayor);

// SWITCH - CASE --> La estructura switch - case nos va a servir para evaluar cuando tengamos diferentes valores para una misma variable. Es como el condicional if, podriamos decir que es otro tipo de condicional, sin embargo se le conoce como estructura. Y nos permite elegir un camino de varios preestablecidos

    /* 
    domingo - 0 
    lunes - 1
    martes - 2
    miercoles - 3
    jueves - 4
    viernes - 5
    sabado - 6
    */

let dia = 8

 switch (dia) {
     case 0:
         console.log('El día de hoy es Domingo');
         break;
     case 1:
         console.log('El día de hoy es Lunes');
         break;
     case 2:
         console.log('El día de hoy es Martes');
         break;
     case 3:
         console.log('El día de hoy es Miércoles');
         break;
     case 4:
         console.log('El día de hoy es Jueves');
         break;
     case 5:
         console.log('El día de hoy es Viernes');
         break;
     case 6:
         console.log('El día de hoy es Sábado');
         break;
     default:
         console.log('El día no existe. Verifiquelo por favor');
         break;
 }