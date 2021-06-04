// Un objeto es un conjunto de variables almacenadas en una sola variable o constante, a estas variables dentro de un objeto se les conoce como atributos

// Dentro de un objeto a las variables se les conocera como atributos/propiedades

// También se puede crear objetos mediante el objeto-constructor Object()

// A las funciones se les llama o conoce como metodos, por lo tanto no puedes acceder a estas con el punto como con los atributos

// Dentro de un objeto los atributos o propiedades se separan por medio de comas, se puede poner todo de corrido o desglosado, lo importante es separar cada atributo con una coma y respetar la forma en que se declaran los valores, es decir strings entre comillas, numeros y booleans solos, arrays entre corchetes, objetos dentro de llaves etc. Abajo dejo comentado como se veria el codigo del objeto si se hiciera de forma continua

// const eliab = {nombre: 'Eliab', apellido: 'Hernandez', edad: 30, pasatiempos: ['jugar videojuegos', 'programar', 'diseño 3D'], soltero: false, contacto: {email: 'eliab@gmail.com', telefono: '55-5555-5555', redes_sociales: {facebook: '@eliab.hdez_fb', instagram: '@eliab.hdez_insta', twitter: '@eliab.hdez_tw'}}

let moy = new Object({name: 'Moy', edad: 30})
console.log(moy);

// Es bueno declarar los objetos como constantes ya que asi evitamos que en algun momento este pueda cambiar o que haya algun problema porque algo quiera cambiar la referencia de este, la verdad no entendi muy bien el porque y de como se podria estar cambiando un objeto, el punto es que el profe comento que esto era bueno para evitar algun en este, sin embargo si se declara ya se como constante o variable esta bien, cualquiera de las dos es correcta

const eliab = {
    nombre: 'Eliab',
    apellido: 'Hernandez',
    edad: 30,
    pasatiempos: ['jugar videojuegos', 'programar', 'diseño 3D'],
    soltero: false,
    contacto: {
        email: 'eliab@gmail.com',
        telefono: '55-5555-5555',
        redes_sociales: {
            facebook: '@eliab.hdez_fb',
            instagram: '@eliab.hdez_insta',
            twitter: '@eliab.hdez_tw'
        }
    },
    saludar: function(){
        console.log('Hola ;)');
    },
    sayName: function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Me puedes encontrar en mis redes sociales como ${this.contacto.redes_sociales.facebook} en facebook, ${this.contacto.redes_sociales.instagram} en instagram y como ${this.contacto.redes_sociales.twitter} en twitter, o si lo prefieres puedes ponerte directamente en contacto conmigo mediante mi número telefónico: ${this.contacto.telefono}`); // La propiedad this es para hacer referencia al como que al scope donde lo estamos utilizando, en este caso el scope del objeto, que a su vez es el valor de la constante eliab. No se con exactitud como describirlo, pero lo que hace es que en este caso en particular le estamos con el this es que dentro de "este" objeto va a imprimirse el mismo pero con la propiedad nombre, apellido y edad. Digamos que hace referencia al mismo objeto de donde se encuentra o donde estamos ocupando esta propiedad de this y es para hacer referencia a algo en concreto ya que solo abarca el scope donde se encuentra
    }
}

// Para acceder a un atributo lo podemos hacer mediante los corchetes como con los arrays, sin embargo no es una forma que se suela ocupar. La forma mas utilizada y aceptable para acceder a los atributos de un objeto es por medio del punto (.)

console.log(eliab.nombre);
console.log(eliab.apellido);
console.log(eliab.edad);
console.log(eliab.soltero);
console.log(eliab.pasatiempos);
console.log(eliab.pasatiempos[0]);
console.log(eliab.pasatiempos[1]); // Aqui ingresamos a un valor en concreto por medio de los corchetes ya que el contenido de pasatiempos es un array
console.log(eliab.contacto); 
console.log(eliab.contacto.telefono);
console.log(eliab.contacto.redes_sociales.twitter); // Aqui ingresamos a un valor en concreto por medio del punto y el nombre del valor cuya informacion deseamos obtener. Y porque mediante el punto y no por medio de corchetes, porque el contenido de contacto es un objeto, NO un array por lo tanto para acceder a los valores de un objeto es mediante el valor/nombre que se le dio
console.log(eliab['nombre']);
console.log(eliab['apellido']);

// En la invocación de las siguientes funciones ya no es necesario poner el console.log ya que este ya esta declarada dentro de la función, por lo tanto es una acción que va a ejecutar al momento de que la invoquemos

eliab.saludar()
eliab.sayName()

// El metodo .keys lo que hace es listar las llaves o atributos del objeto. Es un metodo del objeto Object el cual genera este listado en forma de array con sus respectivas posiciones

console.log(Object.keys(eliab));
console.log(Object.keys(eliab.contacto));
console.log(Object.keys(eliab.contacto.redes_sociales));

// El metodo .values es muy similar al metodo keys, la diferencia esta en que como su nombre lo indica este crea un array pero de los valores de los atributos

console.log(Object.values(eliab));
console.log(Object.values(eliab.contacto));
console.log(Object.values(eliab.contacto.redes_sociales));

// El metodo hasOwnProperty nos permite saber si dentro del objeto hay o no un atributo en especifico. Para hacer uso de este metodo, primero accedemos o declaramos el objeto en cuestión seguido del método y dentro de los parentesis la propiedad entre comillas

console.log(eliab.hasOwnProperty('nombre'));
console.log(eliab.hasOwnProperty('birthday'));