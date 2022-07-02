
let nombre=prompt("Cual es tu nombre?")
let genero=prompt("Cual es tu genero,\n 1= masculino \n  2=femenino" )
let edad=prompt("Cual es tu edad")
let nota=prompt("Cual es Nota \n nota: 0 a 10")

let color
let resultado;
let categoria;


if(nota<=3){
  resultado="Muy deficiente"
  color= "red";
}
else if(nota<=5){
    resultado="Insuficiente"
    color="red";
}
else if(nota<=7){
    resultado="Bien"
    color= "yellow";
}
else if(nota<=9){
    resultado="Notable"
    color= "green";
}
else {
    resultado="Sobresaliente"
    color= "green";
}

if(genero==1){
categoria=edad>=35 ? "El Sr.":" El Joven"
}
else{
    categoria=edad>=50 ? "La Sra.":"La Srta"

}
document.write("<h1>"+categoria+nombre+" "+"("+edad+" años) ,Tiene una Nota de :"+nota+" Es :<h1 style='color:"+color+" '>"+resultado+"</h1></h1>")