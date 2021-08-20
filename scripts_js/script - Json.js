// El archivo o formato json sirve para que archivos escritos en diferentes lenguajes se entiendan entre si mediante este formato. Esto quiere decir que si estamos ocupando phyton y js para la parte del backend por si solos estos lenguajes no se van a entender debido a que son diferentes, pero por medio del formato json estos lenguajes entienden los escrito en el otro, debido a que este formato es compatible y sirve para transferir informacion

// Json sirve para convertir valores y esto lo hace para la transferencia de datos. Para esto cuenta con dos metodos:

        // JSON.parse() - Analiza una cadena de texto JSON, opcionalmente transformando el valor producido y sus propiedades, retornando el valor. En otras palabras covierte una cadena de texto en el correspondiente en js

        // JSON.stringify() - Devuelve un string JSON correspondiente al valor especificado, incluyendo opcionalmente ciertas propiedades o reemplazando valores de propiedades de la manera definida por el usuario. En otras palabras convierte el objeto correspondiente en js en una cadena de texto

// En los archivos json todo el contenido debe de ir entre llaves y los valores deben de ir entre comillas dobles, especificamente dobles, los numeros y los booleanos pueden quedar sin comillas y no habra problemas de sintaxis, sin embargo podemos ponerlos tambien entre comillas para simplificar y generalizar todo el contenido del archivo entre comillas y que asi todo quede igual

    // Por ej:

        /* {
            "nombre:" "Moises",
            "apellido:" "Hernandez":
            "edad:" 30 o "30",
            "bollean:" true o "true"
        } */

const json = {
    nombre: "Moises",
    apellido: "Hernandez",
    edad: 30,
    booleano: true,
    arr: ["facebook", "instagram", "twitter"],
    obj: {pasatiempo: "andar en moto", trabajos: "diseño 3D, programacion"}
}

console.log(json)

console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))
console.log(JSON.parse("25"))
console.log(JSON.parse("null"))
// console.log(JSON.parse("undefined"))

console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,3]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify(25))
console.log(JSON.stringify(null))
console.log(JSON.stringify(undefined))
console.log(JSON.stringify({x: 2, y: 5}))

console.log(JSON.stringify(json))
console.log(JSON.parse('{"nombre": "Moises","apellido": "Hernandez","edad": 30,"booleano": true,"arr": ["facebook", "instagram", "twitter"],"obj": {"pasatiempo": "Andar en Moto", "trabajos": "Diseño 3D, Programacion"}}'))