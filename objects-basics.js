/*
=====================================================
 JavaScript Objects – Levels 1, 2, and 3
 File: objects-basics.js
=====================================================
 You can place this file inside any folder and run it
 using: node objects-basics.js
=====================================================
*/

// ================================
// Level 1: Understanding Objects
// ================================

// Q1. What is an object in JavaScript?
// An object is a collection of related data stored as
// key-value pairs (properties).

const personExample = {
  name: "Ali",
  age: 20
};
console.log("Q1:", personExample);

// Q2. Ways to create an object

// 1) Object literal
const objLiteral = {
  language: "JavaScript"
};

// 2) Using new Object()
const objConstructor = new Object();
objConstructor.language = "JavaScript";

console.log("Q2:", objLiteral, objConstructor);

// Q3. Object properties
const student = {
  name: "Abdalsalam",
  age: 22,
  country: "Sudan"
};
console.log("Q3:", student);

// Q4. Accessing object properties
console.log("Q4 Dot Notation:", student.name);
console.log("Q4 Bracket Notation:", student["age"]);

// Q5. Updating a property value
student.age = 23;
console.log("Q5 Updated Age:", student.age);

// Q6. Adding a new property
student.major = "Computer Science";
console.log("Q6 Added Property:", student);

// Q7. Deleting a property
delete student.country;
console.log("Q7 After Deletion:", student);


// ================================
// Level 2: Working with Object Methods
// ================================

// Q8. What is a method?
// A method is a function stored as an object property.

const car = {
  brand: "Toyota",
  start: function () {
    return "Car started";
  }
};
console.log("Q8:", car.start());

// Q9. Using `this` inside a method
const user = {
  username: "admin",
  greet() {
    return `Hello, I am ${this.username}`;
  }
};
console.log("Q9:", user.greet());

// Q10. Looping through object properties
console.log("Q10:");
for (let key in student) {
  console.log(key, ":", student[key]);
}

// Q11. Checking if a property exists
console.log("Q11 using in:", "name" in student);
console.log(
  "Q11 using hasOwnProperty:",
  student.hasOwnProperty("age")
);

// Q12. Getting all keys and values
console.log("Q12 Keys:", Object.keys(student));
console.log("Q12 Values:", Object.values(student));

// Q13. Getting keys and values together
console.log("Q13 Entries:");
for (let [key, value] of Object.entries(student)) {
  console.log(key, value);
}


// ================================
// Level 3: Object Operations
// ================================

// Q14. Copying an object
const originalObj = { a: 1, b: 2 };
const copy1 = Object.assign({}, originalObj);
const copy2 = { ...originalObj };
console.log("Q14:", copy1, copy2);

// Q15. Merging objects
const obj1 = { x: 1 };
const obj2 = { y: 2 };
const merged1 = Object.assign({}, obj1, obj2);
const merged2 = { ...obj1, ...obj2 };
console.log("Q15:", merged1, merged2);

// Q16. Freezing an object
const frozenObj = { score: 100 };
Object.freeze(frozenObj);
frozenObj.score = 200; // Will not change
console.log("Q16 Frozen:", frozenObj);

// Q17. Sealing an object
const sealedObj = { level: 1 };
Object.seal(sealedObj);
sealedObj.level = 2; // Allowed
// delete sealedObj.level; // Not allowed
console.log("Q17 Sealed:", sealedObj);

// Difference:
// freeze -> cannot add, delete, or update properties
// seal   -> can update, but cannot add or delete

// Q18. Number of properties
console.log("Q18 Property Count:", Object.keys(student).length);

// Q19. Convert object to array
const entriesArray = Object.entries(student);
console.log("Q19 Object to Array:", entriesArray);

// Q20. Convert array back to object
const backToObject = Object.fromEntries(entriesArray);
console.log("Q20 Array to Object:", backToObject);

/*
=====================================================
 End of File
=====================================================
*/
