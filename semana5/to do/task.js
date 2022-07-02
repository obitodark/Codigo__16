class Task{
 
    constructor(_texto,){
        this.id ="_" + Math.random().toString(36).slice(2);
        this.texto=_texto;
       this.statuss='todo';
       this.create_at=new Date();
    //    this.priority=""
       this.done_at=null;
       this.delete_at=null;
       this.dia=this.create_at.getDate();

    }


    changeStatus(status) {
        this.status = status;
    
        status === "delete"
          ? (this.deleted_at = new Date())
          : (this.done_at = new Date());
    
        const element = document.querySelector("#" + this.id);
        
        element.classList.add(status);
        element.classList.remove("todo");
        console.log(element)
      }
    
      done() {
        this.changeStatus("done");
      }
    
      delete() {
        this.changeStatus("delete");
      }

      update(nextext){
        const element = document.querySelector("#" + this.id);
      element.children[1].textContent=nextext;
      

       }


    createElement(){
        
        const element =document.createElement('p');
        element.setAttribute('id',this.id)
        element.setAttribute('class','task todo')
        element.innerHTML=`

        <input type="checkbox" onchange="checkTask(this);">
            <span>${this.texto} </span>
            <a class="cerrar"  onclick="deleteTask(this);">x</a>
             <a class="editar" onclick="updateTask(this);" >🖍</a>
           
            `;
            return element;
    }





    
    }