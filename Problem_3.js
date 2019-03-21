/*
*Project Euler (https://projecteuler.net/) Probelm 3:
*Author: Jonathan Piza
*Problem : The prime factors of 13195 are 5, 7, 13 and 29.
*What's the largest prime factor of the number 600851475143 ?
*/

n = 600851475143;
factor=2
lastFactor=1

while (n>1){
  if (n%factor == 0){
    lastFactor=factor;
    n=n/factor;
    while(n%factor == 0){
      n=n/factor;
    }
  }
  factor=factor+1;
}
console.log(lastFactor);
