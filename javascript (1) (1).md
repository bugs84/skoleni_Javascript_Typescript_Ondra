
# JavaScript a TypeScript
2 denní workshop pro začátečníky na téma JavaScript a TypeScript. Vstupní požadavky: základní znalosti programování, PC s nainstalovaným IDE (Visual Studio Code nebo IntelliJ IDEA). Znalosti JavaScriptu nebo TypeScriptu nejsou vyžadovány.


## Intro

- příprava prostředí - Node.js, IDE
- osnova, cvičení, projekt

![js vs ts](img/js-logo.png)

- název JavaScript -> js
- ECMAScript
  - ES5 2009 - podpora ve všech prohlížečích
  - ES6 = ES2015 - částečná podpora IE11
  - ES7 = ES2016 - nepodporuje IE11
  - ES8 = ES2017 - nepodporuje IE11
  - ES9 = ES2018 - nepodporuje IE11
  - ES10 = ES2019 - nepodporuje IE11
  - ES11 = ES2020 - nepodporuje IE11
- polyfilly https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- JavaScript je neblokující, interpretovaný, asynchronní, jednovláknový, dynamicky slabě typovaný jazyk

**Cvičení**
- findIndex
  - ECMAScript
  - podpora v prohlížečích

<details>
  <summary>řešení</summary>
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
</details>

## Debugování
Console
- úrovně logování, grafické odlišení
```javascript
console.log("test"); // output: test
console.info("test"); // output: test
console.warn("test"); // output: test
console.error("test"); // output: test
```

Debugger
```javascript
debugger;
```

Console time
```javascript
console.time("timerId");
// code
console.timeEnd("timerId");
```

Console table
```javascript
console.table(["apples", "oranges", "bananas"]);
```

| 0 | "apples" |
|---|---|
| 1 | "oranges" |
| 2 | "bananas" |

Debugger
```javascript
console.assert(false, "error message"); // output: error message
console.assert(true, "error message");
```

**Cvičení**

## Proměnné
var
  - globální nebo lokální scope
  - podpora redeklarace
  - defaultní hodnota je undefined
 
let
 - blokový scope {}
 - nepodporuje redeklaraci
 - defaultní hodnota je undefined
 
const
 - blokový scope {}
 - nepodporuje redeklaraci nebo změnu hodnoty (reference)

### Deklarace proměnných
```javascript
variable1 = 1;
var variable2 = 2;
let variable3 = 3;
const variable4 = 4;
```

### Re-deklarace
```javascript
var a; // undefined
var a = "test"; // "test";
var a; // "test";
```
```javascript
let a; // undefined
let a = "test"; // error
let a; // error
```

### Scope proměnných
- lokální, globální, automaticky globální, blokový

```javascript
if (true) {
    variable1 = 1;
    var variable2 = 2;
    let variable3 = 3;
    const variable4 = 4;
}

console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);
```

```javascript
function test() {
    variable1 = 1;
    var variable2 = 2;
    let variable3 = 3;
    const variable4 = 4;
}

test();

console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);
```


### Variable hoisting
- deklarace proměnné je přesunuta na začátek kódu při interpretaci (platí pro var, let, const, function, class)

```javascript
// var
console.log(variable1); // undefined
variable1 = 5;
console.log(variable1); // 5
var variable1 = "test";
console.log(variable1); // test

// let
console.log(variable2); // Cannot access 'variable2' before initialization
let variable2 = "test";

// const
console.log(variable3); // Cannot access 'variable3' before initialization
const variable3 = "test";

```

```javascript
// string
const name = "";

// number
const age = 5;
const amount = 4.5;

// boolean
const visible = true;

// null, undefined
let variable; // undefined, stejné jako let variable = undefined;

if (!variable) {
  console.log("undefined");
}

let variable = null;

if (!variable) {
  console.log("null");
}
```

**Cvičení**

## Objekty
```javascript
const obj = new Object(); // {}
obj.x = 8; // { x: 8 }
```

```javascript
const obj = {}; // {}
obj.x = 8; // { x: 8 }
obj.z; // undefined
```

### Object freeze
```javascript
const user = {
  age: 42,
  credentials: {
    login: ""
  }
};

Object.freeze(user);

user.name = "a"; // error
user.age = 33; // error
delete user.age  // error
user.credentials.login = "admin";
user.credentials.password = "1234";
```

### Object seal
```javascript
const user = {
  age: 42,
  credentials: {
    login: ""
  }
};

Object.seal(user);

user.name = "a"; // error
user.age = 33;
delete user.age  // error
user.credentials.login = "admin";
user.credentials.password = "1234";
```

### Window
```javascript
window;
window.document;
window.setTimeout(() => console.log("aaa"), 1000);

var variable1 = "test";
console.log(window.variable1); // test;
```

