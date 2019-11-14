let images =document.querySelectorAll(".image-to-show")
let stopBtn =document.getElementById("stop")
let resumeBtn =document.getElementById("resume")
let i=1
let a=0
$("img").hide()
$("img:first").fadeIn()
let anime=setInterval(()=>{
$("img").hide()
$("img").eq(i).fadeIn(1000)
i++
if (i==4){i=0}
},1000) 
stopBtn.addEventListener("click",stop)
resumeBtn.addEventListener("click",resume)
function stop(){
a++
clearInterval(anime)
a=0
}
function resume(){
    a++
    if(a==1){
        anime=setInterval(()=>{
            $("img").hide()
            $("img").eq(i).fadeIn(1000)
            i++
            if (i==4){i=0}
            },1000) 
    }
}