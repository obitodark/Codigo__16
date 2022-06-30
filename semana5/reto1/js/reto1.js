
  const container=document.querySelector(".container");



  let createCard=(array)=>{
container.innerHTML=""

if(array.length==0){
  container.innerHTML="<h1 style='color:white'>No se encontro Resultados<h1/>"
  return
}
    array.map((laptop) => {
      // ahora en esta seccion vamos a crear los card
      // Esto es JS se llama template string => ``
      // Sirve para poder tener texto y variable juntos
      // return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
      container.innerHTML += `
  
      <div class="card">
        <!-- <h4 class="title">MacBook Pro</h4> -->
        <img class="ima_box"
          src="${laptop.imagen}"
          alt=""
          
        />
        <div class="container-price">
          <p class="name">${laptop.nombre} </p>
          <p class="empres">${laptop.marca}</p>
         <div class="box-price">
           <p class="price"> ${laptop.precioNormal}</p>
           <p class="sale-price">S/ ${laptop.precioOferta}</p>
         </div>
        </div>
        <button class="btn-buy">Comprar</button>
      </div>
  
       `;
    });

  }

// 
createCard(laptops);

const modal_close=document.querySelector('.modal_close')
const btm=document.getElementsByClassName("btn-buy")
const modal=document.querySelector(".modal")
const img=document.querySelector('.modal_img')
const nombre=document.querySelector('.modal_title')

const btnSearch=document.querySelector('.btn_search')
const inputSearch=document.querySelector('.search')
const clear=document.querySelector('.clear')

clear.onclick=()=>{
inputSearch.value=""
  createCard(laptops)
  fModal(btm)
}


btnSearch.onclick=()=>{

const text=inputSearch.value

if(text==""){
  alert("campo vacio")
  return
}

const filtro=laptops.filter(laptopp=>laptopp.nombre.toLowerCase().includes(text.toLowerCase())
|| laptopp.marca.toLowerCase().includes(text.toLowerCase()))
createCard(filtro)
fModal(btm)

}
let img_array=[]

const fModal=(arrayBtn)=>{

  for(let a=0;a<arrayBtn.length;a++){
    img_array[a]=document.getElementsByClassName('ima_box')[a].src
    btm[a].onclick=(e)=>{
      e.preventDefault();
    
      
      modal.classList.add('modal_show')
      img.src=`${img_array[a]}`;
      nombre.textContent=`${laptops[a].nombre}`
      console.log( "aaaaaaaa",img_array)
    } 

    }

}

// const ima=document.querySelector('.modal_img').src
// console.log(" data",ima)

fModal(btm)

  // for(let a=0;a<btm.length;a++){
  // btm[a].onclick=(e)=>{
  //   e.preventDefault();
  //   modal.classList.add('modal_show')
  //   img.src=`${laptops[a].imagen}`
  //   nombre.textContent=`${laptops[a].nombre}`
  // }
  // }

  // modal.onclick=(e)=>{
  //   e.preventDefault();
  //   modal.classList.remove('modal_show')

  // }
  modal_close.onclick=(e)=>{
    e.preventDefault();
    modal.classList.remove('modal_show')

  }
  console.log("asdasasd",btm)
  // document.getElementById("myImageId").src="newSource.png";


