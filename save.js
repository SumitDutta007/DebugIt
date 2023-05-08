const save=document.querySelector('#save')
const name = document.querySelector('#name')
const a = []

save.addEventListener('click',()=>{
    const scoreData = JSON.parse(localStorage.getItem("scoreData")) || []

    const Name = name.value
    const Score = JSON.parse(localStorage.getItem("mostRecentScore"))

    scoreData.push({Name , Score})
    scoreData.sort()
    let c = JSON.stringify(scoreData)
    localStorage.setItem("scoreData",c)
    window.location.href = "index.html"
})