let prime=true;
let num=13;

for(let i=2; i<=num; i++){
    if(num%2==0){
        prime=false;
    }
}
if (prime == true){
console.log(num, "is Prime");
} else {
console.log(num, "is not a prime number");
}