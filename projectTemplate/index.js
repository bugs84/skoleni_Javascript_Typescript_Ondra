'use strict';

document.write("Hello world");
// console.log("testLog");
// console.info("logInfo");
// console.warn("logWarn");
// // debugger;
// console.error("logError");
// console.debug("logDebug");
//
//
// console.time("myLabel")
// //some code
// console.timeEnd("myLabel") // tady to vypise rozdil
//
// console.table(["apple", "banana", "orange"]) //vypise tabulku
//
//
// console.assert(true, "ErrorMessage nevypise se")
// console.assert(false, "ErrorMessage vypise se")



const obj = new Object(); //  = {}
obj.x = 8

const obj2 = new Object();

const obj3 = {
    x:9,
    credentials: {
        login: "pepa"
    }
}

obj3.newOne=10
Object.seal(obj3)

obj3.newOne=11

console.log(obj3)





document.getElementById("myId1").innerHTML = "Hello in p"
document.createElement("div")



function myPrint(text) {
    console.log(text)
}

//EC6 - arrow funkce
//ARROW musí se nejdřív nadefinovat
const myPrint2 = (text) => {
    console.log(text)
}


//GLobalní scope - používat function
//arrow funkce spíš jako argument




const myArray = [1,2,3];

console.log("map: " + myArray.map(e => {
    return `cislo ${e}`
    }
))


const s1 = ["d", "č" ,"a", "c"].sort()
console.log(s1)


const s2 = ["d", "č" ,"a", "c"].sort((a,b)=> a.localeCompare(b))
console.log(s2)




const set1 = new Set([1,2,3,2])
console.log(set1)



const map1 = new Map([
    ['a',1],
    ['b',2]

])

console.log(map1)