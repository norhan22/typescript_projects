/////////////////////////////////////////////////
// Variables
const num:number =6;
const numArray:number[]= [1,2,3,4];
const stringsArray:string[]=['one','two','three'];
const arrayStringNumbers:(string|number)[]=[1,2,3,'one','two','three'];
const arrayMD:(string|number|string[])[]=[1,2,3,'one','two','three',['A','B']];
console.log(num,numArray,stringsArray,arrayStringNumbers,arrayMD)

/////////////////////////////////////////////////
// Functions (video 9 )
// https://www.youtube.com/watch?v=IS2VuO0IWso&list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&index=9

function getFullName (firstName:string,lastName:string):string{
    if(!firstName || !lastName ) return 'please enter the First Name and Last Name';
    return firstName+' '+lastName;
}

console.log(getFullName('Norhan','Mohammed'))

/*
 **  Optional and Default Parameters
 *  */
function getFullName2 (firstName:string='Norhan',lastName?:string):string{
    return firstName+' '+lastName;
}

/**! Error  Required Param can't follow optional param */


console.log(getFullName('Norhan')) //! error

/* Rest Params */
function sum(...nums:number[]):number{
    let sum:number=0;
    nums.forEach(e=>sum += e);
    return sum;
}
console.log(sum(10,50,70, +true)) // +ture = 1 // unary operator ( ++ increment[x++] , -- decrement[x--] ,!{!true}):

/* anonymous , arrow function */

const sum2= function sum(...nums:number[]):number{
    let sum:number=0;
    nums.forEach(e=>sum += e);
    return sum;
}
const sum3 = (...nums:number[]):number=>{
    let sum:number=0;
    nums.forEach(e=>sum += e);
    return sum;
}
console.log(sum2(10,50,70, +true),sum3(10,50,70)) // +ture = 1 // unary operator ( ++ increment[x++] , -- decrement[x--] ,!{!true}):

/**
 ** Void and Never
 ** Void : return Undefined
 ** Never : Return never returns
 * */
const logging=(msg:string):void=> {
    console.log(msg)
    return;
}
const loggingError=(msg:string):never => {
    throw Error(msg)
    console.log(msg) // unreachable code
}
logging('test')
loggingError('Error!')
////////////////////////////////////
