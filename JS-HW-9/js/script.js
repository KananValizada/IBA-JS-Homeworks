let tabs = document.querySelectorAll('.tabs-title');
 let tabs_text = document.querySelectorAll('.text');
 for (let i = 0; i < tabs.length; i++) {
     tabs[i].dataset.index = i;
     tabs_text[i].dataset.key = i;
     tabs[i].addEventListener('click', () => {  
         tabs.forEach((x) => {
             x.classList.remove("active"); 
         })
         tabs_text.forEach((x) => {
             x.style.display = "none"; 
         })
         tabs_text[i].style.display = "block"; 
         tabs[i].classList.add("active"); 
     })

 }

 tabs_text.forEach((x) => {
     if (x.dataset.key == 0) { 
         return;
     }
     x.style.display = "none";
 })