let num = parseInt(prompt("enter a number"))
while(isNaN(num)){
    num = parseInt(prompt("enter a number"))
}
let count = 0;
for(let i=0 ; i<num ; i++){
if(i%5==0){
    console.log(i)
}
}
