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