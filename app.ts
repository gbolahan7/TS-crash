// This is a simple TypeScript program that demonstrates variable declarations and type annotations.
// It declares variables of different types and assigns values to them.

let x: number;
x = 5;

let y: string;
y = "Hello, TypeScript!";
let z: boolean;
z = true;


let result = null; // we don't expect this to have any value i.e explicitly declared something to be empty



// ARRAYS

let arr: number[] = [1, 2, 3, 4, 5]; // array of numbers
let arr2: Array<string> = ["a", "b", "c"]; // array of strings
let arr3: (number | string)[] = [1, "a", 2, "b"]; // array of numbers and strings
let arr4: Array<number | string> = [1, "a", 2, "b"]; // array of numbers and strings

// TUPLES: fixed-length arrays that can contain different types

let tuple: [number, string] = [1, "a"]; // tuple of number and string
let tuple2: [number, string, boolean] = [1, "a", true]; // tuple of number, string and boolean
let tuple3: [number, string, boolean?] = [1, "a"]; // optional boolean

const coords: [number, number][] = [
    [1, 2],
    [3, 4],
    [5, 6],
]; // tuple of two numbers
coords[0][0] = 10; // change the first number of the first tuple
coords[0][1] = 20; // change the second number of the first tuple


// LITERAL TYPES = this is an instance of primitive types

let direction: "north" | "south" | "east" | "west"; // literal type

direction = "north"; // valid
direction = "south"; // valid
direction = "east"; // valid
direction = "west"; // valid
// direction = "up"; // invalid, will cause a compile-time error

if (direction = "north") {
    console.log("Going north"); 
    
}

let responseCode: 200 | 404 | 500; // literal type
responseCode = 200; // valid
responseCode = 404; // valid
responseCode = 500; // valid
// responseCode = 300; // invalid, will cause a compile-time error

// ENUMS: a way to define a set of named constants

enum Size {
    Small,
    Medium,
    Large,
    ExtraLarge,
}

Size.Small; // 0
Size.Medium; // 1
Size.Large; // 2
Size.ExtraLarge; // 3




enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
Color.Red; // "RED"
Color.Green; // "GREEN"
Color.Blue; // "BLUE"
