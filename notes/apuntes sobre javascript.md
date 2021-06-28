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

		(Todos los ejercicio se crearon con funciones, ya sea funcion clasica o de flecha pero con funciones, en alguno que otro añadi ejercicios sin utilizar funciones, donde emple variables o constantes solo para ver que era lo mismo y daba los mismos resultados, pero en otros no y solo se quedaron realizados con funciones, ya que asi tal cual fue como los estipulo el profe, crear o programar una funcion que arrojara ciertos resultados)