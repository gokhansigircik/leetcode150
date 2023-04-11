// So imagine you have two things: five apples (which we'll call "num1") 
// and a toy (which we'll call "num2"). Now, you want to add the apples and
//  the toy together and see what you get. You might think that you'll just 
//  get a bigger pile of apples and a toy, but actually, when you try to add 
//  them together, you'll get an error because they're two different things 
//  and you can't add them together.

let num1 = 5;
let num2 = "hello"; 
try { 
let result = num1 + num2; 
console.log(result);
} catch(error) { 
console.log("Oops, something went wrong! Error message:", error); 
}

// console.log(typeof 5); number 