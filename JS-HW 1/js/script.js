let name = prompt("enter your name");

let sure;
while(!name) {
    name = prompt("enter your name")
}
let age = parseInt(prompt("enter your age"));
while(isNaN(age)) {
    age = parseInt(prompt("enter your age",age))
}
if(age<18){
    alert("You are not allowed to visit this website")
}else if(age>18 && age <22){
    sure = confirm("Are you sure you want to continue?")
    if(sure){
        alert("Welcome "+ name)
    }else {
        alert("You are not allowed to visit this website")
    }
}else {
    alert("Welcome "+ name)
}
