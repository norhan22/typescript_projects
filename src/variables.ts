let text: string = 'test ';
let num: number = 444;
let anyType: any = 888;

// output
console.groupCollapsed('Static Types')
console.log('text', text) // test
console.log('num', num) //  444
console.log('text + num', text + num) // test 444
console.log('before:anyType', anyType) // true
anyType = true
console.log('after:anyType', anyType) // true
console.groupEnd()

//////////////////////////////////////////////
enum numbers {
    num1 = 5, num2 = 2
}

console.groupCollapsed('Enum Ex')
console.log('numbers', numbers)
console.groupEnd()
//////////////////////////////////////////////////
const args = {a: 1, b: 2} as const;

console.groupCollapsed('as const')
console.log('args', args)
// args.a = 5
console.log('after: args.a', args.a)
console.log('after args', args)
console.groupEnd()
/////////////////////////////////////////////////
type arr1 = [number, string]
const arr1Ex: arr1 = [5, 'test']

// output
console.groupCollapsed('type (custom types)')
console.log('type: arr1Ex', arr1Ex)
console.groupEnd()

/////////////////////////////////////////////////

interface arr2 {
    name: string;
    age?: number;
}

// ? => optional
const arr2Ex: arr2 = {name: 'name', age: 5}

// output
console.groupCollapsed('interface (custom types)')
console.log('interface: arr2', arr2Ex)
console.groupEnd()


/////////////////////////////////////////////////
// Functions
function sumVoid(int1: number, int2: number): void {
    console.log('sumVoid', int1 + int2)
}

function sumReturn(int1: number, int2: number): number {
    return int1 + int2
}

sumVoid(1, 2)
console.log(sumReturn(1, 2))

////////////////////////////////////////////////////////////

class Person {
    firstName: String;
    public lastName: String;
    protected birthdate: Date;
    private age: Number;

    constructor(firstNameParam: String, lastNameParam: string, ageParam: Number, birthdateParam?: Date) {
        this.firstName = firstNameParam
        this.lastName = lastNameParam
        this.age = ageParam
        this.birthdate = birthdateParam
    }
}

let norhan = new Person('norhan', 'mohammed', 15)
console.log(norhan.firstName) // undefined
console.log(norhan.lastName) // Mohammed
// console.log(norhan.age) // not accessible



