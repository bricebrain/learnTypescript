import React, { useState } from 'react';

import './App.css';

interface User{
  name:string,
  age:number,
 
}

interface UserPlus{
  name:string,
  age:number,
  taille:number
}


type ArrayDeTuple= [number, string] 

type TypeAdd = (...arg:number[])=>number

class UserPerso{

     constructor(public name:string , public age:number){
     }
     
}


function description (p:User):void {

}
 


//type indexable 
interface CollectionUser {
  [propName:string] : any,
  [propName:number] : {} 
}



function App() {
  const lenombre:number = 6 //

  const theo:User =new UserPerso('theo', 7)
  const [first, setfirst] = useState<User|null >(theo)
 

const maFonction = ():void=>{

  setfirst({name:'brice', age: add(1, 2 , 3, 4)})
  description(theo)
 
}


// declaration d array 
const arr : number[] = [1, 2, 3]
const arr2:Array<number>= [1, 2]

// declaration tuple

const tup : ArrayDeTuple[] = [[1, 'string'] , [1, 'string']  ]


const add:TypeAdd =( ...arg:number[]) =>  {
  
  let result:number = 0
  console.log(result)

  arg.forEach(element => {
    result += element
  });

  return result
}




  return (
    <div className="App">
      <h1 > {first?.name}</h1>
      <h1 > {first?.age}</h1>

      <button onClick={():void =>maFonction()}> Click</button>
     
    </div>
  );
}

export default App;
