//start//Object Implicit Types


// let person = {
//   name: "John",
//   age: 30
// };

// TypeScript infers that person has the type:
// { name: string; age: number; }
//end



















//start//Object explicit types

// Using an Interface
// interface Person {
//   name: string;
//   age: number;
// }

// let person: Person = {
//   name: "John",
//   age: 30
// };



// Using a Type Alias
// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person = {
//   name: "John",
//   age: 30
// };



// Optional Properties
// Using an Interface
// interface Person {
//   name: string;
//   age?: number; // age is optional
// }

// let person1: Person = {
//   name: "John"
// };

// let person2: Person = {
//   name: "Jane",
//   age: 25
// };


// Using a Type Alias
// type Person = {
//   name: string;
//   age?: number; // age is optional
// };

// let person1: Person = {
//   name: "John"
// };

// let person2: Person = {
//   name: "Jane",
//   age: 25
// };


// Combining All Concepts

// Implicit type
// let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020
// };

// Explicit type with optional property
// interface Car {
//   make: string;
//   model: string;
//   year: number;
//   color?: string; // optional property
// }

// let myCar: Car = {
//   make: "Honda",
//   model: "Accord",
//   year: 2018
// };

// let anotherCar: Car = {
//   make: "Ford",
//   model: "Mustang",
//   year: 2022,
//   color: "red"
// };

//end//Object explicit type
