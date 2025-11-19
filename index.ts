
//------------primitive
let name :String ="saNCHA";
console.log(name);

let number :number=1;
let is:boolean=true;

let myU:undefined=undefined;
let n:null=null;

//theres big int and symbol also

//-------------arrays

let numbers:number[]=[1,2,3,4]

let names:String[]=["heheh","hhhhh"]

//mix

let mix:(String | boolean | number)[]=["apple",1,true]

console.log(mix)

//2d

let twoD:number[][]=[[2,3,4],[5,6,7]]

console.log(twoD)

//fiexed arrays

let fixed:[String,String,number]=["dwdw","efefe",1]

//-----------------------objects

type person={id:number,name:String,age:number}

let nameO1:person={
   id:1,
   name:"tata",
   age:21
}

let nameO2:person={// object type(content) is the same, we can give a custom type for it
   id:1,
   name:"tata",
   age:21
}

//-------------------------functions

function add(a:number,b:number):number{// types for param and out side ob bracket type is for return type
    return a+b;
}

function print(message:String):void{// void if there is no return type
    console.log(message)
}
let addMe=(a:number,b:number):number=>{//arrow
    return a+b;
}







