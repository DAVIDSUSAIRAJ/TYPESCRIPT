"use strict";
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
  //   let notAssigned: undefined; // undefined// // Type explicitly declared as undefined
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
  //start//primitive data type Implicit  with array//TS//
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
})();
