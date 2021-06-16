console.log('Archivo js principal de modulos');

// import {PI, usuario} from "./script - Modulos-constantes.js"
import saludar, {PI, usuario} from "./script - Modulos-constantes.js"
console.log(PI, usuario);

import {sumar} from "./script - Modulos-Aritmeticos.js"
console.log(sumar(3,4));

import {restar} from "./script - Modulos-Aritmeticos.js"
console.log(restar(10,6));

// import dragon from "./script - Modulos-constantes.js";
import {aritmetica as arit} from "./script - Modulos-Aritmeticos.js";
    // Se puede crear alias a los nombres de las variables o constantes para que en lugar de ocupar el nombre de la variable ocupemos el alias al momento de utilizarlos en el archivo donde quedaron importados
import Hello from "./script - Modulos-constantes.js";
// console.log(aritmetica.multi(2,10));
// console.log(aritmetica.div(50,2));
console.log(arit.multi(2,8));
console.log(arit.div(50,2));
    // Aqui utlizamos el alias para realizar la operacion de la constante importada

// dragon
// console.log(dragon);
saludar()

import {moto} from "./script - Modulos-constantes.js"

let moto1 = new moto()

let h2r = new moto('Kawasaki H2R', 'Pista', '1200cc', 'Es la moto mas rapida del mundo')
console.log(h2r);
h2r.consideracion()

let cbr = new moto('Honda Cbr600RR', 'Pista', '600cc', 'Se considera una de las motos mas guerreras del mercado')
console.log(cbr);
cbr.consideracion1()