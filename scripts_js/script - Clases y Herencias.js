 // En las clases ya no es necesario dejar los metodos fuera de las clases como en el caso de las funciones constructoras ya que en las clases js hace esta separacion o mejora de forma automatica e interna, por lo tanto ya no impactaran en el rendimiento y la memoria

class Animal{
    constructor(nombre, genero){
            // El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase, siempre que se haga una clase debe llevar el constructor
        this.nombre = nombre
        this.genero = genero
    }
    // Metodos
    sonar (){
        console.log('En nuestras respectivas caricaturas tenemos el don del habla');
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} y soy el perro de la Familia Peluche`);
    }
}

class Perro extends Animal{
    constructor(nombre, genero, especie, raza){
        super(nombre, genero)
        this.especie = especie
        this.raza = raza
    }
    ladrar(){
        console.log('Guauuu Guauuu!!!');
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}
class Tigre extends Animal{
    constructor(nombre, genero, especie, subespecie){
        super(nombre, genero)
        this.especie = especie
        this.subespecie = subespecie
    }
    rugir(){
        console.log('Roooooaaaar!!!!');
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}
class Perezozo extends Animal{
    constructor(nombre, genero, especie){
        super(nombre, genero)
        this.especie = especie
    }
    nulo(){
        console.log('No tiene ningun sonido que emita en particular');
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

const gober = new Animal('Gober', 'Macho')
const coraje = new Perro('Coraje', 'Macho', 'Perro', 'Chihuahua')
const zyd = new Perezozo('Zyd', 'Macho', 'Perezozo')
const diego = new Tigre('Diego', 'Macho', 'Tigre', 'Dientes de sable')

console.log(gober);
gober.sonar()
gober.saludar()

console.log(coraje);
coraje.sonar()
coraje.saludar()
coraje.ladrar()

console.log(zyd);
zyd.sonar()
zyd.saludar()
zyd.nulo()

console.log(diego);
diego.sonar()
diego.saludar()
diego.rugir()