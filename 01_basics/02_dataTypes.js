
// =====================================
// JAVASCRIPT DATA TYPES
// =====================================

// 1. NUMBER
let age = 21;
let price = 99.50;

console.log("----- NUMBER -----");
console.log(age);
console.log(price);
console.log(typeof age); // number


// 2. STRING
let name = "Venu";
let city = 'Nuzvid';

console.log("\n----- STRING -----");
console.log(name);
console.log(city);
console.log(typeof name); // string


// 3. BOOLEAN
let isStudent = true;
let isEmployed = false;

console.log("\n----- BOOLEAN -----");
console.log(isStudent);
console.log(isEmployed);
console.log(typeof isStudent); // boolean


// 4. UNDEFINED
let marks;

console.log("\n----- UNDEFINED -----");
console.log(marks);        // undefined
console.log(typeof marks); // undefined


// 5. NULL
let selectedValue = null;

console.log("\n----- NULL -----");
console.log(selectedValue);        // null
console.log(typeof selectedValue); // object


// 6. BIGINT
let bigNumber = 123456789012345678901234567890n;

console.log("\n----- BIGINT -----");
console.log(bigNumber);
console.log(typeof bigNumber); // bigint


// 7. SYMBOL
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("\n----- SYMBOL -----");
console.log(id1);
console.log(id2);
console.log(id1 === id2); // false
console.log(typeof id1);  // symbol


// =====================================
// NON-PRIMITIVE DATA TYPES
// =====================================

// 8. OBJECT
let student = {
    name: "Venu",
    age: 21,
    branch: "CSE"
};

console.log("\n----- OBJECT -----");
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(typeof student); // object


// 9. ARRAY
let numbers = [10, 20, 30, 40];

console.log("\n----- ARRAY -----");
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[2]);
console.log(typeof numbers); // object
console.log(Array.isArray(numbers)); // true


// 10. FUNCTION
function add(a, b) {
    return a + b;
}

console.log("\n----- FUNCTION -----");
console.log(add(10, 20)); // 30
console.log(typeof add);  // function


// =====================================
// CHECKING ALL DATA TYPES
// =====================================

console.log("\n----- TYPEOF CHECKING -----");

console.log(typeof 100);          // number
console.log(typeof "Hello");      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof 10n);           // bigint
console.log(typeof Symbol());     // symbol
console.log(typeof []);           // object
console.log(typeof {});           // object
console.log(typeof function(){}); // function
