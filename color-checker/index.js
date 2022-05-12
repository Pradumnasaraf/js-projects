userInputText = document.getElementById("user-ipt");
checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", function(){
    console.log("Click Reg");
    textValue = userInputText.value; 
    document.body.style.backgroundColor = `${textValue}`;
})

