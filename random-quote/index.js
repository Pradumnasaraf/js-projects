let btn = document.getElementById("btn")
let quoteBox = document.getElementById("quote-box")
let authorBox = document.getElementById("author-box")

function setQuote(){
    const url = fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        if ((data.content).length <= 125){
            quoteBox.textContent = data.content
            authorBox.textContent = "- " + data.author
        }else{
            console.log("hello")
            setQuote()
        }
    })
}
btn.addEventListener("click", function(){ 
    setQuote()
})

setQuote()
