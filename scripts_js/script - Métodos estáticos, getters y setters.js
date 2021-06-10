// Un método estático se puede ejecutar sin necesidad de instanciar la clase

// Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase. Estis lo que nos permite hacer es obtener u modificar valores que no hayan sido declarados en un inicio dentro de la clase

    // Los setters y getters aunque se declaran como métodos o funciones no se tratan como tal, si no que se tratan como atributos, hay que tener esto en cuenta ya que podriamos llegar a confundirnos tratarlos como métodos y tener errores

class Perro{
    constructor(nombre, raza){
        this.nombre = nombre
        this.raza = raza
        this.size = null // Esta es la propiedad que vamos a modificar con el getter y setter
    }
    ladrar(){
        console.log('Guauu Guauu!!!');
    }
    // Metodo estatico
    static husky(){
        console.log(`El husky siberiano es una raza de perro de trabajo originaria del noreste de Siberia (Chukotka, Rusia).Este perro fue creado por la tribu Chukchi como perro de trabajo para tirar de los trineos a través de largas distancias durante sus partidas de caza, sirviendo, así como vehículo de transporte rápido para las presas de la vuelta al poblado.`);
    }
    // Setters y Getters
        // Para declararlos vamos a ocupar y anteponer la palabra get y set antes del nombre del metodo. Y para el nombre de estos métodos se suelen ocupar estas mismas palabras al inicio del que sera el nombre del metodo ej: get getNombreMetodo

    // El metodo getters es un metodo obtenedor y generalemente los metodos obtenedores lo que hacen es retornar como tal el valor de la propiedad en cuestion
    get getSize(){
        return this.size
    }
    // El metodo setters es un metodo establecedor, el cual es el que se encarga de modificar el valor de dicha propiedad. Este si espera recibir un valor dentro de los parentesis ya que vamos a establecer un nuevo valor
    set setSize(size){
        this.size = size
    }
}

const katana = new Perro('Katana', 'Husky') // Esto es instanciar la clase, vaya el instanciar la clase es crear un objeto (en una variable o constante) que llevara esta clase
console.log(katana);
katana.ladrar()

// El metodo estatico no necesita de una instancia de clase para poderse ejecutar, como podemos ver a continuacion, el metodo estatico husky lo pude ejecutar solo con llamar a la clase seguido del metodo estatico
Perro.husky()

// Recordar que al getter y al setter aunque son metodos los vamos a utilizar como si fueran atributos
    /* katana.getSize()
    katana.setSize()
    Esto da un error ya que lo estamos tratando como funcion o metodo */
console.log(katana.getSize);
katana.setSize = 'Mediano' // El set es el que cambia el valor
console.log(katana.getSize); // El get es el que lo recibe y almacena