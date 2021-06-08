/* POO --> Programacion orientada a objetos
    - Clases --> Es un modelo a seguir
    - Objetos --> Es una instancia de una clase (es decir una copia del modelo de la clase)
        - Atributos --> Es una caracteristica o propiedad del objeto (son variables de un objeto)
        - Metodos --> Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

const animal = {
    nombre: 'snoopy',
    genero: 'macho',
    caricatura: 'Charly Brown',
    sonar(){
        console.log('Aun siendo animales en nuestras respectivas caricaturas tenemos del don del habla');
    }
}
const animal1 = {
    nombre: 'Lola Bunny',
    genero: 'hembra',
    caricatura: 'Looney Tunes',
    sonar(){
        console.log('Aun siendo animales en nuestras respectivas caricaturas tenemos del don del habla');
    }
}
console.log(animal);
console.log(animal1);

// Cuando queremos crear varios objetos de un mismo tipo o con elementos/atributos iguales, pero con los valores de los atributos diferentes una forma de hacerlo es como la de arriba que basicamente lo que hariamos seria copiar, pegar y cambiar valores, sin embargo hay otra forma de hacerlo y eso es mediante una funcion constructora, la cual nos permite crear un molde por decirlo de alguna manera del objeto y los atributos para posteriormente agregarle solo los valores a dichos atributos por medio de la creacion de variables para estos valores

// FUNCION CONSTRUCTORA

/* function Animal(nombre, genero, caricatura) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
    this.caricatura = caricatura;
    // Metodo
    this.sonar = function () {
        console.log('Aun siendo animales en nuestras respectivas caricaturas tenemos deldon del habla');
    }
    this.saludo = function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
} */

// Lo recomendable es tener los metodos fuera de la funcion constructora y asignarlos despues en el prototipo, esto para optimizar los recursos, memoria y rendimiento del pc y del navegador, ya que ahorita siendo 2 los ejemplos no hay problema pero con un codigo de verdad de alguna aplicacion donde se tengan muchas instancias el tener los metodos dentro y que se esten duplicando cada vez que hacemos una instancia consumiria muchos recursos. El codigo de arriba es la forma en que se hizo inicialmente pero con el metodo adentro. Lo correcto es la forma en la que lo vamos a encontrar abajo, con los metodos fuera

// Funcion constructora con los metodos independientes, para poder asignarlos al prototipo de la funcion y no a la funcion constructora como tal

function Animal(nombre, genero, caricatura) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
    this.caricatura = caricatura;
}

// Metodos fuera de la funcion constructora

// Para asignar los metodos los tenemos que asignar al prototipo y esto lo hacemos de la siguiente manera

// Metodo agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function () {
    console.log('Aun siendo animales en nuestras respectivas caricaturas tenemos el don del habla');
}
Animal.prototype.saludo = function () {
    console.log(`Hola mi nombre es ${this.nombre}`);
}

const snoopy = new Animal('Snoopy', 'Macho', 'Charly Brown')
const scooby = new Animal('Scooby', 'Macho', 'Scooby-Doo')
const lola = new Animal('Lola Bunny', 'Hembra', 'Looney Tunes')

console.log(snoopy);
console.log(scooby);
console.log(lola);

snoopy.saludo()
snoopy.sonar()
scooby.saludo()
scooby.sonar()
lola.saludo()
lola.sonar()

// A simple vista en la consola despues de imprimirlo podemos ver que es exactamente igual, sin embargo cuando ingresamos al prototipo podremos observar que en todos dice que su prototipo es un objeto pero en los primeros 2 define caracteristicas de este objeto, mientras que los ultimos tres indican que tienen un constructor de por medio, el cual tiene una funcion llamada Animal

// Al sacar los metodos de la funcion constructora y enlazarlos por medio del prototipo tambien tenemos unos cambios en la impresion en la consola y esto es que cuando observamos ya no se ve la funcion como tal dentro del objeto Animal, si no que la podemos encontrar en el apartado prototype donde podremos ver las funciones