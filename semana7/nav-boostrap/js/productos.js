class Specs {
  constructor() {
    this.brand = "";
    this.model = "";
    this.origin = "";
    this.category = "";
    this.name = "";
    this.weight = 0;
  }
}

class Comemts {
  constructor(_user, _comment) {
    this.user = _user;
    this.comment = _comment;
    this.starmtmt = 1;
  }
  setStars(stars) {
    this.stars = stars;
  }

  setUser(user) {
    this.user = user;
  }
}

class Article {
  constructor(_name, _brand) {
    this.id = "_" + Math.random().toString(36).slice(2);
    this.name = _name;
    this.brand = _brand;
    this.category = "";
    this.image = [];
    this.stars = 0;
    this.price = 0;
    this.price_off = 0;
    this.description = "";
    this.detail = [];
    this.assessment = [];
    this.discount = "";
    /* is true=  hombre*/
    this.gender = true;
  }
  setImage(imagen) {
    this.image.push(imagen);
  }

  getImage() {
    return this.image;
  }

  setCategory(categoria) {
    this.category = categoria;
  }

  setPrice(precio) {
    this.price = precio;
  }
  setAssessment(evaluacion) {
    this.assessment.push(evaluacion);
  }
  setPrice(precio) {
    this.price = precio;
  }

  setPriceOff(precio) {
    this.price_off = precio;
  }
  setAssessment(comment) {
    this.assessment = comment;
  }
  setGender(gender) {
    this.gender = gender;
  }
  setStars(stars) {
    this.stars = stars;
  }

  setDiscount(discount) {
    this.discount = discount;
  }

  setDescription(description) {
    this.description = description;
  }
}

let starsString = "";
const addStars = (total) => {
  for (i = 0; i < total; i++) {
    starsString += `<i class="bi bi-star-fill text-warning mx-1"></i>`;
  }

  return starsString;
};

let arrayProduct = [];

const producto3 = new Article("Sandalia Mujer 15263", "GOTTA");
producto3.setImage(
  "https://falabella.scene7.com/is/image/FalabellaPE/18424645_1?wid=1500&hei=1500&qlt=70"
);
producto3.setDiscount("30% DCTO");
producto3.setStars(4);
const producto2 = new Article("zapatilla mujer", "GOTTA");
producto2.setGender(false);
producto2.setImage(
  "https://falabella.scene7.com/is/image/FalabellaPE/17749935_2?wid=1500&hei=1500&qlt=70"
);
producto2.setStars(2);

const producto = new Article("ZAPATILLAS HOOPS ", "ADIDAS");
producto.setImage(
  "https://i.linio.com/p/b35c968e0c8e8d9e252b85b67c620b5b-product.webp"
);
producto.setImage(
  "https://i.linio.com/p/af6daaf951f552ff1a36a166931157af-product.webp"
);
producto.setImage(
  "https://i.linio.com/p/f5e630ebffca1119ca274733c7756ffb-product.webp"
);
producto.setImage(
  "https://i.linio.com/p/29422aef02b048ffd19e609969aee009-product.webp"
);
producto.setPrice(300);
producto.setPriceOff(450);
producto.setStars(5);
producto.setDiscount("70% DCTO");
const producto1 = new Article("Zapailla", "PUMA");
producto1.setImage(
  "https://i.linio.com/p/ebabe58dc1ccb010f488e4302e8d1199-product.webp"
);
producto1.setImage(
  "https://i.linio.com/p/81d2419f09a16fc33c32a915ba80a805-product.webp"
);
producto.setDescription(
  "Las zapatillas Adidas pasan por un minucioso examen de calidad, donde ponen a prueba hasta el mínimo detalle para que rindan al máximo y saquen lo mejor de ti.Adidas tiene zapatillas para niños y adultos, hombres y mujeres, todos disfrutan de la mejor calidad en calzado. Tiene los mejores modelos entre deportivos, casuales y urbanas, cada uno con un diseño distinto para cada estilo."
);
producto1.setStars(1);

