// Este es un objeto estático por lo tanto cada vez que lo queramos utilizar tenemos que incovar al objeto

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-5.5));
    // Proporciona el numero absoluto, no importa si es positivo o negativo, nos dara el numero absoluto el cual viene siendo el numero como tal
console.log(Math.ceil(5.8));
console.log(Math.ceil(5.2));
    // Redonde el valor al entero siguiente, no importa si el decimal es bajo o alto siempre se ira al entero siguiente
console.log(Math.floor(8.8));
console.log(Math.floor(8.2));
    // Redondea el valor al entero inferior, vaya al numero entero que contiene el decimal
console.log(Math.round(9.49));
console.log(Math.round(9.5));
    // Redondea al entero dependiendo del valor del decimal y al que este se aproxime mas al entero correspondiente. Vaya redondea al entero mas cercano. De .5 para arriba redondea al entero siguiente y de .49 para abajo redondea al entero inferior
console.log(Math.sqrt(81));
    // Calcula la raiz cuadrada
console.log(Math.pow(2,5));
    // Calcula la potencia, el primer digito es la base y el segundo el exponente
console.log(Math.sign(-9.8));
console.log(Math.sign(5.3));
console.log(Math.sign(0));
console.log(Math.sign(0.6));
console.log(Math.sign(-0.6));
// Nos indica si el número es positivo, negativo o 0, pero con indicacion numerica. Si es negativo el resultado sera un -1, se es positivo sera un 1 y si es 0 sera 0
console.log(Math.random());
    // Proporciona un número aleatorio entre 0 y 1. Se le pueden asignar parámetros donde le indiquemos entre que números queremos nos de ese aleatorio
console.log(Math.random() * 1000);
    // Además podemos utilizar los otros métodos en conjunto con el random para quitarle la parte decimal y asi tener un número aleatorio entero
console.log(Math.round(Math.random() * 1000));
    // Aqui lo que hacemos es que al round le pasamos como parámetro el objeto Math con la propiedad random y el parámetro de número que sea nuestro límite para el random