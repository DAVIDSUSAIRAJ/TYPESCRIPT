"use strict";
// var s = JS+additional functionalities
(function () {
    //primitive data type
    //string , nmber , boolean ,null,undefined
    //CHAPTER-1
    //start//
    //start//primitive data type implicit//JS
    //   let fullName = "John Doe";
    //   let age = 30;
    //   let isStudent = true;
    //   let emptyValue = null;
    //   let notAssigned; // undefined
    //   let uniqueKey = Symbol("key"); //type of symbol
    //   let largeNumber = BigInt("9007199254740991"); //type of bigint
    //end//primitive data type implicit//JS
    //start//primitive data type explicit//TS
    //   let fullName: string = "John Doe";
    //   let age: number = 30;
    //   let isStudent: boolean = true;
    //   let emptyValue: null = null;
    //   let notAssigned: undefined; // undefined// // Type explicitly declared as undefined or
    //  let notAssigned:undefined = undefined;
    //   let uniqueKey: symbol = Symbol("key"); //type of symbol
    //   let largeNumber: BigInt = BigInt("0o377777777777777777"); //type of bigint
    //end//primitive data type explicit//TS
    //CHAPTER-1_end
    //CHAPTER-2_start
    //start//primitive data type Implicit  with array//JS//
    //    let names = ["Alice", "Bob", "Charlie"];
    //   let numbers = [1, 2, 3, 4, 5];
    //   let flags = [true, false, true];
    //   let mixed = [1, "two", true];
    //start// initialize then push method in jS
    //   let userNames = [];
    //   userNames.push("hai");
    //   console.log(userNames); // Output: ["hai"]
    //end// initialize then push method in jS
    // start// readonly array in js
    //   const readonlyArray = ["Alice", "Bob", "Charlie"];
    //   Object.freeze(readonlyArray);
    //   console.log(readonlyArray[0])// Output: "Alice"
    //   readonlyArray.push("David"); // This line will cause a TypeError in strict mode
    //end// readonly array in js
    //   let mixedGridjs = [
    //     [1, "two", true],
    //     ["three", false, 4],
    //     [true, 5, "six"],
    //   ];
    //   let users = [
    //     { name: "Alice", age: 25 },
    //     { name: "Bob", age: 30 }
    //   ];
    // Trying to add a new element
    // readonlyArray.push("David"); // This line will cause a TypeError in strict mode
    //end//primitive data type Implicit  with array//JS
    //start//primitive data type explicit  with array//TS//
    //   let names: string[] = ["Alice", "Bob", "Charlie"];
    //   let numbers: number[] = [1, 2, 3, 4, 5];
    //   let flags: boolean[] = [true, false, true];
    //confusion place
    //   let mixed: (number | string | boolean)[] = [1, true];
    //   let exampleTuple: [number, string, boolean] = [1, "two", false]; //tuble concept
    //start// initialize then push method in TS
    //   let userNames: string[] = [];
    //   userNames.push("hai");
    //   console.log(userNames);
    //end// initialize then push method in TS
    // start// readonly array in TS
    // const readonlyArrayAsConst = ["Alice", "Bob", "Charlie"] as const;
    // console.log(readonlyArrayAsConst[0])// Output: "Alice"
    // readonlyArrayAsConst.push("David"); // This line will cause a TypeError in strict mode
    // const readonlyArray:readonly string[] = ["Alice", "Bob", "Charlie"];
    // console.log(readonlyArray[0])// Output: "Alice"
    // readonlyArray.push("David"); // This line will cause a TypeError in strict mode
    // end// readonly array in TS
    //start//mixedGridTS
    //   let mixedGridts: (string | boolean | number)[][] = [
    //     [1, "two", true],
    //     ["three", false, 4],
    //     [true, 5, "six"],
    //   ];
    // Accessing elements
    // console.log(mixedGrid[0][0]); // Output: 1
    // console.log(mixedGrid[1][1]); // Output: false
    // console.log(mixedGrid[2][2]); // Output: six
    // Adding a new row
    // mixedGrid.push(["seven", 8, false]);
    // console.log(mixedGrid);
    // Output: [[1, "two", true], ["three", false, 4], [true, 5, "six"], ["seven", 8, false]]
    // Modifying an element
    // mixedGrid[1][0] = "updated";
    // console.log(mixedGrid);
    //end//mixedGridTS
    //   let users: { name: string; age: number }[] = [
    //     { name: "Alice", age: 25 },
    //     { name: "Bob", age: 30 },
    //   ];
    //end//primitive data type Implicit  with array//TS//
    //CHAPTER-2_end
    //CAHPTER-3_start
    //START//TYPESCRIPT OBJECTS
    //implicit//JAVACRIPT OBJECTS
    //  let person = {
    //   name:"David",
    //   age:28,
    //   isAlive:false,
    // }
    //we can modify in jS
    //explicit//JAVASCRIPT OBJECTS
    // let person = {
    //   name:"David",
    //   age:28,
    //   isAlive:false,
    // }
    // person.name = "34";//34 errror
    // we can update, the key should be same and type should be same
    // 1.)
    // let person: { name: string; age: number; isAlive: boolean } = {
    //   name: "David",
    //   age: 28,
    //   isAlive: false,
    // };
    // 2.)TYPE
    // type PersonType= { name: string; age: number; isAlive: boolean }
    // let person:PersonType = {
    //   name: "David",
    //   age: 28,
    //   isAlive: false,
    // };
    // 3.)OPTIONAL
    // type PersonType= { name: string; age?: number; isAlive: boolean }
    // let person:PersonType = {
    // name: "David",
    // age: 28,//is optional
    // isAlive: false,
    // address:"chennai"//it will errror
    // };
    // 4.)INTERFACE
    //  interface PersonType { name: string; age?: number; isAlive: boolean }
    // let person:PersonType = {
    //   name: "David",
    //   age: 28,//is optional
    //   isAlive: false,
    //   address:"chennai"//it will errror
    // };
    //END//TYPESCRIPT OBJECTS
    //CAHPTER-3_end
    //CHAPTER_4-START
    //union types- if more than one type, we used unoion types
    // OR SYMBOL like: here we use pipe symbol(|)
    //implicit stringOrNumber
    // let strOrNo;
    //   strOrNo = 5;
    //   strOrNo = "5"
    //implicit array
    //  let implicitUnionArray = ["one",1,true];
    //  implicitUnionArray.push("a")
    //  implicitUnionArray.push(5)
    //explicit
    // let errorCode:(number | string);
    //   errorCode = 401;
    //   errorCode = "401"
    // errorCode = false// will make error
    // unionArray explicit
    // let unoionArray:  (string |number | boolean ) [] = [];
    // unoionArray.push("david")
    // unoionArray.push(28)
    // unoionArray.push(false)
    // unoionArray.push(null)// it will throw an error
    // console.log(unoionArray,"unionArray")
    //CHAPTER_4-END
    //CHAPTER_5_START
    //ANY TYPE- IT IS DYNAMIC TYPE
    //basic type
    //  1);
    //  let employeeName:any = "David";
    //  employeeName = "joe";
    //  employeeName = true;
    //  employeeName = null;
    //  employeeName = 5;
    //  employeeName = [];
    //  employeeName = {};
    //  employeeName = false;
    //2);Array
    //  let anyArray: any[] = []
    //  anyArray.push("one")
    //  anyArray.push(2)
    //  anyArray.push(true)
    //3);OBJECT
    // type EmployeeName = {
    //   name: any;
    //   age: any;
    // };
    // let employeDetails: EmployeeName;
    // employeDetails = {
    //   name: "Gajendaran",
    //   age: 28,
    // };
    // employeDetails = {
    //   name: 28,
    //   age: "Gajendaran",
    // };
    //CHAPTER_5_END
    //CHAPTER-6-START
    //implicit
    //  let func  = ()=>{
    //   return "hello"
    //  }
    //   let result = func()
    //explicit//start//
    // function with parameter
    // let add  = (a:number, b:number)=>{
    //   return a+b;
    //  }
    //   let result = add(1,2)
    // // function with return type
    // let add  = (a:number, b:number):number=>{
    //   return a+b;
    //  }
    //   let result = add(1,2)
    //  function with union type of params
    // let add = (a: number, b: number, c: number | string): number => {
    //   if (typeof c === "string") {
    //     return a + b;
    //   }
    //   return a + b + c;
    // };
    // let result = add(1, 2, "4");
    // console.log(result, "result");
    //  function with optional params
    // let add = (a: number, b: number, c?: number): number => {
    //   if(typeof c === "number"){
    //     return a+b+c;
    //   }return a+b;
    // };
    // let result = add(1, 2,5);
    // console.log(result, "result");
    //  function with default value
    // let add = (a: number, b: number, c: number = 10): number => {
    //    return a+b+c;
    // };
    // let result = add(1, 2);
    //  function with type alias params
    // 1);
    //   type StrOrNumberTypeAlias = (string | number);
    //   let add = (a: number, b: number, c:StrOrNumberTypeAlias): number => {
    //     if(typeof c === "string"){
    //       return a+b
    //     }return a+b+c
    //  };
    //  let result = add(1, 2,"555");
    // 2);
    // type consoleObjectTypeAlias = {name:string,age:number}
    //   let consoleObject = (user:consoleObjectTypeAlias) => {
    //     console.log(user,"userObject")
    //  };
    //  let result = consoleObject({name:"david",age:28});
    //  3); // rest params
    //  let restParamfunction = (a:number,b:number,...rest:number[])=>{
    //   console.log(rest,"restParams")
    //  }
    //  restParamfunction(1,2,3,4,5);
    //explicit//end
    //CHAPTER-6-END
    //CHAPTER-7-START
    //tuples or typed Array
    //array//implicit
    //  let userArray = ["Doe",25,true];
    //  userArray[0] = 55;//here we can
    //explicit
    //  let userTuple:[string,number,boolean] = ["Doe",25,true];
    //  userTuple[0] = 55;//here we cannot,because the type is different;
    //  userTuple.push(555)
    //  console.log(userTuple, "userTuple")[("Doe", 25, true, 555)];
    //  how can we avoid it, the push(555),we can use readonly
    //  READ ONLY tuple
    //  let userTuple:readonly[string,number,boolean] = ["Doe",25,true];
    //  userTuple.push("555")
    // console.log(userTuple[0])
    // NAMED TUPLE
    // let userNamedTuple:readonly[name:string,age:number,isAlive:boolean] = ["Doe",25,true];
    // ACCESS NAMED TUPLE
    // let [name,age,isAlive] = userNamedTuple;
    // console.log(name,age,isAlive,"userNamedTuple")
    //CHAPTER-7-END
    //CHAPTER-8-START
    //TYPE ALIAS
    // type UserName = string;
    // type Age = number;
    // type YesOrNo = boolean;
    // let userName:UserName = "David"
    // let age:Age = 28;
    // let isAlive:YesOrNo = false;
    //ARRY alias
    // type NamesArray = string[];
    // let namesArray:NamesArray  = ["David","Senthil","Gajendran"];
    //Object alias
    // type Person = {
    //   name:string,
    //   age: number,
    //   isAlive:boolean,
    // }
    // let person:Person = {
    //   name:"david",
    //   age:26,
    //   isAlive:true,
    // }
    //Union alias
    // type StrOrNo = string | number
    // let errrorStatuscode:StrOrNo  = "401";
    // errrorStatuscode = 401
    //NAMED TUPLE ALIAS
    //  type NameAndAge = [name:string,age:number]
    //  let nameAndAge:NameAndAge = ["david",28]
    //CHAPTER-8-END
    //CHAPTER-9-START//
    //TYPE CASTING with UNKNOWN TYPE// as or <>//as only high priority
    // let firstName:unknown = "string"
    //  console.log(firstName.length())//it will throw the compile error, then i changed the type not value
    //  let getLen = firstName as string;
    // console.log(getLen.length,"getLength")
    //  let getLength = <string>firstName;
    //  console.log(getLength.length,"getLength")
    //DOM ACCESS
    // let inputElement = document.querySelector("input") as HTMLInputElement
    // let val = inputElement.value// error will throw without as keyword
    // console.log(val,"val")
    //CHAPTER-9-END
    //CHAPTER-10-START
    //ENUM-GROUP OF CONSTANT
    // enum - number
    //  enum StatusCode {
    //   SUCCESS = 200,
    //   BAD_REQUEST = 400,
    //   NOT_FOUND = 404,
    //   INTERNAL_SERVER_ERROR = 500,
    // }
    //  console.log(StatusCode.SUCCESS)
    //  console.log(StatusCode.NOT_FOUND)
    //  console.log(StatusCode.BAD_REQUEST)
    //  console.log(StatusCode.INTERNAL_SERVER_ERROR)
    // ENUM-STRING
    //  enum StatusCode {
    //   SUCCESS = "success",
    //   BAD_REQUEST = "badRequest",
    //   NOT_FOUND = "notFound",
    //   INTERNAL_SERVER_ERROR = "internalServerError",
    // }
    //  console.log(StatusCode.SUCCESS)
    //  console.log(StatusCode.NOT_FOUND)
    //  console.log(StatusCode.BAD_REQUEST)
    //  console.log(StatusCode.INTERNAL_SERVER_ERROR)
    // // ENUM-INDEX
    //       enum Direction  {
    //   UP ,
    //   DOWN ,
    //   LEFT ,
    //   RIGHT,
    // }
    //  console.log(Direction.UP)
    //  console.log(Direction.DOWN)
    //  console.log(Direction.LEFT)
    //  console.log(Direction.RIGHT)
    // // ENUM-MIXED- start form first Number
    //  enum StatusCode {
    //   SUCCESS = 200,
    //   BAD_
    //  }
    //  console.log(StatusCode.BAD_,"StatusCode.BAD_")
    // // ENUM-MIXED-STRING start form first string and we have to mention the all the keys
    //  enum StatusCode {
    //   SUCCESS = "success",
    //   BAD_ //it will thro en error
    //  }
    //  console.log(StatusCode.BAD_,"StatusCode.BAD_")
    //CHAPTER-10-END
    //CHAPTER-11-START
    //INTERFACE-OOP-ONLY WORK WITH OBJECTS CONCEPT-SET OF RULES WE NEED TO DEFINED//
    // interface Person {
    //   name: string;
    //   age: number;
    // }
    // let person:Person = {
    //   name: "John",
    //   age: 30
    // };
    //INTERFACE FUNCTION
    // interface Func {
    //   (a: number, b: number): number;//this is signature function
    // }
    // let add: Func = (a: number, b: number) => {
    //   return a + b;//here we add the logic//the same interface we can use in subtraction
    // };
    // console.log(add(2, 3)); // Output: 5
    //EXTENDING INTERFACE
    // interface Person {
    //   name:string,
    //   age:number
    // }
    // interface Employee extends Person{
    //   department:string
    // }
    // let employee:Employee = {
    //   name:"John",
    //   age:26,
    //   department:"IT"
    // }
    // console.log(employee,"employees")
    // TYPE CANNOT BE REPLCED WITH INTERFACE
    // type StrOrNo = string | number
    //   let errrorStatuscode:StrOrNo  = "401";
    //   errrorStatuscode = 401
    // inferface StrOrNo = string | number   //it will throw error, bcause interface is not a type
    //CHAPTER-11-END
    //CHAPTER-12-START
    //CLASS
    //simple class
    // class User1 {
    //   id: number;
    //   constructor(x:number) {
    //     this.id = x;
    //   }
    // }
    // let userObject = new User1(5);
    // console.log(userObject.id, "userObject");
    //simple class with default value
    // class User {
    //   id: number;
    //   constructor(x:number = 10) {
    //     this.id = x;
    //   }
    // }
    // let userObject = new User();
    // console.log(userObject.id, "userObject");
    // INTERFACE
    //   interface PersonInterface {
    //   name: string;
    //   age: number;
    // }
    // interface AddressInterface {
    //      address:string
    // }
    //WE CAN ADD SINGEL INTERFACE IN CLASS
    // class User implements PersonInterface {
    //   name: string;
    //   age: number;
    //   constructor(y:string,z:number) {
    //     this.name = y;
    //     this.age = z;
    //   }
    // }
    // let userObject = new User("david",26);
    // console.log(userObject.name,userObject.age,"userObject");
    //WE CAN ADD MULTIPLE INTERFACE IN CLASS
    // class User implements PersonInterface,AddressInterface {
    //   id: number;
    //   name: string;
    //   age: number;
    //   address:string
    //   constructor(x:number,y:string,z:number,a:string) {
    //     this.id = x;
    //     this.name = y;
    //     this.age = z;
    //     this.address = a
    //   }
    // }
    // let userObject = new User(5,"david",26,"chennai");
    //CLASS EXTENDS
    // class UserDetails extends User {
    //   constructor(x:number,y:string,z:number,a:string) {
    //     super(x,y,z,a)
    //   }
    // }
    // let userDetailsObject = new UserDetails(5,"david",26,"chennai");
    // WE CAN NOT USE MULTIPLE EXTENDS, eXAMPLE BELOW
    // class UserDetails extends User,User1 {//it will throw error
    //   constructor(x:number,y:string,z:number,a:string) {
    //     super(x,y,z,a)
    //   }
    // }
    // let userDetailsObject = new UserDetails(5,"david",26,"chennai");
    //CHAPTER-12-END
    //CHAPTER-13-START
    //ABSTRACT CLASS-INCOMPLETE CLASS
    // 1);
    // abstract class Person {
    //   name: string;
    //   constructor(name: string) {
    //     this.name = name;
    //   }
    //   abstract getDetails(): void;
    // }
    // class Employee extends Person {
    //   getDetails = ()=>{
    //     console.log(`Name: ${this.name}`);
    //   }
    // }
    // let employee  = new Employee("John",);
    // console.log(employee.getDetails());
    // 2);
    // abstract class Person {
    //   abstract name: string;//property abstract
    //   abstract getDetails(): void;//function abstract
    // }
    // class Employee extends Person {
    //   name: string;
    //   constructor(nameparam:string){
    //     super()
    //     this.name = nameparam
    //   }
    //   getDetails = ()=>{
    //     console.log(`Name: ${this.name}`);
    //   }
    // }
    // let employee  = new Employee("John",);
    // console.log(typeof(employee.name),"empleoo")
    // console.log(employee.getDetails());
    // console.log("davidiii")
    //CHAPTER-13-END
    ///another file
    //start//Object Implicit Types
    // let person = {
    //   name: "John",
    //   age: 30
    // };
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
    // Using an Interface// start//
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
    // Using an Interface// end//
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
    //anohterFile
    //DIFFERENCE BTEWEEN ITERFACE AND TYPEALIAS
    // Interface:
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
    //   type Employee = Person & {//ampersand
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
})();