```javascript
const childWindow = window.open("https://www.google.com/");

window.onmessage = (event) => {
    console.log(`Received message: ${event.data}`);
};

window.postMessage("hello", "https://www.google.com/");
```

**Cvičení**

### DOM (Document Object Model)
```javascript
document.getElementById("elemntId").innerHTML = "Hello World!";
document.getElementsByClassName("className").style.display = "none";
const element = document.createElement("div");
document.appendChild(element);
document.removeChild(element);
document.write("text");
```

**Cvičení**

### Virtuální DOM
- moderní frameworky (React, Bobril, ...)
- úpravy ve virtuální DOMu jsou rychlejší
- porovnávání reálného a virtuálního DOMu, přerendrování

```javascript
{
  tag: "div",
  children: [
    {
      tag: "span",
      children: "Hello World!"
      key: "key1"
    },
    {
      tag: "input",
      attrs: {
        type: "text"
      }
      children: "",
      key: "key2"
    }
  ]
}
```

```html
<div>
  <span>Hello World!</span>
  <input type="text" value="" />
</div>
```

## Funkce
- function vs arrow function

```javascript
// function
function printText(text) {
  console.log(text);
}

printText("test");

// arrow function
const printText2 = (text) => {
    console.log(text);
}

printText2("test");

const printText2 = (text) => console.log(text)
const printText2 = console.log
```

```javascript
printText("test"); // test

function printText(text) {
  console.log(text);
}

printText2("test"); // Error: Cannot access 'printText2' before initialization

const printText2 = (text) => {
    console.log(text);
}
```

**Cvičení**

## Podmínky a operátory
```javascript
if (1 + 1 === 2 && 1 + 3 !== 2) {
  console.log("true");
} else {
  console.log("false");
}
```

```javascript
if ("1" == 1) { // true
  ...
}

if ("1" === 1) { // false - stejná hodnota, ale jiný typ
  ...
}
```

```javascript
if (typeof "value" === "string") { // true
  ...
}

const car = new Car();

console.log(car instanceof Car); // true
```

## Datové struktury

### Array
```javascript
const names = ["John", "Alice"];
const names = new Array("John", "Alice"); // ["John", "Alice"]
const names = new Array(2); // [ , ]
```

```javascript
// homogenní pole
const array = ["John", "Alice"];

// heterogenní pole
const array = ["John", 5, false, null];

// vícerozměrná pole
const array = [[1, 2], [4, 5]];

array[1] // [4, 5]
array[1][0] // 4


// přidání prvku na pozici
const array = ["John", "Alice"];
array.splice(1, 0, "Peter"); // ["John", "Peter", "Alice"]


const array = ["John", "Alice"];
array.push("aaaaa");
array.unshift("aaaa");
const element = array.pop();
const element = array.shift();

array.length;
array.indexOf("Alice") // 1
array.indexOf("Alice") !== -1 // true
array.includes("Alice") // true
```

```javascript
for (let i = 0; i <= 3; i++) {
  if (i === 1) { continue; } // přeskočí na další iteraci
  if (i === 2) { break; } // vyskočí ven z for cyklu
  if (i === 3) { return; } // vyskočí ven z for cyklu a případně z metody
}
```
vs

```javascript
[0, 1, 2, 3].forEach((element) => {
  if (i === 1) { continue; } // vyhodí výjimku
  if (i === 2) { break; } // vyhodí výjimku
  if (i === 3) { return; } // nevykoná se kód za return a pokračuje se další iterací
});
```

```javascript
const myArray = [1, 2, 3];

// map
const result = myArray.map(element => {
  return `číslo ${element}`;
}); // ["číslo 1", "číslo 2", "číslo 3"]

const result2 = myArray.map(element => element + 1); // [2, 3, 4]

// filter
const result3 = myArray.filter(element => element !== 2); // [1, 3]

// find - vrací první element, který splní podmínku
const result4 = myArray.find(element => element > 1); // 2

const result5 = myArray.find(element => element > 20); // undefined

// findIndex
const result6 = myArray.findIndex(element => element > 1); // 1

// some
const result7 = myArray.some(element => element > 1); // true

// every
const result8 = myArray.every(element => element > 1); // false

// sort
const result9 = myArray.sort(); // [1, 2, 3]

const result10 = myArray.sort((element, nextElement) => {
  if (element < nextElement) {
    return -1;
  } else if (element > nextElement) {
    return 1;
  } else {
    return 0;
  }
}); // [1, 2, 3]

const result10 = myArray.sort((element, nextElement) => {
  if (element < nextElement) {
    return 1;
  } else if (element > nextElement) {
    return -1;
  } else {
    return 0;
  }
}); // [3, 2, 1]

["aa", "bbb"].sort((current, next) => current.localeCompare(next))
```

