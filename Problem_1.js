sum = 0;
for(x = 999; x >= 0; x--){
  if(x%3 == 0 || x%5 == 0){
    sum = sum + x;
  }
}
console.log(sum);
