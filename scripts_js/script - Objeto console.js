console.log(console);
console.error('Esto es un error');
console.warn('Esto es un aviso');
console.info('Esto es un mensaje informativo');
console.log('Un registro de lo que ha pasado en nuestra aplicación');

let nombre = 'Moisés',
    apellido = 'Hernandez',
    edad = 30

console.clear() /* Este lo que hace es limpiar la consola, aqui no limpia nada ya que esta sobre todos los demas console, pero si lo ponemos en otra linea veremos que limpia y elimina todo lo que esta por encima de el*/
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad); // Podemos imprimir varias variables en un solo console.log dividas con una coma, esto lo que hara es imprimir todas estas variables en una sola linea
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola, mi nombre es %s %s y tengo %d años`, nombre, apellido, edad); // Podemos cambiar la forma en que imprimimos variables sin concatenar esta ultimas. Una de estas formas son con los template strings donde las variables van dentro de comillas prescididas de un signo de dollar ($). La otra forma es utilizar un signo de porcentaje (%) seguida de una "s" si lo que vamos a imprimir es una string y de una "d" si lo que vamos a imprimir es un numero. Para que esta ultima forma funcione despues del mensaje a mostrar en consola debos poner una coma (,) y seguida de esta coma las variables que ocuparan el lugar de estos signos en el orden que queremos que lo ocupen

console.log(window)
console.log(document)
console.dir(window)
console.dir(document)

// Podemos generar grupos en la consola, estos grupos se representaran en forma de lista y los podremos identificar por la flecha en un costado que indica que podemos desplegar informacion contenida dentro

// Sin collapse lo imprime desglosado
console.group('Cursos de @jonmircha en YouTube')
console.log('Curso de JavaScript');
console.log('Curso de Node.js');
console.log('Curso de PWAs');
console.log('Curso de Flexbox');
console.log('Curso de Curso de diseno y programacion Web')
console.groupEnd()

// Con collapse lo imprime colapsado, sin desglosar, puede que la forma de imprimirlo y el indicador de flecha en la izq varie dependiendo del navegador y la consola
console.groupCollapsed('Cursos de @DorianDesing en YouTube')
console.log('Curso de JavaScript');
console.log('Curso de HTML');
console.log('Curso de CSS');
console.log('Curso de CSS AVANZADO');
console.log('Curso de PUG');
console.groupEnd()

console.log(console);
console.table(Object.entries(console))
console.table(Object.entries(console).sort())

const numeros = [1,2,3,4,5]
const vocales = ['a','e','i','o','u']

// El console.table nos permite tener una visualizacion en forma de tabla
console.table(numeros)
console.table(vocales)

const Perro = {
    nombre: 'Katana',
    raza: 'Husky Siberiano',
    edad: '2 años',
    color: 'Gris/Blanco'
}

console.table(Perro)

// El console.time sirve para saber cuanto tiempo se tarda en ejecutar el codigo
console.time('Mi código tardo') // En el console.time lo que se pone dentro de los parentesis es como un identificador, este tiene que ir tanto en el time de inicio como en el timeEnd del final
const arr1 = Array(10000)
for(let i = 0; i < arr1.length; i++){
    arr1[i] = i
}
console.timeEnd('Mi código tardo') // Aqui esta el mismo identificador en el timeEnd
console.log(arr1);

// El console.count sirve para tener un conteo de cuantas veces se ejecuto "x" codigo
for(let i = 0; i <= 100; i++){
    console.count('codigo for')
        // En este caso en particular vemos que en la consola nos dice codigo for:1 - 0, quiere decir que se ejecuto la primera vez y esa primera vez dio como resultado del for el numero 0 y asi sucesivamente
    console.log(i);
}

// El console.assert nos sirve para determinar si una afirmación es verdadera o falsa. Si es verdadera no aparecerá nada en la consola, si es falsa aparecerá un mensaje de error
let x = 1,
    y = 2,
    prueba = "Se espera que 'x' siempre sea menor que 'y'"

console.assert(x < y, {x,y,prueba})
    // Como podemos observar con este assert no pasa nada o bueno no vemos nada en consola esto se debe a que la prueba se ejecuto correctamente, ya que por decirlo de alguna manera se esta cumpliendo la condicion de que x sea menor que y

let a = 2,
    b = 1,
    prueba1 = "Se espera que 'a' siempre sea menor que 'b'"

console.assert(a < b, {a,b,prueba1})
    // Sin embargo en este assert vemos que la consola nos arroja un error ya que la condicion no se cumple y por lo tanto la prueba no se ejecuta correctamente