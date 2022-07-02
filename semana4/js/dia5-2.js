let restar=(a,b=5)=> a-b

console.log("restar",restar(6))

console.log("restar",restar(6,3))


// las funciones anonimas  no tine acceso a this 
// las funcion anonimas tienes un  inicializacionde un varible
// funcion anonima t

const alumnos=[]
const imprimirAlumnos = () => {
    const inputNombre = document.querySelector("#input_name");
    const nombre = inputNombre.value;
    // Estamos agregando el alumnos al array
    alumnos.push(nombre);
    // Estamos indicando el value del input es igual cuando hacemos estos
    // estamos limpiado el contenido del input
    inputNombre.value = "";
    const resultado = document.querySelector(".resultado");
  
    // Siempre debemos limpiar el espacio del resultado antes del for
    resultado.innerHTML = "";
  
    for (let alumno of alumnos) {
      // += es adicion es una suma la
      //  resultado.innerHTML = resultado.innerHTML + "<p>" + alumno + "</p>";
      // Indica que al contenido anterior le agremos esto si yo no uso el +=
      // va a reemplazar el contenido
      resultado.innerHTML += "<p>" + alumno + "</p>";
    }
  };

  let calcular=()=>{
    let array=[];
    let valor=0
    const resultado1= document.querySelector(".resultado")
    for(let k=1;k<=4;k++){
      array[k] = Number(document.querySelector("#input_name"+k).value);
    }

for(const n in array){
   valor+=array[n]
   if(isNaN(array[n])) { return  resultado1.innerHTML = "<p>  no es numero</p>"; 
    }

    if(array[n]>20){
     return   resultado1.innerHTML = "<p> tine que ser menor = 20</p>"; 
    }
  }

let res=(valor)/array.length
    resultado1.innerHTML = "<p> El promedio es :" + res + "</p>";

  }