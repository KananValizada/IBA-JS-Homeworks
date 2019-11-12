let icon =document.querySelectorAll(".fas")
let password =document.querySelectorAll(".password")
let btn = document.getElementById("btn")
let span =document.createElement("span")
span.style.cssText="color:red"
for(let i=0;i<icon.length; i++){
    icon[i].addEventListener("click",()=>{
            icon[i].classList.toggle("fa-eye-slash")
            if(icon[i].className.includes("fa-eye-slash")){
                password[i].type="password"
            }else{
                password[i].type="text"
            }
    })
    password[i].addEventListener("input",display)
}
function display(){
    span.style.display="none"
}

btn.addEventListener("click",compare)
function compare() {
if(password[0].value==password[1].value){
    if(password[0].value=="" && password[1].value==""){
        span.innerHTML="You didn't wrote the password"
        span.style.display="block"
        btn.before(span)
        return
    }else{
        alert("You are welcome")
    }
    
}else {
    span.innerHTML="You need to enter the identical values"
    span.style.display="block"
btn.before(span)
}
}