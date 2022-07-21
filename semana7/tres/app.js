const arrayGames=[
    {

    }
]

window.onload=(function(){
const container=document.querySelector("#container");

for( i=0;i<9;i++){
    const div_container=document.createElement("div")
    div_container.setAttribute("id",`${i}`)
    div_container.setAttribute("class","item")
    div_container.setAttribute("onclick","ver(this)")
    div_container.style.width="100px"
    div_container.style.height="100px"
    div_container.style.background="red"
    
    container.append(div_container);

}

})
 const ids=[];
 let i=1;

 function ver(d){
    const imagen=document.createElement("img")
    imagen.style.border="1px black solid"

    imagen.src=i%2==0?"xx.png":"redo.png"

   
 
    imagen.style.width="100px"
    d.append(imagen)
    let id=d.getAttribute("id")
    ids.push(id)
   d.setAttribute("onclick","")
   i++
    // alert(`${ id }`)
    // console.log("asda",div.getElementById())
}
// const comprobar=(cod)=>{
//  const ga=ids.find(id=>id==cod)
//  ga.removeEventListener("click",ver(this))
// }