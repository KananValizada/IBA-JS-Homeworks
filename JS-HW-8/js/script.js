let text = document.getElementById("text")
let msg =document.getElementById("message")
let span=document.getElementById("show")
let close =document.getElementById("close")
let alert =document.getElementById("alert")
text.addEventListener("focus",focus)
text.addEventListener("blur",blur)

close.addEventListener("click",closing)
function focus() {
    alert.style.cssText="display:none;"
        text.style.cssText="border-color:green"
}
function blur(){
    text.style.cssText="border-color:none"
    if(text.value==false){
        return
    }
    span.innerHTML=`Current prise: ${parseInt(text.value)}`
    msg.style.cssText="display:inline-block"
    if(parseInt(text.value)<0){
        text.style.cssText="border-color:red ; color:red"
        msg.style.cssText="display:none"
        alert.style.cssText="display:inline-block;"
    }
}
function closing(){
    msg.style.cssText="display:none"
    text.value=""
}
