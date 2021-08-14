console.log(this)
this.lugar = 'Contexto Global' 

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}

saludar('Hello', 'Eliab')

const obj = {
    lugar: 'Contexto Objeto'
}

saludar.call(obj, 'Hola', 'Moises')
saludar.apply(obj, ['Adios', 'Sr. Hernandez'])
saludar.call(null, 'Hi', 'Sandra')
saludar.apply(null, ['Holis', 'Sandra'])

// Call y apply basicamente son y hacen los mismo. nos sirven para enlazar o llamar cierto contexto, datos o informacion. En el video anterior vimos que para acceder al "Contexto Objeto" que esta dentro del objeto necesitabamos poner la funcion dentro del objeto, para que su scope fuera el scope del objeto de lo contrario seria el scope global. Con call y apply podemos obtener el "Contexto Objeto" sin la necesidad de generar una funcion dentro del objeto, solo necesitamos hacer referencia dentro del call o apply de donde vamos a obtener los datos

// La diferencia entre el call y el apply es la forma en que reciben los datos o parametros. El call los recibe de forma directa separados por comas y el apply los recibe en forma de arreglo (dentro de corchetes) al igual separados por comas

const persona = {
    nombre: 'Velkan',
    saludar: function () {
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar()

this.nombre = 'Window'

const persona2 = {
    saludar: persona.saludar.bind(persona),
    saludar: persona.saludar.bind(this) // Este this al llamarlo solo a el hace referencia al this que se encuentra en el contexto global, el cual es el this.nombre que se encuentra arriba
}

persona2.saludar()