Javascript hasta el dia de hoy es el unico lenguaje capaz de ejecutarse en las 3 capas de una apliacaión:
	1 - Frontend (javascript)
	2 - Backend (Node.js)
	3 - Persistencia de Datos (MongoDB, Couch DB, Firebase, etc)

Con Javascript se hacer:
	- Diseño y Desarrollo Web
	- Hacer videojuegos
	- Experiencias 3D, Realidad aumentada, Realidad virtual
	- Controlar Hardware (Drones, robots, electrodomésticos)
	- Aplicaciones Híbridas y móviles
	- Machine Learning
	- etc...

Características
	- Lenguaje de Alto Nivel
	- Interpretado
	- Dínamico
	- Débilmente tipado
	- Multi paradigma
	- Sensible a mayúsculas y minúsculas
	- No necesitas los puntos y comas al final de cada línea

Escritura de codigo

Los nombres de los identificadores (un identificador es el nombre que se le da a una variable, constante, clase etc) deben comenzar con: 
	(identificador = nombre variable, constante, funcionas, clases etc)

    - Una letra (a, b, c)
    - Un signo de dolar ($a, $b)
    - Un guion bajo (_a, _b)
    - Nunca con numeros o caracteres especiales

    Usar snake_case con (nombres sin espacios y con guion bajo entre palabras)
 
	    - Archivos --> mi_archivo_javascript.js

    Usar UPPER_CASE con (nombre con mayúsculas y guion bajo entre palabras, de tener mas de una palabra la const)
	    
        - Constantes --> const UNA_CONTANTE = 'Soy una constante';
			 const PI = 3.1416;

    Usar UpperCamelCase con (nombres sin espacios en caso de que tengan mas de una palabra y con mayúscula al inicio de cada palabra)
	    
        - Clases --> class SerHumano {
				constructor (nombre, genero){
					this.nombre = nombre
					this.género = género
					}
				miNombreEs () {
					return `Mi nombre es ${Nombre}`
					}
				}

    Usar lowerCamelCase con (nombres sin espacios en caso de que tengan mas de una palabra, si solo tiene una palabra el nombre va con minúsculas, si tiene 2 o mas palabras a partir de la segunda cada palabra se inicia con mayúscula)
	    
        - Objetos --> const unObjeto = {
					nombre: 'Moises'
					email; 'moises_hl_zod@hotmail.com'
				}

	    - Primitivos --> let unaCadena = 'Hola Mundo';
								unNumero = 19;
								unBoolean = true;

	    - Funciones --> function holaMundo (nombre) {
								alert(`Hola Mundo ${nombre}`)
							}
							holaMundo('Moises')

	    - Instancias --> const ajax = new XMLHttpRequest();
								jon = new SerHumano('Moises', 'Hombre');

Palabras reservadas en el lenguaje de programación

	A: abstract
	B: boolean, break, byte
	C: case, catch, char, class, const, continue
	D; debugger, default, delete, do, double
	E: else, enum, export, extends
	F: false, final, finally, float, for, function
	G: goto
	I; if, implements, import, in, instanceof, int, interface
	L: long
	N: native, new, null
	P: package, private, protected, public
	R: return
	S: short, static, super, switch, synchronized
	T: this, throw, throws, transient, true, try, typeof
	V: var, volatile, void
	W: while, with

Ordenamiento de codigo (recomendación)

	1. Importación de módulos
	2. Declaración de variables
	3. Declaración de funciones
	4. Ejecución de código

Tipos de datos en JavaScript

    1. Primitivos: Se accede directamente al valor
        - string
        - number
        - bollean
        - null
        - undefined
        - NaN --> Not at Number

    2. Compuestos / Complejos: Se accede a la referencia del valor
        - object = {}
        - array = []
        - function () {}
        - Class {}
        -etc

let & var
    
    - var es una variable de ambito/scope global, eso quiere decir que aunque la declaremos dentro de un bloque si no hay una funcion de por medio para esta variable javascript junto con el navegador la tomara como una variable global

    - let es una variable de ambito de bloque, donde esta solo funciona dentro del bloque que se encuentra y se limita a este

    "IMPORTANTE: NO UTILIZAR VAR, ES MALA PRACTICA"

callback

	Es una funcion que llama a otra funcion

GET-POST

	Son metodos para para hacer peticiones, tanto para recibir como para enviar datos. La verdad es que este tema no lo entiendo muy bien junto con todo lo de ajax, sin embargo entiendo que tanto get como post se utilizan si queremos mandar o recibir cierta informacion de paginas web

Propiedades

	Son caracteristicas o atributos de los tipos de datos

Métodos

	Acciones o funciones que me permiten ejecutar cierta acción con el dato al que le asigne el método

Objeto Iterable

	Un objeto iterable es un tipo de objeto que devuelve sus elementos de uno en uno cada vez.Es decir que se pueda partir en pequeños elementos. Ejemplo un array el cual se puede dividir de forma individual cada valor de ese array o un string que se puede dividir de forma individual en cada uno de los caracteres que la conforman

Programcion Orienta a Objetos (P.O.O)

	Los prototipos, las herencias, las clases y los metodos estaticos, getters y setters son caracteristicas de la programacion orientada a objetos o al menos se ocupan para este tipo de programacion

Ejercicios de Lógica de Programación

	1.- Programa una función que cuente el número de caracteres de una cadena de texto
	2.- Programa una fúncion que te devuelva el texto recortado según el número de caracteres indicados
	3.- Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
	4.- Programa una función que repita un texto 'x' número de veces
	5.- Programa una función que invierta las palabras de una cadena de texto
	6.- Programa una función para contar el número de veces que se repite una palabra en un texto largo
	7.- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro)
	8.- Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
	9.- Programa una función que obtenga un numero aleatorio entre 501 y 600.
	10.- Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
	11.- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)
	12.- Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
	13.- Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
	14.- Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
	15.- Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
	16.- Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 	pe. miFuncion(1000, 20) devolverá 800.
	17.- Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 	pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
	18.- Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
	19.- Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
	20.- Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
	21.- Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
	22.- Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
	23.- Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
	24.- Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
	25.- Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
	26.- Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
	27.- Programa una clase llamada Pelicula.
		La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
		  - Todos los datos del objeto son obligatorios.
		  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
		     7 restantes números.
		  - Valida que el título no rebase los 100 caracteres.
		  - Valida que el director no rebase los 50 caracteres.
		  - Valida que el año de estreno sea un número entero de 4 dígitos.
		  - Valida que el país o paises sea introducidos en forma de arreglo.
		  - Valida que los géneros sean introducidos en forma de arreglo.
		  - Valida que los géneros introducidos esten dentro de los géneros 
		     aceptados*.
		  - Crea un método estático que devuelva los géneros aceptados*.
		  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
		    decimal de una posición.
		  - Crea un método que devuelva toda la ficha técnica de la película.
		  - Apartir de un arreglo con la información de 3 películas genera 3 
		    instancias de la clase de forma automatizada e imprime la ficha técnica 
		    de cada película.

		* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 		Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 		Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

		(Todos los ejercicio se crearon con funciones, ya sea funcion clasica o de flecha pero con funciones, en alguno que otro añadi ejercicios sin utilizar funciones, donde emple variables o constantes solo para ver que era lo mismo y daba los mismos resultados, pero en otros no y solo se quedaron realizados con funciones, ya que asi tal cual fue como los estipulo el profe, crear o programar una funcion que arrojara ciertos resultados)