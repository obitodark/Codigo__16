
coche={};

coche['color']="dia";
coche['modelo']="honda"
coche['marca']="honda";

// for(const co of coche){
//     console.log(co)
// }
console.log(Object.values(coche))

var car=new Object();

car.modelo='camion';
car.color='verde4'
car.marca='toyota'

console.log(Object.values(car))
console.log(car.marca)

const container=document.querySelector(".container");

class carro{
    constructor(_color,_velocidad){
        this.color=_color;
        this.velocidad=_velocidad;
    }

    presentacion(){
     
        const text ="hola soy carro de color "+this.color+"tengo una velocidad de "+this.velocidad
    
    return text;
    }
    //establece o modifica
    setColor(_color){
     
        
     this.color=String(_color)[0].toUpperCase()+String(_color).substring(1);
     
   }
     //retorna un valor
     getColor=()=> this.color

   
   setVelocidad(_nueva_velocidad){
    this.velocidad=_nueva_velocidad+" "+"Kmh"
   }
   //camelCasse _primeraPalabra
   // trainCase palabra1-pablabra2
   //snake_case palabra1_palabra2
}



getVelocidad=()=> this.velocidad

// let array=[]

// let xcarros=(numero, ...rest)=>{
//     for(let i=0;i<numero;i++){
//     array[i]=new carro('rojo',rest[i]);
//     container.innerHTML+="<hr>"
//     container.innerHTML+="<h1> nro:"+(i+1)+" :"+array[i].presentacion()+"</h1>"
//     }
//     }

//     xcarros(7,500,200,300,50,0,30,100);

const carro_rojp = new carro('rojo',200);
const carro_azul=new carro('blue',50);
const carro_verde = new carro('verde',150)

// carro_azul.color="negro"
carro_azul.setColor('blue');
carro_azul.setVelocidad(200);
// carro_rojp.setColor("negro")

container.innerHTML+="<hr>"
container.innerHTML+="<h1>"+carro_rojp.getColor()+"</h1>"
// container.innerHTML+="<h1>"+carro_azul.getVelocidad()+"</h1>"
container.innerHTML+="<hr>"
container.innerHTML+="<h1>"+carro_azul.getColor()+"</h1>"

container.innerHTML+="<hr>"



class cuadrado{
constructor(_lado){
    this.lado=_lado
}

 get area(){
    return (Math.pow(this.lado,2))+"m2"
}

set area(_area){
 this.lado =Math.pow(this.lado,2)
}
     


}

const c=new cuadrado(4);
c.lado=5
container.innerHTML+="<h1>"+c.area+"</h1>"
container.innerHTML+="<hr>"
 c.area=13
container.innerHTML+="<h1>"+c.area+"</h1>"
container.innerHTML+="<hr>"


class User{
    static cantidad=0;

    constructor(_id,_name1,_name2){
        User.cantidad++;
        this.id=_id
        this.name1=_name1
        this.name2=_name2
        this.id=User.cantidad
        
    }

    get fullName(){
        return this.name1+" "+this.name2
    }
    set fullName(_fullName){
        this.name1=_fullName.split("")[0].toUpperCase()
        this.name2=_fullName.split("")[1].toUpperCase()
    }

    static getCantidad(){
        return User.cantidad
    }
}
const u= new User(1,"pepe","garcia")
const u1= new User(1,"marco","garcia")
const u2= new User(1,"javier","garcia")

// u.fullName="jaime garcia"

container.innerHTML+="<h1>"+u.fullName+"</h1>"
container.innerHTML+="<hr>"
container.innerHTML+="<h1>"+u1.fullName+"</h1>"
container.innerHTML+="<hr>"
container.innerHTML+="<h1>"+u2.fullName+"</h1>"
container.innerHTML+="<hr>"
container.innerHTML+="<h1>"+User.cantidad+"</h1>"
container.innerHTML+="<hr>"