arrayProduct.push(producto);
arrayProduct.push(producto1);
arrayProduct.push(producto2);
arrayProduct.push(producto3);
arrayProduct.push(producto);
arrayProduct.push(producto1);
arrayProduct.push(producto2);
arrayProduct.push(producto3);

const btn_search = document.querySelector("#input_search");
const input_bucar = document.querySelector("#input_Search");

btn_search.onclick = () => {
  div_article.innerHTML = "";
  // const filtro=laptops.filter(laptopp=>laptopp.nombre.toLowerCase().includes(text.toLowerCase())
  const filtro = arrayProduct.filter(
    (pos) =>
      pos.name.toLowerCase().includes(input_bucar.value.toLowerCase()) ||
      pos.brand.toLowerCase().includes(input_bucar.value.toLowerCase())
  );

  if (filtro.length == 0) {
    div_article.innerHTML = "<h1> Articulo no encontrado</h1>";
  }
  filtro.forEach((ga) => addProducts(ga));
  input_bucar.focus();
};

window.onload = function () {
  arrayProduct.forEach((po) => {
    addProducts(po);
  });
  console.log(arrayProduct);
};

const div_article = document.querySelector("#article");

function addProducts(objeto) {
  div_article.innerHTML += `<div id="${
    objeto.id
  }" class=" boxProduct  my-3 shadowBox ${
    objeto.brand
  }" style="width: 240px ;height: 410px ;background:#ffffff">
 <div class=" position-relative">
  <img
  src="${objeto.image[0]}"
  class=" imgRound card-img-top  mt-3   "
  alt="..."
/>
<h6
class="position-absolute top-0  end-0 mt-4 rounded-pill  badge py-3 px-2  bg-danger "
>${objeto.discount}</h6>
</div>

<div class="card-body">
  <h6 class="card-title text-uppercase">${objeto.name}</h6>
  <h6 class="text-uppercase text-secondary fw-5 text-uppercase">${
    objeto.brand
  }</h6>
  <div>
  ${addStars(objeto.stars)}
  </div>
  <div class="d-flex justify-content-between align-items-center">
    <h6>Price s/${objeto.price} <del class="text-secondary mx-3">s/${
    objeto.price_off
  }</del></h6>
    
  </div>
   <div class="justify-content-center">
    <button id="btn_buy_now" class="btnPrimary" onclick="verDetails(this)">Buy now</button>
   </div>

 
</div>
</div>`;
  starsString = "";
}

// const User =()=>{
//     const User={
//         name:"",
//         surname:"",
//         age:20,
//         email:"",
//         password:""

//     }
// }

const btn_buy_now = document.querySelector("#btn_buy_now");

// btn_buy_now.setAttribute("onclick", "verDetails(this)");
const div_detail_product = document.querySelector(".container_details");

