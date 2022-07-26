const btn_fech = document.getElementById("fech");
const ul_list_task = document.getElementById("getTask");
const getlist = document.getElementById("btn_fech");
const input_text = document.getElementById("input_text");

function getMensaje() {
  return new Noty({
    type: "error",
    layout: "topRight",
    layout: "bottomRight",
    text: "error campo vacio",
  }).show();
}
getlist.onclick = () => {
  if (input_text.value == "") {
    return getMensaje();
  }

  console.log("asssssssssssssssssssssssssss");
};

btn_fech.onclick = () => {
  console.log("dsadasads");
  fetch("http://localhost:3003/tasks")
    .then((response) => response.json())
    .then((data) => renderList(data.task));
};

function renderList(data) {
  data.forEach((dat) => {
    ul_list_task.innerHTML += `
    <li id="${dat.id}" class="list-group-item d-flex justify-content-between">
    <h6> ${dat.text}</h6> 
   <div>
   <button class="btn btn-warning btn-sm"> <i class="bi bi-pen"></i></button>
   <button id="btn_delete"  onclick="getid(this)" class="btn btn-danger btn-sm"> <i class="bi bi-trash"></i></button></div>
    </li>
    `;
  });
}

function getid(id) {
  const li_id = id.parentElement.parentElement.id;
  console.log("id es :", li_id);
}
