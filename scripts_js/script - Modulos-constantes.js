// Para exportar informacion de un archivo js a otro es necesario anteponer la palabra export

export const PI = Math.PI

export let usuario = 'Moises'
let password = 'qwerty'

// Podemos exportar solo lo que necesitemos sin la necesidad de exportarlo todo, como podemos ver en este caso solo hemos exportado dos variables y estas son las que estan en nuestro otro archivo, si queremos imprimir la variable password en el otro archivo veremos que no podemos ya que no se a exportado

// No podemos hacer uso de la exportación default mas de una vez

// El export default declarado en la misma limea solo puede hacerse con las funciones o con las clases, para las variables y constantes no vale esta forma, debido a la elevacion que hace js, recordar que las funciones declaradas js las eleva al inicio del archivo, al igual que las clases, es por esto mismo que el export default sirve en estas declarandolo en la misma linea, pero con las variables, constantes o funciones expresadas no es asi, ya que a estas js no las eleva, por lo tanto si lo queremos hacer en una sola linea tendremos un error. Para hacer la exportación por default de estas necesitamos poner la exportacion despues de la variable, constante o funcion expresada

export default function saludar(){
    console.log('Exportación e importación por defecto y/o automática');
}

// export default class saludar2 {
//     constructor(){
//         console.log('Clase saludar2');
//     }
// }

// let dragon = 'meraxes'
// export default dragon

export class moto {
    constructor(moto, tipo, cc, message){
        this.moto = moto
        this.tipo = tipo
        this.cc = cc
        this.message = message
        console.log('Clase MOTO');
    }
    consideracion(){
        console.log('Es considerada por muchos si no es que la mayoria como la mejor moto del mundo en la actualidad');
    }
    consideracion1(){
        console.log('Se utiliza frecuentemente en todas las carreras a nivel profesional');
    }
}