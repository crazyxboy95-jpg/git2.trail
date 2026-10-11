let number-3;
factor=0;

for(i=1; i<=3; i++){

  if(3%i==0){
      factor++;
  }
}

(factor==2) ? console.log("prime") : console.log("no a prime number");