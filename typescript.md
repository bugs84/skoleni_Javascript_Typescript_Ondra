# TypeScript

![js vs ts](img/js-vs-ts.png)

## Intro
- rozdíl mezi js a ts
- JavaScript jako bytecode
- výhody
    - typová kontrola
    - odhalení chyb během kompilace
    - dokumentace kódu
    - restrikce
    - refactoring
    - transpilace z es6 do es5
- porovnání s konkurencí (CoffeeScript, Dart, Kotlin, Flow)
- snaží se být kompatibilní s js

## Typy

```typescript
// string
const name: string = "";

// number
const age: number = 5;
const amount: number = 4.5;

// boolean
const visible: boolean = true;
const visible: true = true;
const visible: false = true;

// array
const names: string[] = ["John", "Alice"];
const names: Array<string> = new Array<string>("John", "Alice");

// any, unknown - všechyn typy lze assignovat na any nebo unknown

let notSure: any = 4;

let unKnown: unknown = new Date();

if (unKnown instanceof Date) { 
    return unKnown.toISOString();
}

if (typeof unKnown === 'string') {
    return unKnown.toUpperCase();
}

// never, void

function test(): void {
    console.log("test");
}

function throwError(): never {
    throw new Error("Unknown error");
}

function infiniteLoop(): never {
    while (true) {}
}

// enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
} 

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

Direction.Up //  "UP"

// tuple
type Point3D = [number, number, number];

const point: Point3D = [1, 4, 3];

let nameAndCount: [string, number] = ["item1", 5];

// dictionary
type Dictionary = {
    [key: string]: number;
}

const dictionary: Dictionary = {};
dictionary["key1"] = 5;

```

**Cvičení**

### Type vs interface
```typescript
interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
}
```

```typescript
// interface merguje definice
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// stejné jako:
interface Person {
  name: string;
  age: number;
}
```

**dědičnost**
```typescript
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// vs 

type Dog = Animal & {
    breed: string;
}

```

**Cvičení**

## Použití JS knihovny v TS
- d.ts
- projekt DefinitelyTyped https://github.com/DefinitelyTyped/DefinitelyTyped

## Advanced typy

### Union vs Intersection types
```typescript
type Dog = {
  name: string;
  height: number;
}

type Cat = {
  name: string;
  color: string;
}

type AnimalIntersection = Dog & Cat; // Dog i Cat

const animalIntersection: AnimalIntersection = {
  name: string;
  height: number;
  color: string;
}


type AnimalUnion = Dog | Cat; // Dog nebo Cat

const animalUnion: AnimalUnion ={
  name: string;
  height: number;
}

const animalUnion: AnimalUnion ={
  name: string;
  color: string;
}

```

### Generics

```typescript
// funkce
function removeDuplicates<T>(array: T[]): T[] {
    return array.filter((element: T, index: number) => array.indexOf(element) === index);
}

removeDuplicates<string>(["aa", "bb"]);


// třída
class GenericClass<T> {
    property: T | undefined;
    method: (x: T, y: T) => T = (x: T, y: T) => y;
}

// typ
type Optional<T> = T | undefined;

const optional: Optional<string> = "test";

const optional: string | undefined = "test";
```

## Utility Types

### Partial<T>
```typescript
type Dog = {
  name: string;
  height: number;
}

const dog: Partial<Dog>;
/*
{
  name?: string;
  height?: number;
}
*/
```

### Readonly<T>
```typescript
type Dog = {
  name: string;
  height: number;
}

const dog: Readonly<Dog>;
/*
{
  readonly name: string;
  readonly height: number;
}
*/

function freeze<T>(obj: T): Readonly<T>;
```

### Pick<T,K>
```typescript
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};
```

### Omit<T,K>
```typescript
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};
```

## Type Guards
```typescript
type Dog = {
    run(): void;
    eat(): void;
}

type Fish = {
    swim(): void;
    eat(): void;
}

function isFish(pet: Fish | Dog): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

const pet: Dog | Fish = getPet();

pet.swim(); // Error

if (isFish(pet)) {
    pet.swim();
}
```

**Cvičení**

## Funkce
```typescript
function print(text: string): void {
    console.log(text);
}

const print2: (text: string) => void = (text: string) => console.log(text);

function print(callback: (text: string) => void): void {
    console.log("1");
    callback("2");
}

print((text: string) => {
    console.log(text);   
});

// callback hell

function print(callback: (callback2: () => void) => void): void {
    console.log("1");
    callback(() => {
        console.log("2");
    });
}

print((callback: () => void) => {
    callback();  
});
```

**Cvičení**

## Třídy
- porovnání s ES6

```typescript
class Person {
    protected name: string | undefined;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    getDepartment = (): string => {
      return this.department;
    }

    setDepartment = (department: string): void => {
      this.department = department;
    } 
}

const employee: Employee = new Employee("Jan Novák", "ICT");

employee.getDepartment(); // "ICT"
```

```typescript
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) { }
}
```

public / private / protected

```typescript

class MyClass {
    property1: string;
    public property1: string;
    protected property1: string;
    private property1: string;

    method1 (): void { // public
        console.log("test");
    }
    public method2 (): void {
        console.log("test");
    }
    protected method3 (): void {
        console.log("test");
    }
    private method4 (): void {
        console.log("test");
    }
}

const myClass = new MyClass();
myClass.method1();
myClass.method2();
myClass.method3(); // Error
myClass.method4(); // Error
myClass["method4"]();
```


**Cvičení**

## Kompilace
- typescript compiler, AST https://astexplorer.net/
- tsconfig.json
```json
{
    "compilerOptions": {
        "allowJs": false,
        "checkJs": false,
        "declaration": true,
        "experimentalDecorators": true,
        "jsx": "react",
        "lib": [
        "es5",
        "dom",
        "es2015",
        "es2016.array.include",
        "es2017.object",
        "es2017.string",
        "es2018.asynciterable",
        "es2018.promise",
        "es2019.array",
        "es2019.string"
        ],
        "module": "commonjs",
        "noEmitHelpers": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitReturns": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "preserveConstEnums": false,
        "reactNamespace": "b",
        "removeComments": false,
        "skipLibCheck": false,
        "skipDefaultLibCheck": true,
        "sourceMap": true,
        "strict": true,
        "strictPropertyInitialization": true,
        "target": "es5",
        "resolveJsonModule": true
    },
    "files": []
}
```
- module bundler (webpack, bobril-build, Browserify)

## Novinky

### Optional chaining

```typescript

const myObject = {
    optionalProperty: {
        optionalSubproperty: true
    }
}

let variable1 = myObject?.optionalProperty?.optionalSubproperty;

// vs

let variable1;

if (myObject && myObject.optionalProperty && myObject.optionalProperty.optionalSubproperty) {
    variable1 = myObject.optionalProperty.optionalSubproperty;
}
```

### Nullish Coalescing
```typescript
let variable = null || undefined || 20 // 20
let variable = null ?? undefined ?? 20 // 20

let variable = 0 || 20 // 20
let variable = 0 ?? 20 // 0
```

## Projekt
- TODO aplikace - převod na typescript, doplnění typů, zapnutí restrikcí

## Testovací Frameworky
- Jasmine, Jest, Cypress, Bbseeker extended

## Další zdoje
- MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript
- JavaScript Weekly - https://javascriptweekly.com/
- Zdroják.cz - https://www.zdrojak.cz/
- Dokumentace TypeScriptu - https://www.typescriptlang.org/docs/handbook/basic-types.html
- TypeScript playground - https://www.typescriptlang.org/play/index.html