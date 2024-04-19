// conversion of data in javascript
// number to string and string to number
let random = 44
console.log(typeof random); 
let checkisString = String(random);
console.log(checkisString)
console.log(typeof checkisString);

let rand = "4413ratan"
let isInt = Number(rand)
console.log(isInt);
console.log(typeof isInt);

/*
33 = number 
"33" = string
"33abc" = nan(not a number)
*/ 
let r = /*true*/ false;
console.log(r)
console.log(typeof r);
let m = Number(r);
console.log(m);

let n = null;
console.log(n)
console.log(typeof n);

let un = undefined;
console.log(typeof un);
console.log( un);

// prefix(--) and postfix(++) operator
let x = 4 
--x;
console.log(x);