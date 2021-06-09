// Herencia Prototípica

// Para ver este tema vamos a crear una Funcion constructora como la del tema pasado para que esta nos sirva para hacer nuestra herencia prototipica

// FUNCION CONSTRUCTORA

function Animal(nombre, genero){
    this.nombre = nombre
    this.genero = genero
}

// HERENCIA PROTOTIPICA

function Perro(nombre, genero, raza){
    this.dadPerro = Animal // La propiedad dadPerro es una variable que indica que el elemento padre de Perro es Animal, se ocupa el this para indicar que esa variable de dadPerro corresponde a "este" elemento que es la funcion Perro
    this.dadPerro(nombre, genero)
    this.raza = raza
} // El profe Jon puso en lugar de dadPerro la palabra super y comento que la ponia para dejar cierta similitud ya que esta palabra es una palabra reservada de los lenguajes de programacion que sirve para llamar al padre de la que es la herencia prototipica que en este caso es Animal, yo puse ese nombre para ver si con esto puedo entender mas facil para que sirve esa linea de codigo, pero a grandes rasgos lo que hacemos con eso es que estamos invocando por medio de esa propiedad dadPerro como padre a la funcion constructora Animal. Y en general con esta funcion Perro estamos haciendo la asociacion de la herencia prototipica

// Ahora lo que hay que hacer es asignar al prototipo de Perro una instancia de Animal, ya que si lo dejamos solo con el codigo de arriba lo que estariamos haciendo seria algo asi como en el tema anterior donde teniamos los metodos dentro de la funcion constructora, donde estbamos llamando ese metodo cada vez que hicieramos una instancia de esa funcion. En este caso lo que estamos haciendo solo con el codigo de arriba es hacer una instancia de Animal con todos los datos que guarda esa funcion constructora, con esto conseguimos consumir recursos del sistema y del navegador innecesarios, por lo tanto hay que asignar al prototipo Perro que sea una instancia de Animal

// Esta linea es la que hace la herencia. Perro esta heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

Animal.prototype.sonido = function() {
    console.log('Los animales de las caricaturas tienen el don del habla');
}
Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}
Animal.prototype.intento = function() {
    console.log('Yo hago el intento de aullar como mis hermanos Katana y Velkan, pero es un intento entre aullido y chillido XD');
}

// Sobreezcritura de metodos del Prototipo existente
Perro.prototype.sonido = function() {
    console.log('El sonido que emiten los perros en la vida real es un ladrido');
}

Perro.prototype.ladrar = function() {
    console.log('Guau Guau');
}
Perro.prototype.aullidoHuskies = function() {
    console.log('Soy un perro de la raza Husky, por lo tanto tengo tendencia a aullar como lobo mas que a ladrar');
}
Perro.prototype.aullar = function() {
    console.log('Aaaaauuuuuuuuu!!!!!!!!');
}

const katana = new Perro('Katana', 'Hembra', 'Husky')
const velkan = new Perro('Velkan', 'Macho', 'Husky')
const ronin = new Animal('Ronin', 'Macho')

console.log(katana);
console.log(velkan);
console.log(ronin);

katana.saludar()
katana.sonido()
katana.ladrar()
katana.aullidoHuskies()
katana.aullar()

velkan.saludar()
velkan.sonido()
velkan.ladrar()
velkan.aullidoHuskies()
velkan.aullar()

ronin.saludar()
ronin.sonido()
ronin.intento()