### Set (množina)
- pamatuje si pořadí prvků

```javascript
const values = new Set([1, 2, 3]); // IE11 nepodporuje nastavení hodnot přes constructor
values.add(4); // 1, 2, 3, 4
values.delete(2); // 1, 3, 4
values.has(1); // true
values.forEach((value) => console.log(value)); // 1, 3, 4
values.size(); // 3
values.clear();
values.size(); // 0
```

### Map
```javascript
const myMap = new Map();
myMap.set("key1", "value1"); // key1 => value1
myMap.get("key1"); // value1
myMap.size(); // 1
myMap.has("key1"); // true
myMap.has("key2"); // false
myMap.forEach(((value, key, map) => console.log(value, key, map)); // value1, key1, [object Map]
myMap.delete("key1");
myMap.clear();
```

**Cvičení**

## JSON
- JavaScript Object Notation
- JSON.stringify https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
- JSON.parse
- ztrácí metody z objektů

```javascript
const person = {
	name: "Petr Novák",
  	children: [
      {
        name: "Jan Novák",
        children: []
      }
    ]
}

console.log(JSON.stringify(person)); // "{"name":"Petr Novák","children":[{"name":"Jan Novák","children":[]}]}"
console.log(JSON.parse(JSON.stringify(person)));
```

**Cvičení**

## Třídy
- definice třídy - property getter / setter vs function vs arrow
- dědičnost - extends

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
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

console.log(square.area); // 100
```

**Cvičení**

## Sync vs async

### setTimeout
```javascript
const timeoutId = setTimeout(() => console.log("test"), 2000);
clearTimeout(timeoutId);
```

### setInterval
```javascript
const intervalId = setInterval(() => console.log("test"), 2000);
clearInterval(intervalId);
```

### requestAnimationFrame
- vhodné pro animace (plynulejší než setTimeout)
- spustí callback před vykreslením dalšího framu

```javascript
window.requestAnimationFrame(() => {
	console.log('render');
});
```

### Callback
```javascript
function doSomething(callback) {
    setTimeout(() => callback("test"), 1000);
}

doSomething((value) => console.log(value));
```

### Promise

![promise](img/promises.jpg)

```javascript
function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("test"), 1000);
  })
}

doSomething().then((value) => console.log(value));

doSomething().then((value) => {return 4}).then((value) => console.log(value));
```

### Async/await
```javascript
function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("test"), 1000);
  })
}

await doSomething();
```

```javascript
async function doSomething() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return "test";
}

await doSomething();
```

### Promise All
```javascript
const promise1 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve("one"), 1000); 
}); 
const promise2 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve("two"), 2000); 
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // ["one", "two", "three"]
});
```

```javascript
// náhrada za XMLHttpRequest

fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data) // JSON data
  })
  .catch(err => {
    // error handling
  })
```

**Cvičení**

```javascript
console.log(2);

function doSomething(callback) {
  console.log(1);
  callback(5);
  console.log(4);
}

console.log(3);

doSomething((value) => {
  console.log(value);
});

console.log(6);
```

<details>
  <summary>řešení</summary>
  2, 3, 1, 5, 4, 6
</details>


## Event loop
- event loop
 - heap
 - call stack
   - zásobník vykonávaných příkazů
   - postupuje se od nejstaršího
 - message queue
   - volání eventů onClick apod, setTimeout, pozor na setTimeout(0)
   - message queue se zpracovává až když je zásobník prázdný
  -ES6 Job Queue
    - Promises (and Async/await, which is built on promises) jdou dříve než klasické callbacky  https://flaviocopes.com/javascript-event-loop/
- setTimeout, setInterval

http://latentflip.com/loupe/


## Web workers
 - omezení: nemají přístup k DOMu

```javascript

// main thread
const worker = new Worker('worker.js');

worker.addEventListener('message', (event) => {
  console.log('Worker said: ', event.data);
}, false);

worker.postMessage('Hello World');


// worker
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = "Result"
  postMessage(workerResult);
}
```

## Serverside

![serverside](img/serverjs.jpg)

- rozdíl mezi server a web
- Node.js
- JavaScript Engine
  - V8
    - Google Chrome
    - Opera
    - NodeJs
  - Chakra
    - Edge
- rendering engine
  - Blink
    - Google Chrome
    - Opera
    - Microsoft
  - Gecko
    - Firefox
  - Webkit
    - Safari
- package.json, node_modules
- co je to npm
- es6 import, require

![js vs ts](img/node-modules.jpg)

```cmd
npm init
npm install
```

```javascript
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
```

```cmd
node project.js
```

```javascript
const http = require('http'); // Import Node.js core module

const server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
```
**Cvičení**

## Nativní a mobilní aplikace
- Electron, React Native

## Projekt
- TODO aplikace