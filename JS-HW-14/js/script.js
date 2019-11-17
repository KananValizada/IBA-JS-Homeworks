let tabsTitle = $(".tabs-title")
let tabsText = $(".text")
console.log(tabsTitle)
for(let i=0 ;i<tabsTitle.length;i++){
    tabsTitle.eq(i).click(makeActive)
    function makeActive(){
        tabsTitle.removeClass("active")
        tabsTitle.eq(i).toggleClass("active")
        tabsText.hide()
        tabsText.eq(i).fadeIn(1000)

    }
}