/* 
    null, undefined: Van a representar un valor ausente, una variable que no tiene valor.
    
    Diferencia entre null y undefined: null es un valor que se ocupa de forma intencional en una variable, mientras que undefined es un valor que js le asigna a una variable cuando detecta que no tiene ningun valor

    - undefined indica que no se ha inicializado una variable y que el valor está ausente

    - null es un valor que se usa intencionalmente e indica la ausencia de un valor

    - NaN -> Not at Number: Esto aparece cuando queremos hacer diferentes operaciones ariméticas con diferentes valores que no son números
*/

let indefinida
console.log(indefinida)

let nulo = null
console.log(nulo)

let noEsUnNumero = 'hola' * 3.7
console.log(noEsUnNumero); 