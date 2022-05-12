let apiKey = ""
function fetchUrl(){
    fetch("https://api.openweathermap.org/data/2.5/weather?id=patna&appid="+this.apiKey
    ).then((respnses) => respnses.json())
    .then((data) => console.log(data))

}
