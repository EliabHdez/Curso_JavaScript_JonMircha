console.log(window)
console.log(document) // El document hace referencia al document html al que esta enlazado en alrchivo js. Este lo podemos ver en la consola mediante este comando

let nombreEmpleado = prompt('Digite el nombre del empleado')
let sueldoXDia = prompt('Digite el sueldo por dia')
let dias = prompt('Digite el numero de dias laborados')
let descuento = prompt('Algun descuento a generar???')
let motivoDescuento = prompt('Ingrese el motivo del descuento')

let sueldo = dias * sueldoXDia
let descuentoAplicado = descuento
let motivoDescuentoIngresado = motivoDescuento
let sueldoFinal = sueldo - descuento

let saysueldo = `El sueldo de ${nombreEmpleado} es de ${sueldo}. Descuento generado de ${descuentoAplicado}pesos referente a ${motivoDescuentoIngresado}. El sueldo final semanal es de ${sueldoFinal} pesos`

const saySueldo = (saysueldo) => speechSynthesis.speak(new SpeechSynthesisUtterance(saysueldo))

saySueldo(saysueldo)

alert(`Sueldo semanal: $${sueldo}
Descuento aplicado: $${descuentoAplicado}
Motivo descuento: ${motivoDescuentoIngresado}
Sueldo semanal correspondiente: $${sueldoFinal}`)

// Todo este rollo del ejercicio fue obra personal, me lo sque yo en el tema para probar un poco el speechSynthesis, el profe solo hizo un pequeño ejercicio con su saludo inicial de cada video

    /* let texto = 'Hola soy tu amigo y docente digital Jonathan MirCha'

    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

    hablar(texto) */