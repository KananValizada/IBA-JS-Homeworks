let flag = true;
while (flag) {
  if (localStorage.getItem("recentDOM") == undefined) {
    flag = false;
  } else {
    document.body.innerHTML = localStorage.getItem("recentDOM");
    flag = false;
  }
}
let contain =document.querySelector("#contain")
let btn =document.getElementById("changeBtn")
let link =document.querySelectorAll("a")
let img=document.querySelector(".main-image")
btn.addEventListener("click",changeTheme)

function changeTheme(){
    contain.classList.toggle("body-class")
    link.forEach((x)=>{
        x.classList.toggle("color-white")
    })
    img.classList.toggle("background-gray")

 let recentDOM = document.body.innerHTML;
  localStorage.setItem("recentDOM", recentDOM);

}