var answer = document.getElementById("answer")
var submit = document.getElementById("submit")
var verify = "github";
var link = document.getElementById("answer-here")

submit.addEventListener("click",() =>{
    console.log(answer.value)
    console.log(answer.value.toLowerCase());
    if(verify === answer.value.toLowerCase()){
        console.log("Congratulations")
        link.setAttribute("href","https://www.google.com/")
    }else{
        console.log("Wrong Answer")
    }


})


