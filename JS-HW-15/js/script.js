let windowHeight= $(window).height()
let goUp=$("#go-up")
goUp.hide()
$(window).scroll(showBtn)
function showBtn(){
    if($(window).scrollTop()>windowHeight){
        goUp.fadeIn(1000)
    }else{
        goUp.fadeOut(1000)
    }
}

$("#slide-btn").click(()=>{
        $("#top-rated").slideToggle(500)
        if($("#slide-btn").html()=="Hide"){
             $("#slide-btn").html("Show")
        }else{
            $("#slide-btn").html("Hide")
        }
       
})