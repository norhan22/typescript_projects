"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/////////////////////////////////////////////////
// Variables
const num = 6;
const numArray = [1, 2, 3, 4];
const stringsArray = ['one', 'two', 'three'];
const arrayStringNumbers = [1, 2, 3, 'one', 'two', 'three'];
const arrayMD = [1, 2, 3, 'one', 'two', 'three', ['A', 'B']];
console.log(num, numArray, stringsArray, arrayStringNumbers, arrayMD);
/////////////////////////////////////////////////
// Functions (video 9 )
// https://www.youtube.com/watch?v=IS2VuO0IWso&list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&index=9
function getFullName(firstName, lastName) {
    if (!firstName || !lastName)
        return 'please enter the First Name and Last Name';
    return firstName + ' ' + lastName;
}
console.log(getFullName('Norhan', 'Mohammed'));
/*
 **  Optional and Default Parameters
 *  */
function getFullName2(firstName = 'Norhan', lastName) {
    return firstName + ' ' + lastName;
}
/**! Error  Required Param can't follow optional param */
console.log(getFullName('Norhan')); //! error
/* Rest Params */
function sum(...nums) {
    let sum = 0;
    nums.forEach(e => sum += e);
    return sum;
}
console.log(sum(10, 50, 70, +true)); // +ture = 1 // unary operator ( ++ increment[x++] , -- decrement[x--] ,!{!true}):
/* anonymous , arrow function */
const sum2 = function sum(...nums) {
    let sum = 0;
    nums.forEach(e => sum += e);
    return sum;
};
const sum3 = (...nums) => {
    let sum = 0;
    nums.forEach(e => sum += e);
    return sum;
};
console.log(sum2(10, 50, 70, +true), sum3(10, 50, 70)); // +ture = 1 // unary operator ( ++ increment[x++] , -- decrement[x--] ,!{!true}):
/**
 ** Void and Never
 ** Void : return Undefined
 ** Never : Return never returns
 * */
const logging = (msg) => {
    console.log(msg);
    return;
};
const loggingError = (msg) => {
    throw Error(msg);
    console.log(msg); // unreachable code
};
logging('test');
loggingError('Error!');
////////////////////////////////////
//# sourceMappingURL=Variables%20and%20Functions.js.map