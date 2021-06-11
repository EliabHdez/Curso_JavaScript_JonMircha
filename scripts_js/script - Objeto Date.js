// Date --> Hace referencia a la fecha, hora y zona horaria
    // Los dias de la semana y los meses, js los representa con números y estos van desde el 0 al 6 para los días de la semana y del 0 al 11 para los meses debido que js hace un array con estos y su index o posicion es igual que cualquier otro array, empezando en 0

console.log(Date());

let fecha = new Date()
console.log(fecha);

console.log(fecha.getDay());
    // Dia de la semana representado con número. Siendo los dias Dom - 0, Lun - 1, Mar - 2, Mier - 3, Jue - 4, Vier - 5, Sab - 6
console.log(fecha.getDate());
    // Este da el dia del mes
console.log(fecha.getMonth());
    // Mes del año representado con número. Siendo los meses Ene - 0, Feb - 1, Mar - 2, Abr - 3, Mayo - 4, Jun - 5, Jul - 6, Ago - 7, Sept - 8, Oct - 9, Nov - 10, Dic - 11
console.log(fecha.getFullYear());
    // Este da el año
console.log(fecha.getHours());
    // Hora del dia
console.log(fecha.getMinutes());
    // Minutos del dia
console.log(fecha.getSeconds());
    // Segundos del dia
console.log(fecha.getMilliseconds());
    // Milisegundos del dia
console.log(fecha.toString());
    // Este viene siendo lo mismo que el objeto Date, como el 1ro
console.log(fecha.toDateString());
    // Este nos da la hora digamos que en formato de programacion o en formato extranjero - dia semana, mes, dia mes y año
console.log(fecha.toLocaleString());
    // Este nos da la fecha y hora de manera mas entendible
console.log(fecha.toLocaleDateString());
    // Este nos da solo la fecha digamos que con formato local, dia, mes, año separados por la barra diagonal (/)
console.log(fecha.toLocaleTimeString());
    // Este nos da solo la hora
console.log(fecha.getTimezoneOffset());
    // Este nos da la diferencia de la zona horaria con respecto al meridiano pero en minutos. México esta -5 horas al meridiano o la hora zero, por lo tanto estamos 300 minutos por detras de la hora zero (hay 300 min en 5 horas)

// Todo lo relacionado con UTC hace referencia a la hora y fecha que corresponde al meridiano o al universal time (UTC)

console.log(fecha.getUTCDate());
    // Este da el mes con respecto al universal time, la hora del meridiano, por lo tanto estariamos obteniendo el mes en el que esta Londres
console.log(fecha.getUTCDay());
    // Este da el dia de la semana con respecto al universal time
console.log(fecha.getUTCHours());
    // Este da la hora del dia con respecto al universal time
console.log(Date.now());
    // Este representa el timestamp, esto quiere decir que representa los segundos que han transcurrido desde el 1 de Enero de 1970 hasta el momento en el que el Date.now se ejecuta

// Hay varias formas de pasarle datos al Objeto Date, como por ejemplo una fecha de un cumpleaños

let cumpleMoy = new Date(1990,8,25)
console.log(cumpleMoy);
    // Esto me da la fecha en un formato tipo Date del 25 de Septiembre de 1990