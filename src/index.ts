import { AmdDependency } from 'typescript';

class Queue<T>{
  private data: Array<T> = [];
  push(item:T){this.data.push(item);}
  pop():T|undefined{return this.data.shift()}
}
let q: Queue<number> = new Queue();
q.push(1);
q.push(4);
console.log(q)

let array: number[] = [1,2,3]
array = [5]

let tuple : [number,string] = [0,'hi']

type myPoint = {x:number, y:number};

let center: myPoint ={
  x:0,
  y:0
}


type Add =(a:number, b:number)=>number;

let add:Add;

add =(a,b)=>a+b;


class Animal{
  protected name: string;

  constructor(name: string){
    this.name = name
  }

  public move(distance:number): void{
    console.log('move')
  }
}

let exampleAny : any;
let exampleUnknown: unknown;

exampleAny.allows.anythig.you.can.imagine();
let anysetBool:boolean = exampleAny;

if(typeof exampleUnknown === 'string'){
  exampleUnknown.trim();
}

(exampleUnknown as string).trim();
(<string>exampleUnknown).trim(); // tsx에선 안됨 비추