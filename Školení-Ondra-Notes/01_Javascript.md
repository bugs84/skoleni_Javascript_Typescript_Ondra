ES5 - když chceš - podporu IE11

ES6 = ESMAScript 2015  - nyní 
...

ES11




Polyfilly - Drbnu svoji funkci - a ta se přidá, když to jede v IE2015



### Proměnné

variable1 = 1;
var variable2 = 2;

- variable Scope - viz. Console.
- variable hoisting - viz



OBJECT SEAL and OBJECT FREEZE
- ale jen do jedné úrovně !!!!!!!
SEAL
  - mužu přidávat nové property, ale nejdou editovat ty stávající



#Window - posílání zpráv mezi okny
hustý, ale musí to být někde nastavené a povolené


# use strict   - lepší používat
'use strict';
na začátek filu



#Functions
```JavaScript
function myPrint(text) {
    console.log(text)
}

//EC6 - arrow funkce
//ARROW musí se nejdřív nadefinovat
const myPrint2 = (text) => {
    console.log(text)
}

//stejne jako
const myPrint2 = (text) => console.log(text)

//stejne jako

const myPrint2 = text => console.log(text)

//stejne jako
const myPrint2 = console.log
//tohle jde, protoze to proste presmeruje stejné provolání





//GLobalní scope - používat function
//arrow funkce spíš jako argument
```



# Operátory

==  porovnává hodnotu
"1" == 1   // true

===  porovnává hodnotu
"1" === 1   // false

TRI ROVNITKA - vzdycky


typeof "value"==="string" //true


const car = new Car();
console.log(car instanceof Car); //true



# Datové struktury

zaludnost
const names = new Array(2)

heterogeni pole
// každý element různý typ

const array = ["John", "Alice"]
array.splice(1,0,"Peter"); //["John", "Peter", "Alice"]
  // ta 0 je kolik prvku chci smazat

//pridani na zacatek a na konec
array.push   
array.unshift

array.pop() vyhodi prvek a vrati ho
array.shift() - odebere ze zacatku pole a vrati ho

indexOf()  vrátí -1 - když nenajde

array.includes("Alice") //contains vrátí boolean

### ForEach  vs. for cyklus

foreach
return // uvnitr foreache chová se jako continue


forEach  - udělá volání pro každý prvek
return je k ničemu, protože to neovlivnuje iterace

BACHA NA RETURN ve foreach!!!
  - nejde zastavit!!!
  - vzdycky to proiteruje vsechno !!!


[1,2].forEach(element, index, originalArray) 


PERFORMANCE - for cyklus je výrazně rychlejší než forEach


## Set a Map
const set1 = new Set([1,2,3])  

Set  v javascriptu - drží pořadí

Map


## JSON
když se serializuje, tak metody se NEserializuji - jasny

JSON.stringify(obj)
JSON.parse(string)



## Třídy
EC6

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter  - tomu se říká property getter
  get area() {
    return this.calcArea();
  }

  set area() {
    //property setter
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }

  calcAreaArrow = () => {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100  -  getter method
```

V CLASSE -  ARROW FUNKCE DAVA HODNE SMYSL

//THIS - je bordel
this může být ta classa ze které se to volá
  - u normální funkce

U arrow funkce je this v objektu to co čekáš

- i když arrow funkce má trošičku horší performance



## sync vs. async

viz. Ondrovo README.md

setTimeout - udelej za dve vteriny

setInterval - kazdy dve vteriny
clearInterval - vypne



ANIMATION FRAME
requestAnimationFrame
- vhodne pro animace.
- vola se po každém vykreslovacím framu
- těžko říct co to je


Callback
  callback HELL


PROMISE
new Promise(success, error)   //error je volitelny
then   - je success
catch  - je error

ASYNC AWAIT
await  počká na promisu


// novějíš volání na backend
fetch('./data.json')
  .then(response -> {
      response.json()
  }
  )



# EVENT LOOP
 ma tam odkaz na clanek - dobrej


 # Web workers
 const worker = new Worker('worker.js')

komunikuji pres message
message může být jenom string (vše protáhnout přes string)

musí to být ve vlastním souboru,
a vpodstatě vlastní build.


# NodeJS
Javascript Engine

vs.
Vykreslovací Engine



# project
package.json  a  node_modules

npmjs.com

package.json - v tom jsou definované dependence
  - externí projekty 

npm je součást NodeJs
  - NodePackageManager

npm init   - založí projekt

package.json funguje to pro web appku i nodejs appku


# Nativní a mobilní aplikace
  - Electron, React Native

