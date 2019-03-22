/*
*Project Euler (https://projecteuler.net/) Probelm 4:
*Author: Jonathan Piza
*Problem : A palindromic number reads the same both ways. *The largest palindrome made from the product of two 2-digit *numbers is 9009 = 91 × 99.
*Find the largest palindrome made from the product of two *3-digit numbers.
*/

var palindromes = [];

for(j = 999; j >= 100; j--){
  for(k = 999; k >= 100; k--){
    number = j*k;
    if(is_palindrome(number)){
      palindromes.push(number);
    }
  }
}
console.log(Math.max.apply(null, palindromes));

function is_palindrome(number){
  number_str = number.toString();
  length = number_str.length;

  palindrome = true;
  for(i =0; i < length; i++){
    if(number_str[0+i] != number_str[(length -1) - i]){
      palindrome =  false;
    }
  }
  return palindrome;
}
