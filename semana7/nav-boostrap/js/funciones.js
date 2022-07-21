const div_list_article = document.getElementById("container_list_product");
const img_product = document.getElementById("#image_product");

window.onload = function () {
  arrayProduct.forEach((po) => {
    createListArticle1(po);
  });

  console.log("div", div_list_article);
};

const url = "https://dabsejson.000webhostapp.com/datajson.json";

// function ver(datos) {
//   datos.forEach((dato) => {
//     console.log(dato.name);
//   });
// }

function ver(btn) {
  const ids = btn.parentElement.parentElement.parentElement.id;
  console.log(ids);
  // const objeto = arrayProduct.find((taskk) => taskk.id == ids);
}

function ajax(urls) {
  const http = new XMLHttpRequest();
  const url = urls;
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      document.querySelector("#container_modul").innerHTML = this.responseText;
    }
  };
  http.open("GET", url);
  http.send();
}

fetch(url)
  .then((response) => response.json())
  .then((datos) => createArticle(datos.article));

function createArticle(datos) {
  datos.forEach((article) => {
    div_list_article.innerHTML += `
    <div 
      id="${article.id}"
      class=" Product card border mx-2 my-3" 
      style="width: 13rem"
      >
                <div id="image_product" class="p-2" position-relative>
                   
                   <figure>
                   <img
                      
                       onmouseover="this.src='${
                         article.image[1] == null
                           ? article.image[0]
                           : article.image[1]
                       }'"
                       onmouseout="this.src='${article.image[0]}'"
                      
                       id="image_product"
                       style=""
                       src="${article.image[0]}"
                       class="card-img-top "
                       alt="..."
                    />
  
                   
                   </figure>
                    
                    <h6
                      class="position-absolute start-0 top-0  badge  bg-danger
                      ${article.discount == "" ? "p-0" : "py-3 px-2 "}  "
                      >${article.discount}
                      </h6>
                 </div>
  
                <div class="card-body  ">
                   <h6 class="card-title text-capitalize" >${String(
                     article.name
                   ).toLowerCase()}</h6>
                   <h6 class="text-uppercase text-secondary ">
                      ${article.brand}
                   </h6>
                   <div class="stars">
                      ${createStars(article.stars)}             
                    </div>
  
                  <div class="d-flex">
                    <h6 class="text-danger fw-bold">$${article.price}</h6>
                    <h6 class="mx-3">
                      <del class="text-secondary fw-bold">$${
                        article.price_off
                      }</del>
                    </h6>
                  </div>
  
                  <div class="d-flex justify-content-center row">
                    <a href="#" onclick="ajax('http://127.0.0.1:5500/semana7/nav-boostrap/detalle_product.html')" class="btn btn-warning col-10">Buy now</a>
                  </div>
  
              </div>
  
    `;
  });
}
function createStars(number) {
  let text_stars = "";
  for (let i = 0; i < number; i++) {
    text_stars += ` <i class="bi bi-star-fill text-danger"></i>`;
  }

  return text_stars;
}

function createDescont(descount) {}

function createListArticle1(article) {
  div_list_article.innerHTML += `
  <div 
    id="${article.id}" 
    class=" Product card border mx-2 my-3"
     style="width: 13rem
   ">
              <div id="image_product" class="p-2" position-relative>

                 <figure>
                 <img

                     onmouseover="this.src='${
                       article.image[1] == null
                         ? article.image[0]
                         : article.image[1]
                     }'"
                     onmouseout="this.src='${article.image[0]}'"

                     id="image_product"
                     style=""
                     src="${article.image[0]}"
                     class="card-img-top "
                     alt="..."
                  />

                 </figure>

                  <h6
                    class="position-absolute start-0 top-0  badge  bg-danger
                    ${article.discount == "" ? "p-0" : "py-3 px-2 "}  "
                    >${article.discount}
                    </h6>
               </div>

              <div class="card-body  ">
                 <h6 class="card-title text-capitalize" >${String(
                   article.name
                 ).toLowerCase()}</h6>
                 <h6 class="text-uppercase text-secondary ">
                    ${article.brand}
                 </h6>
                 <div class="stars">
                    ${createStars(article.stars)}
                  </div>

                <div class="d-flex">
                  <h6 class="text-danger fw-bold">$${article.price}</h6>
                  <h6 class="mx-3">
                    <del class="text-secondary fw-bold">$${
                      article.price_off
                    }</del>
                  </h6>
                </div>

                <div class="d-flex justify-content-center row">
                  <a href="#" class="btn btn-warning col-10">Buy now</a>
                </div>

            </div>

  `;
}
