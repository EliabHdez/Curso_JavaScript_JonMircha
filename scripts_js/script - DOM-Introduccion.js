// let nombre = 'Hi my name is Eliab Hernandez'
// const hablar = (nombre) => speechSynthesis.speak(new SpeechSynthesisUtterance(nombre))
// hablar(nombre)

// Con document hacemos referencia al documento html al que esta ligado nuestro archivo js

console.log(window)
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(() => {
    console.log(document.getSelection().toString())
}, 3000) // Hicimos uso del settimeout para tener un tiempo para poder seleccionar algo de la pagina, ya que de lo contrario al momento de generar el codigo la pagina se refresca, se actualiza de forma inmediata y por lo tanto no tendriamos nada selecionado y no veriamos la funcion del getSelection. Con el settimeout nos da tiempo para que en lo que transcurren los 3 seg antes de ejecutarse el codigo dentro del settimeout podamos seleccionar algo de la pagina
document.write("<h2>Hola Mundo desde el DOM</h2>")// Con el metodo write() podemos escribir directamente en el archivo html