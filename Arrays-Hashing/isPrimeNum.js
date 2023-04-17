// prime number can only divisible by 1 and itself
/* 
The code if (num < 2) is commonly used in programming to check if a given number
 num is less than 2. This is because the smallest prime number is 2, and any 
 number less than 2 is not a prime number by definition. Therefore, 
 if num is less than 2, we can immediately conclude that 
 it is not a prime number and avoid further computation.
*/

function isPrime(num){  // first step is to find if the num less the 2 
  if( num < 2 ){
    return false;
  }
  // modules % operator is going to give us the remainder of division
for (let i = 2; i < num; i++){
  if(num % i === 0){
    return false;
  }
}
return true
}
console.log(isPrime(11)); // true - prime number 
console.log(isPrime(8)); // false - not a prime number