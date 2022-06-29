
const lenguaje=['java','paiton','javas','javier','manuel']
const num=[2,1,8,10,15,61,2,45,12,30]



const la =lenguaje.find(pos=>pos=='jav')
 console.log(la)
 const n=num.find(pos=> pos>10)



 console.log(n)
const ty=lenguaje.some(pos=> pos=="jav")
console.log(ty)

const h=num.map((pos, index)=>{ if(pos>10 ){return pos}else{}})
console.log(h)