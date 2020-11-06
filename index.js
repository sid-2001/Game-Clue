var answer = document.getElementById("answer")
var inputSection = document.getElementById("input-section")
var submit = document.getElementById("submit")
var response = document.getElementById("response")
var winResult = document.getElementById("win-result")
var looseResult = document.getElementById("loose-result")
// looseResult.style.display = "none"
winResult.style.display = "none"
var link = document.getElementById("answer-here")
var wrong = document.createElement("div")
var i = document .createElement("i")
wrong.appendChild(i)
i.classList.add("far","fa-times-circle", "fa-4x", "wrong-color")

submit.addEventListener("click",() =>{
    // console.log(answer.value)
    // console.log(answer.value.toLowerCase());
    
    if("git" === answer.value.toLowerCase()){
        // console.log("Congratulations")
        response.innerText = "Congrats You Can Proceed"
        link.setAttribute("href","https://forms.gle/CQCnFNC2Qq6QsmUH6");
        inputSection.style.display = "none"
        winResult.style.display = ""
        winResult.classList.add("animate")
    }else{
        looseResult.style.display = ""
        response.innerHTML = "<div><h4>Wrong Answer! Please Try Again</h4><i></i></div>"
        response.appendChild(wrong)

        // response.lastChild.classList.add("far","fa-times-circle", "fa-4x")
        setTimeout(() => {
            response.innerText = "Enter the answer to activate link"
        }, 3000);
        // console.log("Wrong Answer")
    }
    answer.value = ""


})


