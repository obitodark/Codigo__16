class productos{

    constructor(_name,_precio,_anio){
        this.names=_name;
        this.precio=_precio;
        this.anio=_anio;
    }
    

}
class UI{

    addproduct(names){
       const lista= document.querySelector("product-list");
       const element=document.createElement("div")
       element.innerHTML= `
       <div class="card text-center mb-4">
           <div class="card-body">
               <strong>Product</strong>:  dasdasd ${productos.names} -
               <strong>Price</strong>: ${productos.precio} - 
               <strong>Year</strong>: ${productos.anio}
               <a href="#" class="btn btn-danger" name="delete">Delete</a>
           </div>
       </div>
   `;
       lista.appendChild(element);


    }
    deleteProduct(){

    }

    showMensage(){

    }
}
// document.querySelector("#product-form").addEventListener('submit',function(e){ 
// const nombre =document.querySelector("#name").values,
//  precio =document.querySelector("#price").values,
// anio=document.querySelector("#year").values;
// alert(nombre,precio,anio)
//  e.preventDefault();
// })

document
  .querySelector("#product-form")
  .addEventListener("submit",  (e)=> {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const names = document.querySelector("#name").value,
      price = document.querySelector("#price").value,
      year = document.querySelector("#year").value;

      const pro=new productos(names,price,year);
      const ui=new UI();
      ui.addproduct(pro);
     
   } )
    