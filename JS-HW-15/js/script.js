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
