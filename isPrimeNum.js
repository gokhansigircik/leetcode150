// prime number can only divisible by 1 and itself

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