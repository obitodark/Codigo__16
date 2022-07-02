


    //dom 
    const lista=document.querySelector("#list")
    const inputTask=document.querySelector('#new_task')

//     const tarea1=new Task("tomar desayuno")
//     const elementoejemplo=tarea1.createElement();
// console.log(elementoejemplo)
 
const arrayTasks=[]

const addTask=()=>{
if(inputTask.value ==""){

    alert("ingrese un texto para la tarea")
    return;
}

const tasks=new Task(inputTask.value)
arrayTasks.push(tasks)
console.log(tasks)
document.querySelector('.form').before(tasks.createElement())
inputTask.value="";
inputTask.focus();
}


const checkTask=(checkbox)=>{
    if(checkbox.checked){

    parenTask(checkbox).done();
    checkbox.setAttribute('disabled',true)

    }}

   
    const deleteTask=(anchor)=>{
          parenTask(anchor).delete()
    }


 const updateTask=(anchor)=>{
const text=prompt("ingrese el texto")
parenTask(anchor).update(text)

 }
    
 const parenTask=(element)=>{
  const task_id=element.parentElement.id;
    return arrayTasks.find(taskk=> taskk.id==task_id);
 }

  

    const chxTaskDone = document.querySelector("#chx_task_done");
    chxTaskDone.onchange = function () {
        showOrHideElement(this.checked, ".todo", ".delete"); 
    };

    const chxTaskDelete=document.querySelector("#chx_task_delete");
    chxTaskDelete.onchange = function () {
        showOrHideElement(this.checked, ".todo", ".done");
    };
    

    const checkPendiente=document.querySelector("#chx_task_todo")
    checkPendiente.onchange = function () {
        showOrHideElement(this.checked, ".delete", ".done");
    };
    
 

  function showOrHideElement(checked, typeOne, typeTwo) {
    const elementsOne = document.querySelectorAll(typeOne);
    const elementsTwo = document.querySelectorAll(typeTwo);
  
    if (checked) {
      elementsOne.forEach((todo) => (todo.style.display = "none"));
      elementsTwo.forEach((task) => (task.style.display = "none"));
    } else {
      elementsOne.forEach((todo) => (todo.style.display = "block"));
      elementsTwo.forEach((task) => (task.style.display = "block"));
    }
  }