let num1 = parseInt(prompt("enter first number"))
while(isNaN(num1)){
    num1 = parseInt(prompt("enter first number"))
}
let num2 = parseInt(prompt("enter second number"))
while(isNaN(num2)){
    num2 = parseInt(prompt("enter second number"))
}
let operation = prompt("enter an operation","only * ; / ; + ; -")
function getResult(){
    if(operation=="+"){
        return num1 +num2
    }else if(operation=="-"){
        return num1 - num2
    }else if(operation=="*"){
        return num1 * num2
    }else if(operation=="/"){
        return num1 / num2
    }
}
console.log(getResult())