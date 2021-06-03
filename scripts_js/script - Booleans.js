let verdadero = true
let falso = false

console.log(verdadero);
console.log(falso);

console.log(typeof(falso));
console.log(typeof(verdadero));

// También se pueden declarar mediante el objeto constructor boolean aunque no es lo habitual ademas de que es escribir texto de mas sin ningun sentido

let v = Boolean(true)
let f = Boolean(false)

console.log(v, f);

// Boolean también nos sirve para definir si ciertos valores dentro de los datos son verdaderos o falsos. Esto no se bajo que norma se rige, pero básicamente y conforme a la documentacióin de MDN Casi todos los valores son verdaderos a excepción de "false", "0", "null", "undefined" y "NaN, asi como los strings vacios"

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(' '));
console.log(Boolean(-3));