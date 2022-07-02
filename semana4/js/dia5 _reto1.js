
// function nameFuntion(){
//     const alumnos=['pepe','juan ','maria','luisa']
//     for(let alumno of alumnos){
//         console.log(alumno)
//     }
// }

// //tipos de funciones  puras
// nameFuntion()

// function cubo(){
//     return Math.pow(10,3)
// }
// const resultado=cubo();
// console.log("resultado",resultado)

// function potencia(num,potencia){
//     return Math.pow(num,potencia)
// }


// //   // pueden sucedr
// //   // Eso se llama validacion
// //   const n1 = Number(numero1);
// //   const n2 = Number(numero2);


// //   if (isNaN(n1) || isNaN(n2)) {
// //     return "No se pueden sumar";
// //   }

// //   return n1 + n2;


// // console.log("Suma", sumar(1, "10"));



// const ejemplo1=potencia(4,3)
// const ejemplo2=potencia(6,2)

// console.log(ejemplo1)
// console.log(ejemplo2)

// let suma=(a,b)=> a+b
// let m=0;
// let contador=0;
// let promedio=(a,b,c,d)=> (a+b+c+d)/4

// let promedi2=(...num)=>{
//     for(const n in num){
//         contador++
//       m+= num[n]
//     }
//     return m/contador

// }

// document.write("<h1> la suma es :"+suma(5,8)+"</h1>")

// document.write("<h1> el promedio es :"+promedio(15,12,10,13)+"</h1>")
// // document.write("<h1> el promedio es :"+promedio2(15,12,10,13)+"</h1>")



// let factorial=(num)=>{
//     const numero=Number(num);
//     if(isNaN(numero)){
//         //return mata la ejecucion
//         return "esto no es numero"
//     }
//      let total=1;
// for(let i=1;i<=num;i++)
// total*=i;
// }



// Paso 1 creo una funcion que me retorne el factorial


function multiplicar() {
  
  
  // 4 = 1 x 2 x 3 x 4 = 24
  const valor = Number(document.getElementById("input_number1").value);
  const content=document.querySelector(".containe");
  console.log(valor);
 
  content.innerHTML="<p> </p>";
 
  if (isNaN(valor)) {
    return "Esto no se puede hacer porque no es un numero";
  }


  for (let i = 1; i <= 12; i++) {
    
   


    content.innerHTML+="<p> "+valor+"X"+i +"="+(valor*i)+"</p>";
  
  }

    
  
}





