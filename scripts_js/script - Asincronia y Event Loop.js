/* 
    Javascript usa un modelo asíncrono y no bloqueante con un loop de eventos implementado en un solo hilo, (single thread) para operaciones de entrada y salida (input/output)
    
    Procesamiento Single thread y Multi thread
    Operaciones de CPU y Operaciones de I / O (Input / Output)
    Operaciones Concurrentes y Paralelas
    Operaciones Bloqueantes y No Bloqueantes
    Operaciones Síncronas y Asíncronas
*/

// Código Síncrono Bloqueante

(() => {
    console.log('Código Síncrono')
    console.log('Inicio');
    
    function dos() {
        console.log('Dos')
    }
    
    function uno() {
        console.log('Uno')
        dos()
        console.log('Tres')
    }
    uno()
    
    console.log('Fin')
})()

console.log('*****************');

// Código Asíncrono No Bloqueante

(() => {
    console.log('Código Asíncrono')
    console.log('Inicio')

    function dos() {
        setTimeout(()=>{
            console.log('Dos')
        }, 1000)
    }

    function uno() {
        setTimeout(() => {
            console.log('Uno')
        }, 0);
        dos()
        console.log('Tres')
    }
    uno()
    
    console.log('Fin')
})()