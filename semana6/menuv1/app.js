const btns_list_secundary=document.querySelectorAll(".btn_list_primary")
const btn_img_arrow =document.querySelectorAll(".img_arrow")


btns_list_secundary.forEach((btn_list_secundary,index)=>{
    btn_list_secundary.onclick=()=>{
        btn_img_arrow[index].classList.toggle("img_arrow_toogle")
        let alto=0;
     
        let menu = btn_list_secundary.nextElementSibling;
        if(menu.clientHeight == "0"){
           alto=menu.scrollHeight;
            
        }
   
        menu.style.height = `${alto}px`;
    }
})

// let height = 0;
     
//         let menu = btn_list_secundary.nextElementSibling;
//         if(menu.clientHeight == "0"){
//             height=menu.scrollHeight;
            
//         }
   
//         menu.style.height = `${height}px`;