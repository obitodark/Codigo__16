let valor=document.getElementsByClassName(" td");

for(let i=3;i<=24;i+=7){
    valor[i+2].innerText=Number(valor[i-1].innerText)-Number(valor[i].innerText)
    valor[i+3].innerText =Number(valor[i-1].innerText)*Number(valor[i].innerText)
     
    valor[i].style.color='green';
    valor[i+2].style.color='red';

    valor[i+3].style.background = '#141519';
    valor[i+3].style.color='#F1C65B';
    valor[i+3].style.borderRadius='20px' ;
    valor[i+3].style.textAlign='center' ;
    valor[i+3].style.lineHeight='40px' ;
    
}

