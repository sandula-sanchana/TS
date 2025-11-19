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
//any and unknown
let anyE = true; // any buypass the ts type safety, we can assign any type of value to it
let unk = "any type of value";
anyE = 3;
unk = 6;
// (unk as string).toUpperCase();// auto complete work here cause its type assertion, it says to take unk as a string and work
// compile time--ts trust us//tell compiler to treat a value as a specific type, there is no runtime change, if type missmatched it throws a runtime error
// anyE.toUpperCase(); // runtime error here too cause its a number, if it was a string it enable auto complete
if (typeof unk === "string") { // need this because its type unknown so it need validation before do something
    unk.toUpperCase();
} // run time
// any=turn off type Script  and unknown is the safer version of any before it need validation
//so best practice is unknown
//-----------type cast
anyE = +"5"; //becomes a number
let x = 6;
let xS = String(x);
if (typeof xS === 'string') {
    console.log("casted to string");
}
let nameorNo = "gee";
nameorNo = 44;
const p = { name: "Sandula" };
// p.name = "New Name"; // attribute is readonly, make it immutable
//# sourceMappingURL=index.js.map