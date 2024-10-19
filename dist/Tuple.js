"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Tuple  */
let article = ['title', 1, true];
let article2 = ['title', 1, true];
let article3 = ['title', 1, true];
article.push(100); // success! because the forth el is undefined
article2.push(200); // success! because the forth el is undefined
article3.push(300); // Error! because its read only ( freeze)
console.log(article, article2, article3);
//# sourceMappingURL=Tuple.js.map