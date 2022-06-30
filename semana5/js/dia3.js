
const edades=[10,20,30,40]

const d=edades.every(edad=> edad>20)

console.log(d)
const d2=edades.every(edad=> edad!="")
console.log(d2)

const alumnos=[
    {
        name:"pepe",
        age:21
    },

    {
        name:"Luis",
        age:18
    },

    {
        name:"Maria",
        age:19
    },
]
//! every & si uno de los lementos no cumple con condicion es false
//! some || si uno de los elemento cumple la condicion es true
const al=alumnos.every(alumno=>alumno.age >=18)
console.log("es mayor",al)

const precios =[120,314,121,873];
const pre= precios.some(precio=>precio%2==0)

console.log("precios pares",pre)
//!