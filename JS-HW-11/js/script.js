let btn = document.querySelectorAll(".btn")
document.addEventListener("keydown", () => {
    btn.forEach(x => {
        if (x.innerHTML.toLowerCase() == event.key || event.key == "Enter") {
            btn.forEach((x) => {
                x.classList.remove("blue")
            })
        }
    }
    )
    for (let i = 0; i < btn.length; i++) {
        if (event.key == btn[i].innerHTML.toLowerCase()) {
            btn[i].classList.toggle("blue")
        } else if (event.key == "Enter" && btn[i].innerHTML == "Enter") {
            btn[i].classList.toggle("blue")
        }
    }
})


