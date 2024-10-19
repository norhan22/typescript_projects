type ArrayMulti = (string|number|string[])[]; // custom type

const arrayMD:ArrayMulti=[1,2,3,'one','two','three',['A','B']];
console.log(arrayMD)
///////////////////////////////////////////////
// Advanced
type Name={
    firstName:string,
    lastName:string
}
const getFullName  =(name:Name):string=> name.firstName+' '+name.lastName;

console.log(getFullName({firstName:'Norhan',lastName:'Mohammed'}))

type FullName =  Name &{
    middleName:string
}
const  getFullName2 =(name:FullName):string=> name.firstName+' '+name.lastName;

console.log(getFullName2({firstName:'Norhan',lastName:'Ali',middleName:'Mohammed'}))

// Literal type (values)
type Result ='Positive'|'Negative'
const checkNegativety=(num):Result=> {
    if(num>0) return "Positive"
    else return 'Negative'
}
console.log(checkNegativety(1),checkNegativety(-7))
