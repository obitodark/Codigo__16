const btns_list_secundary=document.querySelectorAll(".btn_list_primary")
const img_arrow=document.querySelectorAll(".arrow_off")
const modo=document.querySelector("#modo")
const body=document.querySelector("body")

btns_list_secundary.forEach((btn_list_secundary,index)=>{
    btn_list_secundary.onclick=()=>{
        img_arrow[index].classList.toggle("arrow_on")
        let height = 0;
     
        let menu = btn_list_secundary.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
            
        }
   
        menu.style.height = `${height}px`;

    }
})
modo.onclick=()=>{
body.classList.toggle("dark")
    
}