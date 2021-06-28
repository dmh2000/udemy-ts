// javascript primitive types
let apples: number = 5;
let speed: string = "fast";
let foo: boolean = true;
let bar: BigInt = BigInt(1);
let sym: Symbol = Symbol("hello");
let unf: undefined = undefined;

// typescript types
let nil: null = null;

// builtins
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];

// classes
class Car {}
let car: Car = new Car();

// object literal

interface point {
  x: number;
  y: number;
}

let obj: point = {
  x: 10,
  y: 20,
};

const p = JSON.stringify(obj);
const coordinates: point = JSON.parse(p);

// variable whose type cannot be inferred

let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
