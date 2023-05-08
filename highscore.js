let scoreData = JSON.parse(localStorage.getItem("scoreData")) || []

const scores = document.querySelector('#scores')

let text = `<table style = "width:80%"><tr><th>Name</th><th>Score</th></tr>`
scoreData.forEach(element => {
    text += `<tr><td>${element.Name}</td><td>${element.Score}</td></tr>`
});
text += `</table> <a href="index.html">
<button id="home">Go Back<span></span></button>
</a>`

scores.innerHTML = text