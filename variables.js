// 1.u cant define variable more than once 

let petName='joe' //joe

petName='Puppy' // do not use let if u want to assign new value to variable.

console.log(petName) // Puppy

//2
let myVariable = "Valid";  // ✅ Allowed
let _privateVar = "Valid"; // ✅ Allowed
let $specialVar = "Valid"; // ✅ Allowed

let 2ndVar = "Invalid"; // ❌ Cannot start with a number
let let = "Invalid";    // ❌ Reserved keyword


/*
✅ Must start with:

A letter (a-z, A-Z)

An underscore (_)

A dollar sign ($)

❌ Cannot start with:

A number (0-9)

Special characters except _ or $

Reserved JavaScript keywords (e.g., let, function, class)

*/