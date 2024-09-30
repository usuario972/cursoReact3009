const Persona=function (par1,par2,par3){
this.nombre=par1;
this.sexo=par2,
this.edad=par3
}



const p1=new Persona("Alejandro",true,54)
console.log(p1.nombre)
console.log(p1.sexo)
console.log(p1.edad)


console.log("Hello world!");
const array1=[0,1,2,3,4,5,6,7,8,9]

const [e1,e2,e3,e4,e5]=array1
const [o1,o2,o3,o4,o5]=array1
const [var1,var2,var3,var4,var5]=array1

console.log(e1)
console.log(o4)
console.log(var2)
console.log(...array1)
