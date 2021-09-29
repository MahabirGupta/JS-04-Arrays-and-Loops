function sumofposint(){
let value1 = document.getElementById("valueofnum").value;
let index = 1
let sum = 0;

while(index <= value1){
	sum = index + sum
    
index = index+1;

}
console.log(sum);
document.getElementById("sum").value=sum;
}
