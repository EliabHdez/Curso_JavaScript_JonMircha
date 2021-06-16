export function sumar(a, b) {
    return a + b
}

export function restar(a,b){
    return a - b
}

// Podemos agrupar funciones en un solo objeto para exportarlo en conjunto, de forma grupal en uno solo

function multi(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}

export const aritmetica = {
    multi,
    div
}