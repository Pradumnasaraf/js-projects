firstNumber = document.getElementById("first-num")
secondNumber = document.getElementById("second-num")
result = document.getElementById("result")
submitButton  = document.getElementById("submit");

submitButton.addEventListener("click", function(){ 
    from = parseInt(firstNumber.value) 
    to =  parseInt(secondNumber.value)
    if (from > to) {
        [from, to] = [to, from]
        setResult()
        
    }else{
        setResult()
    }
})

setResult =()  =>{
    radomNumber = Math.floor(Math.random() * to) + from;
    result.textContent = radomNumber
}