function verDetails(div) {
  const ids = div.parentElement.parentElement.parentElement.id;

  const objeto = arrayProduct.find((taskk) => taskk.id == ids);
  console.log(objeto);

  div_article.innerHTML = `
<div class="card border-danger">
                 
                  <div class="header_detalle d-flex justify-content-between  border-danger">
                  <h2 >Detatalle</h2>
                  <input id="close_details" class="btn " type ="button" value="X">
                  </div>
                  <div class="subcontainer">
          
                    <div id="details_carrosuel_big_img" class="col-5 m-4  position-relative">
                     
                      <div id="details_carrosuel_small_img">
                      
                      
                      </div>
                    
                      
                    </div>
                   
          
          
                    <div class="col-5 m-4">
                     <div class="text border d-flex flex-column align-items-center" style="height: 300px;">
                      <h2>${objeto.name}</h2>
                     
                      <p class=" my-4">${objeto.description}</p>
                     </div>
                       <div class="form">
                        <h3 class="">$ ${objeto.price}<del class="px-3 text-secondary">${objeto.price_off}</del></h5>
                          <div class="col-6 form_spiner" >
                            <input class="form-control "  type="number" name="" value="1" min="1" id="">
                          </div>
                          
                        <div class="row justify-content-around my-4 " >
                          <button class="btn btn-primary col-4">Buy nows</button>
                          <button class="btn btn-outline-primary col-4">Add to Card</button>
                        </div>

                       </div>
                    </div>
          
                  </div>


                  <div class="detalle_tecnico py-5 row" style="height: 500px">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Detalle
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Especificaciones
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Comentarios
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content row" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi voluptatem commodi odio dolores illo consectetur,
                      eos rem nihil doloribus, impedit minus distinctio
                      architecto. Eos eum reprehenderit soluta rerum. Ab,
                      repellendus?
                    </div>
                    <div
                      class="tab-pane fade row"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div class="table-responsive col-6">
                        <table class="table col-5">
                          <thead>
                            <tr>
                              <th scope="col-">#</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Marca :</th>

                              <td>Otto</td>
                            </tr>
                            <tr>
                              <th scope="row">Modelo :</th>

                              <td>Thornton</td>
                            </tr>
                            <tr>
                              <th scope="row">Nombre :</th>

                              <td>the Bird</td>
                            </tr>

                            <tr>
                              <th scope="row">Categoria :</th>
                              <td>Nombre :</td>
                            </tr>

                            <tr>
                              <th scope="row">Origen :</th>

                              <td>the Bird</td>
                            </tr>
                            <tr>
                              <th scope="row">Peso:</th>

                              <td>the Bird</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade scrollspy-example"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div class="comentarios">
                        <div class="card">
                          <h5 class="card-title">obtio</h5>
                          <div class="card-body">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <p class="card-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Obcaecati qui id magni reprehenderit sequi.
                              Debitis asperiores doloribus sapiente iure
                              deserunt sit explicabo optio quaerat ducimus
                              perspiciatis mollitia, exercitationem accusamus
                              architecto.
                            </p>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-title">obtio</h5>
                          <div class="card-body">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <p class="card-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Obcaecati qui id magni reprehenderit sequi.
                              Debitis asperiores doloribus sapiente iure
                              deserunt sit explicabo optio quaerat ducimus
                              perspiciatis mollitia, exercitationem accusamus
                              architecto.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

`;

  createImageBig(objeto);
  createImgeSmall(objeto);

  const url = new URL("https://api.chec.io/v1/assets");

  let headers = {
    "X-Authorization": "{token}",
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

// const containerImageBig = "";
// function createImage(objeto) {
//   objeto.image.forEach((img, index) => {
//     containerImageBig += `<div id="ima" class="carousel-item ${
//       index == 0 ? "active" : ""
//     }">
//         <img
//         src="${img}"
//         class="d-block w-100 "
//         onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
//         alt="...">
//     </div>`;
//   });

//   return containerImageBig;
// }

function createImge(objeto) {
  let valor = [];
  objeto.image.forEach((obj, index) => {
    valor.push(`
    <div  class="carousel-item ${index == 0 ? "active" : ""}">
        <img 
        src="${obj}" 
        class="d-block  " 
        onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
        alt="...">
     </div>
    `);
  });

  return valor;
}
const createImageBig = (objeto) => {
  const divCarrusuelBigImg = document.querySelector(
    "#details_carrosuel_big_img"
  );

  divCarrusuelBigImg.innerHTML += `
  <div id="carousel" class="carousel slide " data-bs-ride="true"> 
                            
  <div class="carousel-inner">

      ${createImge(objeto)}
 </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>

  `;

  console.log(createImge(objeto));
};

function imageSmall(objeto) {
  let valor = [];
  objeto.image.forEach((image, index) => {
    valor.push(`
    <button
    class="my-3 btn_img ${index == 0 ? "active" : ""} type="button" 
      data-bs-target="#carousel"
      data-bs-slide-to="${index}"
      aria-current="true"
      aria-label="Slide ${index + 1}">
      <img 
      class="d-block w-100"  
      src="${image}"
      onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
      class="img-fluid btn_img"
      >
 </button>

    `);
  });
  return valor;
}

function createImgeSmall(objeto) {
  const divCarrusuelSmallImg = document.querySelector(
    "#details_carrosuel_small_img"
  );
  divCarrusuelSmallImg.innerHTML = `
 
    <div class="carousel-indicators  "  >

      ${imageSmall(objeto)}

    
    
    </div>
 `;

  console.log(imageSmall(objeto));
}

// function verDetails(div) {
//   const ids = div.parentElement.parentElement.parentElement.id;

//   const objeto = arrayProduct.find((taskk) => taskk.id == ids);
//   console.log(objeto);

//   div_article.innerHTML = `
// <div class="card border">

//                   <div class="header_detalle d-flex justify-content-between">
//                   <h2 >Detatalle</h2>
//                   <input id="close_details" class="btn " type ="button" value="X">
//                   </div>
//                   <div class="subcontainer">

//                     <div class="col-5 m-4  position-relative">
//                       <div id="carousel" class="carousel slide " data-bs-ride="true">
//                         <!-- btn_imagen -->

//                         <div class="carousel-inner">
//                           <div class="carousel-item active">
//                            <img
//                             src="${objeto.image[0]}"
//                             class="d-block w-100 "
//                             onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
//                             alt="...">
//                           </div>

//                           <div class="carousel-item">
//                               <img
//                               src="${objeto.image[1]}"
//                               class="d-block w-100"
//                               onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
//                               alt="...">
//                           </div>

//                           <div class="carousel-item">
//                                <img src="${objeto.image[2]}"
//                                onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
//                                class="d-block w-100"
//                                alt="...">
//                           </div>
//                         </div>

//                         <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
//                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                           <span class="visually-hidden">Previous</span>
//                         </button>
//                         <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
//                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                           <span class="visually-hidden">Next</span>
//                         </button>
//                       </div>
//                       <div class="carousel-indicators    gaga"  >

//                         <button
//                          class="my-3 btn_img active" type="button"
//                             data-bs-target="#carousel"
//                             data-bs-slide-to="0"
//                             aria-current="true"
//                             aria-label="Slide 1">
//                          <img
//                            class="d-block w-100"
//                             src="${objeto.image[0]}"
//                             onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
//                             class="img-fluid btn_img"
//                             >
//                           </button>

//                           <button
//                           class="my-3 btn_img active" type="button"
//                              data-bs-target="#carousel"
//                              data-bs-slide-to="1"
//                              aria-current="true"
//                              aria-label="Slide 2">
//                           <img
//                             class="d-block w-100"
//                              src="${objeto.image[1]}"
//                              onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
//                              class="img-fluid btn_img"
//                              >
//                            </button>

//                            <button
//                           class="my-3 btn_img active" type="button"
//                              data-bs-target="#carousel"
//                              data-bs-slide-to="2"
//                              aria-current="true"
//                              aria-label="Slide 3">
//                           <img
//                             class="d-block w-100"
//                              src="${objeto.image[2]}"
//                              onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
//                              class="img-fluid btn_img"
//                              >
//                            </button>

//                       </div>

//                     </div>

//                     <div class="col-5 m-4">
//                      <div class="text border d-flex flex-column align-items-center" style="height: 300px;">
//                       <h2>${objeto.name}</h2>

//                       <p class=" my-4">${objeto.description}</p>
//                      </div>
//                        <div class="form">
//                         <h3 class="">$ ${objeto.price}<del class="px-3 text-secondary">${objeto.price_off}</del></h5>
//                           <div class="col-6 form_spiner" >
//                             <input class="form-control "  type="number" name="" value="1" min="1" id="">
//                           </div>

//                         <div class="row justify-content-around my-4 " >
//                           <button class="btn btn-primary col-4">Buy nows</button>
//                           <button class="btn btn-outline-primary col-4">Add to Card</button>
//                         </div>

//                        </div>
//                     </div>

//                   </div>
// `;}
