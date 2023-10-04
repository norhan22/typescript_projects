let text: string = 'test ';
let num: number = 444;
let anyVal: any = 888;
anyVal = true

enum numbers {
    num1 = 5, num2 = 2
}

const args = {a: 1, b: 2} as const;
args.a;
args.b;

console.log(text + num)
console.log(anyVal)
console.log(numbers)
console.log(args)
