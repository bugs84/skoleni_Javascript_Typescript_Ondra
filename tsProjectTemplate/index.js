"use strict";
document.write("TypeScript!");
function addNumber(value) {
    return value + 1;
}
var name2 = "";
var age = 5;
var amount = 4.5;
var visible = true;
// const visible2: false = true  //sem jde dat jen false
// any -
// unknown -
var notSure = 4;
var unKnown = new Date();
// když nevíš co ti přišlo
// any - cokoliv
// unknown - jen nevíš
//never
//void
function test() {
    console.log("baf");
}
function infiniteLoop() {
    while (true) { }
}
// enum
var Direction;
(function (Direction) {
})(Direction || (Direction = {}));
var point = [1, 4, 3];
var dog = {
    name: undefined //musi se uvest
};
var st = "AAA";
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
