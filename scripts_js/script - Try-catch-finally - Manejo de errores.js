// try-catch-finally

    // Es una estructura de control que nos ayuda con el manejo de errores

try {
    console.log('En el try se agrega el código a evaluar')
    VariableNoDeclarada
    console.log('Segundo mensaje en el try');
    console.log('Tercer mensaje en el try');
} catch (error) {
    console.log('catch; captura cualquier error surgido o lanzaro en el try')
    console.log(error);
}finally{
    console.log('El bloque finally se ejecutará siempre al final de un bloque try-catch');
}
// En el momento en que en el try se detecta un error, en ese momento para la ejecución del codigo dentro del try y se va para el catch el cual sera el encargado de arrojarnos el error. Como podemos ver el en caso anterior entra en el try, imprime el primer mensaje, despues detecta el error y ya no imprimi ni el segundo ni el tercero, si no que en automático para la ejecución del try y se va al catch para arrojarnos el error que encontro en el try

try {
    let numero = 'x'
    if(isNaN(numero)){
        throw new Error('El caractér introducido no es un número')
    }
    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente 'error' - ${error}`);
}