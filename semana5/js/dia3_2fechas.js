// Fechas
// Cambia por zona horaraio
// Recordemos que cambiar la hora pero el minuto y segundo se mantiene
// esto es manejable
// actualmente js tiene funciones que en base a la zona horaria
// van a setear la hora

// como podemos capturar la hora de nuestro navegador
// para poder obtener la hora en JS usamos no que new Date()

// Instanciar
//! recurden que cuando usamos new Clase y la guardamos en una variable
// esto se llama instaciar
//* Date() es una clase nativa de de JS, es decir viene con el lenguaje
const fecha = new Date();
console.log(fecha);
//* al usar new Date() tenemos acceso a diferentes funciones
//* que nos ayudan a extraer partes de la fecha

// Dia
const dia = fecha.getDate();
console.log("dia", dia);

// Mes
// Cuando hablamos de meses, debemos saber que en JS
// el mes empizar a desde 0
// Enero = 0
// Febrero = 1
// Marzo = 2
// Abril = 3
// Mayo = 4
// Junio = 5
// Julio = 6
// Agosto = 7
// Septiembre = 8
// Octubre = 9
// Noviembre = 10
// Diciembre = 11
const mes = fecha.getMonth() + 1;
console.log("mes", mes);

// Año
const year = fecha.getFullYear();
console.log("Year", year);

//  JS => La primera fecha que tiene es 1970
// Cuando usamos getTime nos va a retornar hora en milisegundo

// Podemos sacar la hora?
//getHours si retorna el numero de la hora
const hora = fecha.getHours();
console.log("hora", hora);

const minutos = fecha.getMinutes();
console.log("minutos", minutos);

const segundos = fecha.getSeconds();
console.log("segundos", segundos);

const milisegundos = fecha.getMilliseconds();
console.log("milisegundos", milisegundos);

// UTC => Es la hora global
const diaGlobal = fecha.getUTCDate();
console.log("dia globlal", diaGlobal);

// En teria la fecha es sttring

console.log("tipo",typeof fecha)
const fechaString=String(fecha)
console.log(" es string",typeof fecha)


//funcion ´permite tranfomar en array

const frase="Hola me llamo juan"
const frase2="como esta,bien supongo"
const frase3="Mi numero es 👩‍🦱 4444444"
console.log(frase.split(" "))
console.log(frase2.split(","))
console.log(frase3.split("👩‍🦱"))
console.log("fecha por string",fechaString.split(" "))
const pais=fechaString.split(" ")[9]
console.log("gaaaa",pais.replace(")",""))