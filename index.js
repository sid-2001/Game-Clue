var answer = document.getElementById("answer")
var submit = document.getElementById("submit")
var response = document.getElementById("response")
var verify = "github";
var link = document.getElementById("answer-here")

submit.addEventListener("click",() =>{
    console.log(answer.value)
    console.log(answer.value.toLowerCase());
    
    if(verify === answer.value.toLowerCase()){
        console.log("Congratulations")
        response.innerText = "Congrats You Can Proceed"
        link.setAttribute("href","https://www.google.com/")
    }else{
        response.innerText = "Wrong Answer! Please Try Again"
        console.log("Wrong Answer")
    }
    answer.value = ""


})


