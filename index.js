"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//------------primitive
let name = "saNCHA";
console.log(name);
let number = 1;
let is = true;
let myU = undefined;
let n = null;
//theres big int and symbol also
//-------------arrays
let numbers = [1, 2, 3, 4];
let names = ["heheh", "hhhhh"];
//mix
let mix = ["apple", 1, true];
console.log(mix);
//2d
let twoD = [[2, 3, 4], [5, 6, 7]];
console.log(twoD);
//fiexed arrays
let fixed = ["dwdw", "efefe", 1];
let nameO1 = {
    id: 1,
    name: "tata",
    age: 21
};
let nameO2 = {
    id: 1,
    name: "tata",
    age: 21
};
//-------------------------functions
function add(a, b) {
    return a + b;
}
function print(message) {
    console.log(message);
}
let addMe = (a, b) => {
    return a + b;
};
//# sourceMappingURL=index.js.map