let btn = document.getElementById("btn")
let output = document.getElementById("output")

var getQuote
var getAuthor

const url = fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        output.textContent = data.content
        getAuthor = data.author
    })
