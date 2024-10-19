"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayMD = [1, 2, 3, 'one', 'two', 'three', ['A', 'B']];
console.log(arrayMD);
const getFullName = (name) => name.firstName + ' ' + name.lastName;
console.log(getFullName({ firstName: 'Norhan', lastName: 'Mohammed' }));
const getFullName2 = (name) => name.firstName + ' ' + name.lastName;
console.log(getFullName2({ firstName: 'Norhan', lastName: 'Ali', middleName: 'Mohammed' }));
const checkNegativety = (num) => {
    if (num > 0)
        return "Positive";
    else
        return 'Negative';
};
console.log(checkNegativety(1), checkNegativety(-7));
//# sourceMappingURL=Types.js.map