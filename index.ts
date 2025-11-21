
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

//any and unknown

let anyE:any =true; // any buypass the ts type safety, we can assign any type of value to it

let unk:unknown="any type of value";

anyE=3;

unk=6;

// (unk as string).toUpperCase();// auto complete work here cause its type assertion, it says to take unk as a string and work
// compile time--ts trust us//tell compiler to treat a value as a specific type, there is no runtime change, if type missmatched it throws a runtime error

// anyE.toUpperCase(); // runtime error here too cause its a number, if it was a string it enable auto complete

if(typeof unk === "string"){// need this because its type unknown so it need validation before do something
  unk.toUpperCase();
}// run time

// any=turn off type Script  and unknown is the safer version of any before it need validation
//so best practice is unknown

//-----------type cast

anyE=+"5"//becomes a number


let x:number=6;
let xS:string=String(x);

if(typeof xS==='string'){
    console.log("casted to string")
}

//-------------custom type

type ct= string | number;

let nameorNo:ct="gee";

nameorNo=44;

// nameorNo=true; // only accept a string or a number



//---------------readonly

type Person = {
  readonly name: string;
  address?:string;// make this otional
};

const p1: Person = { name: "Sandula" };

// p.name = "New Name"; // attribute is readonly, make it immutable

const p2: Person = { name: "Sandula",address:"paaaaaaaaaa" };// both work address is optional, we can send with out a address
//optional(?)-this is like constructor overloading


//------------------literal types

let direction:"north" | "west"="north";

direction="west";
// direction="south" cant assign to the literal type. likes a enum in java


//-----------------------type narrowing

function addTwo(val : string | number){
  if(typeof val === 'string'){
      val.toLocaleLowerCase(); // ts suj. works
  }else if(typeof val === 'number'){

  }else{

  }
}// need more on this , not enough

//------------------------



























