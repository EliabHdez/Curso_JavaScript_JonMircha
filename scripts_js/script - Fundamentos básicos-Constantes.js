// Una constante es un dato que no va a cambiar su valor en el flujo del programa. En otras palabras tenemos que usar const cuando el valor de esta no va a cambiar

// Tambien las constantes no nos permiten declarar una const sin ningun valor a diferencia de las variables let donde podemos declararla y despues inicializarla y asignarle un valor. Con las constantes esto no se puede hacer

const PI = 3.1416
console.log(PI);

/* const NUEVE; */ // Aqui nos arroja un error en la consola del navegador debido a que no podemos declarar una constante sin ningun valor

let a // A diferencia de let donde podemos declarar la variable y asignarle un valor posteriormente

a = 'meraxes' // Valor de la variable a despues de haberla declarado/creado
console.log(a);

// Tampoco podemos modificar el valor de una constante
// const PI = 3.15 Aqui nos da error ya que no podemos cambiar el valor de una constante

//  ES IMPORTANTE RECORDAR QUE NO PODEMOS MODIFICAR UNA CONST SOLO PARA LOS DATOS PRIMITIVOS, PERO PARA LOS DATOS COMPUESTOS O COMPLEJOS SI PODEMOS MODIFICAR LOS VALORES. ESTO ES DEBIDO A QUE EN LOS DATOS COMPUESTOS NO ACCEDEMOS NI CAMBIAMOS COMO TAL EL DATO SI NO LA REFERENCIA O PARTE DE SU CONTENIDO. EJ. SI TENEMOS UN OBJETO O UN ARRAY, NO MODIFICAMOS EL OBJETO O EL ARRAY, ESTOS NO DEJAN DE SER LO QUE SON, UN OBJETO O UN ARRAY, LO QUE MODIFICAMOS ES UNA DE SUS REFERENCIAS O SUS CONTENIDOS, POR LO TANTO SI TENEMOS ESTE TIPO DE DATOS DECLARADOS COMO CONSTANTES SI NOS PERMITE MODIFICAR SU CONTENIDO, NO LO QUE SON

const datosMoises = {name: 'Moises', edad: 31}
console.log(datosMoises)
datosMoises.correo = 'moises@gmail.com' 
console.log(datosMoises)

const datosIntegrantes = [{name: 'Moises', edad: 31}, {name: 'Susett', edad: 29}]
console.log(datosIntegrantes)

const colors = ['rojo', 'verde', 'azul']
console.log(colors)
colors.push('negro')
console.log(colors)

// En los casos de arriba pudimos agregar mas info al objeto y al array aunque estan declarados como constantes debido a lo que se explica en el comentatario de arriba, que podemos modificar el contenido o las referencias de dichos objetos o arrays y esto es debido a que no estamos modificando el objeto o el array directamente, estos no dejan de ser lo que son, lo que estamos cmabiando es su contenido, es por eso que en el caso de los datos compuestos si nos permite modificar el contenido aunque sean constantes