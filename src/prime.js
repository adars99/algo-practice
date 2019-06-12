/* simple Solution of prime number */
function Prime(n){
 var divisor = 2;

 while(n > divisor){
   if(n % divisor === 0) { return false;}
   else{
     divisor ++;
   }
 }
 return true;
}

/* simple Solution but better than above solution */
function PrimeNumber(n){
  var divisor =3, limit = Math.sqrt(n);

  if(n === 2 || n === 3) { return true;}
  if (n % 2 === 0) { return false;}

  while(divisor <= limit){
    if(n%divisor ===0) {
       return false;
    }else{
      divisor +=2;
    }
  }
  return true;
}

/* find the prime factor e.g. primeFactors(69);= [3, 23]
Interviewer:What is the run time complexity? can you make this better

You: this is O(n). you can increase divisor by 2 form divisor = 3. 
Because, if a number is divisible by any even number it would divisible by 2. Hence, you dont need to divide by even numbers. Besides, you will not have a factor bigger than half of its value. if you want make it complex use tough concept in no. 1 (try-2. if u get it)
*/
function PrimeFactor(n){
 var factor = [], divisor = 2;

 while(n > 2){
   if(n % divisor === 0){
     factor.push(divisor);
     n = n / divisor;
   }else{
     divisor ++;
   }
 }
 return factor;
}
export {Prime, PrimeNumber, PrimeFactor }