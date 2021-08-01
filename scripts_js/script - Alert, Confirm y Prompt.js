console.log(window);
// window.alert('Hola, esto es una alerta')
// window.confirm('Hello, this is an alert')
// window.prompt('Hola esto es un prompt y le permite al usuario ingresar un valor')

// Estos metodos cuelgan del objeto global window, sin embargo no es necesario declarar el objeto window para poderlos utilizar

// alert('Alert')
// confirm('Confirm')
// prompt('Prompt, interacción con el usuario')

let alerta = alert('Alert')
let confirmacion = confirm('Confirm')
let intUsuario = prompt('Prompt para interactuar con el usuario')

console.log(alerta);
console.log(confirmacion);
console.log(intUsuario);

// El resultado dependera de la interacción que tengamos con estos

// El alert para lo unico que nos vale es para arrojar mensajes en pantalla, no es necesario en realidad guardarlo en una variable como los hicimos en este caso

// El confirm nos sirve para arrojar un aviso por decirlo de alguna manera y dependiendo de la respuesta del usuario este arrojara como respuesta un true o un false, si la interaccion del cliente es 'acepto' esto sera true, si la interacción es 'cancelar' esta sera false

// El prompt permite que el usuario interactue con el y el resultado dependera de la interaccion del usuario con este. Si escribe un valor y da aceptar aparecera el valor que el cliente tecleo y este se guardara o podra guardarse en una variable, si el cliente teclea un valor pero le da en cancelar el valor tecleado se nulificara

// Los siguiente fue un poco de trasteo por cuenta propia...

let resultado = parseInt(intUsuario) + 10
let resultado2 = parseFloat(intUsuario) + 10

console.log(resultado);

const nameUsuario = prompt('Introduzca su nombre completo')
const nameUsuario2 = prompt('Introduzca un alias')

let datosUsuario = nameUsuario
let datosUsuario2 = `${nameUsuario2} es el usuario número 343`

console.log(`El nombre del usuario es ${datosUsuario}`);
console.log(`El nombre del usuario es ${nameUsuario}`);
console.log(datosUsuario2);