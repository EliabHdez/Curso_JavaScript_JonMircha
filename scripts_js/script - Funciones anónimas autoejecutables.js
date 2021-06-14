// Función Anónima Autoejecutable

// MUY IMPORTANTE, en las funciones anonimas si tenemos que hacer uso del punto y coma (;) al final de cada una de estas, de lo contrario estariamos obteniendo on error

// alert('Hola') --> alert es una funcion que nos permite arrojar un pantalla con un mensaje en el navegador, Este alert lo pongo para ver la similitud con las funciones anonimas. La funcion alert tiene el nombre que es alert y los parentesis que nos indica que es una funcion y dentro de estos parentesis va lo que se va a ejecutar, pues dicho esto las funciones anonimas se declaran de la misma manera, pero estas no tienen un nombre

// La parte de function(){} viene siendo como el alert y los parentesis despues de esta son los parentesis despues del alert, pero esta al ser una funcion anonima hay que encapsularla en parentesis

(function(){
    console.log('Mi primer IIFE');
})();

(function(){
    console.log('Mi segunda IIFE');
})();

(function(d,w,c){
    console.log(d);
    console.log(w);
    c.log('Esto es un console con la funcion anonima')
})(document, window, console);
    // Con esto podemos hacer que si vamos a hacer uso varias veces de estos elementos los pongamos en una funcion anonima y no sea nceseario tener que esta poniendo todo el nombre, basta con el valor de la variable que le pongamos para poderlo ejecutar como lo hemos visto con el c.log que sin problemas hace lo mismo que el console.log, pero solo utilizando la variable c que le asignamos al console

// Tenemos diferentes formas de declarar funciones anonimas autoejecutables

// Clasica
(function (){
    console.log('VERSION CLASICA');
})();

// La Crockford --> Encerrar toda la funcion por completo entre parentesis, incluyendo lo parentesis finales
((function (){
    console.log('VERSION CROCKFORD');
})());

// Unaria --> Esta no encierra la funcion en un parentesis, basta con ponerle un signo de suma al inicio para que sea interpretada como funcion anonima
+function(){
    console.log('VERSION UNARIA');
}()

// Facebook --> Facebook tambien hizo su version de las funciones anonimas donde al igual que la unaria la funcion no se encierra entre parentesis, si no que al inicio de esta lleva un signo de exclamacion y con eso es interpretada como funcion anonima
!function(){
    console.log('VERSION FACEBOOK');
}()

// Todas funcionan de la misma manera y hacen lo mismo, el uso de una u otra ya es mas por costumbre, adaptacion etc