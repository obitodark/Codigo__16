// let fruta=['pera','mazana','limon','fresa','naranja'];
// const alunnos=["juna","pepe","hugo","alex"]
// const num=[1,2,3,4,5,6]
// let ga=document.getElementById("container")
// ga.innerHTML="<h1>Bucles</h1>"
// // iter=0;
// while(iter <fruta.length){
//  const valor=prompt("ingrse el numero")

// for(let l=0;l<=8;l++){
//     ga.innerHTML+="<h1>tabla "+l+"<h1/>"
// for(let i=0;i<=10;i++){
//     ga.innerHTML+="<p >"+l+"x"+i+"="+i*l+"<p/>"
    
// }
// ga.innerHTML+="<hr>"
// }
  

// let productos=['mause','teclado','parlante','monitor','celular','adaptador','cargador']
    

// for( const producto of productos){
//     ga.innerHTML+="<h2 >"+producto+"<h2/>"

// }



// ga.innerHTML+="<p>"+fruta[iter]+"<p/>"

// iter++

// }

// let num2=num.map((m)=>m*3)
// console.log(num2)

// for( val of fruta){
//     if(val=="limon"){
//       break
//     }
//     ga.innerHTML+="<p>"+val+"<p/>"
// }

// for(const index in fruta){

//     ga.innerHTML+="<p>"+fruta[index]+"<p/>"
// }



// alunnos.forEach((name)=> ga.innerText="hola todos"+name)


// const num=6;
// ga.innerHTML="<h2>factorial "+num+"</h2>"
// let fa=1;

// for(let i=1;1<=num;i++){

//     fa*=i;
    
// }
// ga.innerHTML+="<h2>factorial "+fa+"</h2>"


let ga=document.getElementById("container")
ga.innerHTML="<h1>Primos -25</h1>"



// let g=0;
// for( i=17;i<=97;i+=10){
//    g+=i;
    
// }
// ga.innerHTML+="<h2>factorial "+g+"</h2>"

// let d=0;
// for(i=2;i<=25;i++){
//     for(j=1;j<=i;j++){

//      if(i%j==0){
//       d++;}
  
// }
// if(d==2){
//     ga.innerHTML+="<h2>primo :"+i+"</h2>"
// }
// }
// function esPrimo(numero) {
//      let ga=0;
//     for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
//         if(numero % i === 0) return false;
//     return numero > 1;
// }  
// for (let x=1;x>0;x++) {
//     if (esPrimo(x)){
//    
//     ga++}
//     if(ga==25){
//         break;
//     }
// }





// for(i=2 ;i<=200;i++){
//     for(k=2 ;k<=i;k++){
//      if(k!=i && i%k==0 ){
//         // ga.innerHTML+="<h2>"+k+"</h2>"
//         break
//         // ga.innerHTML+="<h2>"+k+"</h2>"
//         // if(i%k==0){
//         //     // ga.innerHTML+="<h2>NO"+i+"</h2>"
//         //    break
//         // }
//         // else{
//         //     ga.innerHTML+="<h2>primo :"+i+"</h2>"
//         // }
       
    
//      }else{
        
//         if(i>10&&i%3==0||i>10&& i%5==0||i>10&& i%7==0 || i>10&& i%9==0  ){}
//         else{
//         ga.innerHTML+="<h2>primo :"+i+"</h2>"
//         break}
       
        
//      }

  
//     }
//     ga.innerHTML+="<hr>"
 
// }

//! fdsfdsfdsfsdfdsf

// let contador=0;

// var tope=100;
// var i=1;
// var n=2;
// var primos = "";
// var primo = true;
// for (i=1; i<=tope; i+=2) {
//      primo = true;
//        for (n=2; n<=parseInt(Math.sqrt(i)); n++) {
//                  if (i%n==0 && i!=n){
//                    primo = false;
//               break;
//           }
//      }
//      if (primo==true) {
//         ga.innerHTML+="<h2>-"+i+"</h2>"

//      }
// }
//! fdsfdsfdsfsdfdsf
let m=0;
let array=[];
let primo=[];
let nuevo=[];
for(n=2;n<=100;n++){
     primo.push(n)
     for(m=2;m<=n;m++){
          if(m!=n){
               if(n%m==0){
                    array.push(n);
                   
                    break;
               }
               
               }
          }
     }

  array.forEach((name)=>  ga.innerHTML+="<h2>-"+name+"</h2>"  )
 ga.innerHTML+="<hr>"

 primo.forEach((n)=>  ga.innerHTML+="<h2>-"+n+"</h2>"  )
 
 ga.innerHTML+="<hr>"

 
 for(const index in primo){
     for(const ind in array){

          if(primo[index]==array[ind]){
               // ga.innerHTML+="<h2>"+primo[index] +"</h2>"
               primo.splice(index,1)
               
          }
     }
    
    

 } ga.innerHTML+="<hr>"
 
 for(c=0;c<=primo.length ;c++){
     ga.innerHTML+="<h2>"+primo[c] +"</h2>"
   
    
 }
 ga.innerHTML+="<h2> GA"+primo.length+"</h2>"