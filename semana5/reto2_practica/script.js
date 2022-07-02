let number=document.getElementById("number_bill"),
 btn=document.getElementsByClassName("btn"),
 peaplo=document.querySelector("#number_people"),
 monto=document.querySelector("#monto")
 total=document.querySelector("#total")
 reset=document.querySelector(".reset")
 ;




const n=number.value

// btn[0].onclick=()=>{

//     number.innerText="sdasd"
//     console.log("sdasd",(number.value/peaplo.value))
// }


reset.onclick=()=>{
    monto.innerText="$0.00";
    total.innerText="$0.00"
}

const pos=[0.05,0.1,0.15,0.25,0.5,0.75];
for(let i=0;i<btn.length;i++){
    btn[i].onclick=()=>{
      const valor=Number(((number.value*pos[i])/peaplo.value).toFixed(2));
        monto.innerText=`$${valor}`
       
        total.innerText=`$${((number.value/peaplo.value)+valor)}`

   
    }
    
};
// for(let i=0;i<btn.length;i++){
    
//     btn[i].onclick=()=>{
        
      
//         console.log("asd",Number(number)*3)
    
//     }
// };


//