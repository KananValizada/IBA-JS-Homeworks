function getArr (arr) {
    
   return arr.map((value)=>{
        if (Array.isArray(value)){
            let list = document.createElement("ul")

            value.map((subvalue)=>{
                list.innerHTML += `<li>${subvalue}</li>`
               
            })
             return list
        }else {
            return `<li>${value}</li>`
        }
    })
}
let arr = ['hello', 'world', 'Baku',["Language","Music","Art"], 'IBA Tech Academy', '2019']
let mainList=document.createElement("ul")

for (let val of getArr(arr)) {

    if (typeof(val) == 'object') {
        mainList.innerHTML += val.outerHTML
    } else { 
        mainList.innerHTML += val
    }
}
document.querySelector("script").before(mainList)

let time = document.createElement("div") 
time.style.cssText = "margin-left:10px"
let limit = 9;
  mainList.before(time)
  time.innerHTML ="10 seconds remaining"
let ticToc =setInterval (function() {
    time.innerHTML=limit + " seconds remaining"
  limit -=1
  if(limit<0){
      clearInterval(ticToc);
      mainList.hidden =true;
      time.innerHTML="to get 10 seconds more refresh the page"
  }
    }, 1000);

  