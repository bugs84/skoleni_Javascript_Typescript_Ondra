document.write("TypeScript!");

function addNumber(value: number): number {
  return value + 1;
}


const name2: string = ""

const age: number = 5;
const amount: number = 4.5

const visible: true = true
// const visible2: false = true  //sem jde dat jen false


// any -
// unknown -

const notSure: any = 4
const unKnown: unknown = new Date()

// když nevíš co ti přišlo

// any - cokoliv
// unknown - jen nevíš

//never
//void

function test(): void {
  console.log("baf")
}

function infiniteLoop(): never {   //never nikdy se nevrátí
   while(true) {}
}


// enum
enum Direction {

}



//pole
type Point3D = [number, number, number]
const point:Point3D = [1,4,3]


type Dictionary = {
  [key: string]: number;
}



//Type vs. interface
// míchá se to mezi sebou

// Ondra
// interface používá pro classu (implementuju něco)
// type používá v ostatních případech

// interfacy to merguje do sebe
// když jsou dvě definice jsou neoddělitelně sloučené
// type, když jsou dva typy stejného jména, tak tě to vyřve

//type umí   &   a umi i  |  nebo


// !!!!!!!!!!!!!!!!!!!!

type Dog = {

    //oboje je podobne
    name: string | undefined // ale tohle se musi definovat
    height?: string  //tohle se nemusi uvadet
}

const dog:Dog = {
    name: undefined //musi se uvest
}

const st:String = "AAA"





// Type Guards

//return typ   : pet is Fish





// COMPILACE
// TYPESCRIPT

//typescript umirevest jen jeden soubor na javascript
//když je to víc souborů, tak se musí použít
// module bundler - ten umí číst víc souborů a složit to do jednoho souboru



// IMPORTY
// import { test } from "./utils";
//nejlepší zápis importu.

//ale my budeme psat do jednoho souboru - zapojování bundleru je hroznej voser :(



