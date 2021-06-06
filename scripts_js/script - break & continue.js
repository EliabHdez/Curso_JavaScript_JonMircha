/* 
    Break & Continue

    Estos se basan en las posiciones de los elementos/atributos y no en su valor
*/

const numeros = [10,20,30,40,50,60,70,80,90,100]

for(let i = 0; i < numeros.length; i++){
    if(i === 5){ // El 5 representa una posicion dentro del array, esta posicion la ocupa el numero 60, ya que como sabemos las posiciones comienzan con el numero 0
        break
    }
    console.log(numeros[i]);
}
// Break lo que hace es que rompe y detiene la ejecucion del codigo en el momento en que se cumple la condicion. En el caso anterior en particular lo que hace el break es que cuando la condicion se cumple y la i llega a la posicion 5 del array y vale esta misma en ese momento rompe la ejecucion y detiene esta misma

console.log('******continue*******');

for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        continue
    }
    console.log(numeros[i]);
}
// Continue lo que hace es que en el momento que se cumple la condicion, brinca/rompe por decirlo de alguna manera esa ejecucion o la iteracion de esa vuelta y continua con la ejecucion del codigo. En el caso anterior en particular lo que hace es cuando i llega a la posicion 5 y vale esta misma brinca el valor que se encuentra en esta posicion y continua ejecutando el bucle hasta su final, sigue cumpliendo con el ciclo

const numbers = [1,2,3,4,5,6,7,8,9,10]
const numbers2 = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < numbers.length; i++){
    if(i % 2 === 0){
        continue
    }
    console.log(numbers[i]);
}
for(let i = 0; i < numbers2.length; i++){
    if(i % 2 != 0){
        continue
    }
    console.log(numbers2[i]);
}