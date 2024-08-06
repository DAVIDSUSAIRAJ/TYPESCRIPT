// Interface:
// interface Person {
//     name: string;
//     age: number;
//   }


//   Extending Types
//   interface Person {
//     name: string;
//     age: number;
//   }
  
//   interface Employee extends Person {
//     employeeId: number;
//   }

  

//   Type Alias:
// type Person = {
//     name: string;
//     age: number;
//   };


//   Type Alias: You can extend types using intersection types (&).
//   type Employee = Person & {
//     employeeId: number;
//   };

// Union Types
// Type Alias: Can define union types.
// type StringOrNumber = string | number;

// Merging
// Interface: Interfaces can be merged. If you declare the same interface multiple times, TypeScript will merge them.
// interface Person {
//     name: string;
//   }
  
//   interface Person {
//     age: number;
//   }
  
//   // Now Person has both name and age properties
//   let person: Person = {
//     name: "John",
//     age: 30
//   };


// Type Alias: Type aliases cannot be merged. Each type alias must be unique.

// type Person = {
//     name: string;
//   };
  
  // This will cause an error
  // type Person = {
  //   age: number;
  // };



//   When to Use Which?
// Interfaces: Use them when you need to define the shape of objects, especially when you expect to extend or implement these shapes. Interfaces are also better when you expect the type to be merged or expanded.
// Type Aliases: Use them for more complex type definitions, such as unions, intersections, tuples, or when you need to define the type of primitives and other non-object types.
// Example
// Here's an example that shows the use of both:

//   // Using Interface
// interface Animal {
//     name: string;
//   }
  
//   interface Dog extends Animal {
//     breed: string;
//   }
  
//   // Using Type Alias
//   type AnimalType = {
//     name: string;
//   };
  
//   type DogType = AnimalType & {
//     breed: string;
//   };
  
//   // Using union type with Type Alias
//   type StringOrNumber = string | number;
  
//   // Using tuple type with Type Alias
//   type Point = [number, number];
  
  
  

  
  