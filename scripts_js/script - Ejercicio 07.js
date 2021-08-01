// 7.- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro)

palindromo = (mueble) => {
    if(mueble === mueble.split('').reverse().join('')){
        console.log(true);
    }else{
        console.log(false);
    }
}

palindromo2 = (moto) => {
    if(moto === moto.split('').reverse().join('')){
        console.log(true);
    }else console.log(false);
}

palindromo3 = (marca) => {
    if(marca === marca.split('').reverse().join('')){
        console.log(true, "La marca 'OPPO' se lee igual al derecho que al reves");
    }else{
        console.log(false, "La marca 'OPPO' no se le igual al derecho que al reves");
    }
}

palindromo4 = (marca2) => {
    if(marca2 != marca2.split('').reverse().join('')){
        console.log(true, "La marca 'APPLE' NO se le igual al derecho que al reves");
    }else{
        console.log(false, "La marca 'APPLE' se lee igual al derecho que al reves");
    }
}

palindromo('salas')
palindromo2('honda')
palindromo3('OPPO')
palindromo4('APPLE')