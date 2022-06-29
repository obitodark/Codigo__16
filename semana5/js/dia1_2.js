



// evento onclick con function
// btnTest.onclick = function () {
//   console.log("Es un click");
// };

// const variableH1 = document.querySelector("#h1-test");
// variableH1.onclick = () => {
//   console.log("click desde el h1");
//   variableH1.innerText = "Cambiando el texto";
// };
    
//     // DOM
// // Document Object Model
// const variableH1 = document.querySelector("h1");
// // innerHTML = Se usa para escribir etiquetas
// // innerText = Para poder escribir dentro de las etiquetas
// variableH1.innerText = "Cambiando el valor del H1 desde JS";
// console.log(variableH1);
// // Podremos cambiar el title desde JS?
// document.title = "Lo hicimos en JS";

// // tagname = El nombre de la etiqueta
// // ejm
// // <h1> </h1> = h1
// // <div></div> = div

// // SEPAN QUE TAMBIEN PODEMOS MODIFICAR EL CSS
// // La forma en la cual podemos modifcar los estilos de nuestra
// // pagina es usando style

// //! Nota: Las propiedad son las misma que CSS sin embargo no usan guiones
// //! En JS se usa camellcase
// document.body.style.backgroundColor = "#c3c3c3";
// document.body.style.fontFamily = "Helvetica";

// //* Lo recomendable no es usar CSS dentro de JS
// variableH1.style.color = "blue";

// //! NOTA SUPER IMPORTANTE : EN JS TODO ES UN OBJETO






const btnTest = document.querySelector("#btn");
const h1variable=document.querySelector("h1")
// evento onclick con arrow function
h1variable.innerText = "Card Registro";
// btnTest.onclick = (e) => {
//     e.preventDefault();
    
//   console.log("Es un click");
// };
//! nota informacion de los u¿input siempre estara en el traget

const t=document.querySelector("#tab");

const user=[];

const form=document.querySelector("#form-user");
form.onsubmit = (e) => {
    e.preventDefault();
    const users={
        
    }
    // console.log(e.target);
    const formData =new FormData(e.target);
    // entreies de devuelve un array del name y el valor
    for(let dato of formData.entries()){
        // console.log("key", dato[0]);
        // console.log("value", dato[1]);
        // console.log("---------------");
        // users[key]=value
        users[dato[0]]=dato[1];

        console.log(dato[0],dato[1]);
       
    }
    
   user.push(users)

 user.forEach((va)=>{

    
 })


 ;

  const row= t.insertRow(-1);
  const cell=row.insertCell(0).innerText=users.name
  const cell2=row.insertCell(1).innerText=users.name
  const cell3=row.insertCell(2).innerText=users.lastname
  const cell4=row.insertCell(3).innerText=users.email
  const cell5=row.insertCell(4).innerText=users.phone

//   user.forEach((val,ide,ga)=> console.log("gaaa"+val));

console.log("fafafaffa",user[0].name)

//    t.innerHTML+="<tr> <th>"+users.name+"</th>  <th>"+users.name+"</th>  <th>"+users.lastname+"</th>    <th>"+users.email+"</th> <th>"+users.phone+"</th> </tr>"

}
let ga =15
// const alunnos=['juan','pepe','carlos']
// alunnos.forEach((dat)=> console.log("asdasdad  ${dat}"))

console.log('gasa : ${ga}')



 
//! foreach ka no exixte retur parametros values .index



















