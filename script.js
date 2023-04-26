const quiz = [
    {
        question:"Q1. If 1=3, 2=3, 3=5, 4=4, 5=4, Then 6=?",
        a: "4",
        b:"5",
        c:"3",
        d:"2",
        ans:"ans3"
    },
    {
        question:"Q2. Which number is equivalent to 3^(4)÷3^(2)",
        a: "9",
        b:"7",
        c:"0",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q3. There are 49 dogs signed up for a dog show. There are 36 more small dogs than large dogs. How many small dogs have signed up to compete?",
        a: "13",
        b:"6.5",
        c:"42.5",
        d:"Don't give up!",
        ans:"ans3"
    },
    {
        question:"Q4. There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?",
        a: "741",
        b:"241",
        c:"182",
        d:"141",
        ans:"ans4"
    }
];
const music = new Audio("music/gameaudio.mp3");
music.play();

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit=document.querySelector('#submit');
const Submit = document.getElementsByClassName(".buton");
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const remark=document.getElementById('remark');
const ticks=document.getElementById('ticks');
const rquestion1 = document.getElementById('rquestion1');
const rquestion2 = document.getElementById('rquestion2');
const rquestion3 = document.getElementById('rquestion3');
const rquestion4 = document.getElementById('rquestion4');
const icon = document.querySelector('#icon');
const settingsText=document.getElementById('settingsText');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');

icon.addEventListener('click',()=>{
    settingsText.style.display = "flex";
    document.getElementById('settings').style.background = "rgba(255, 255, 255, 0.519)";
})
yes.addEventListener('click',()=>{
    music.play();
    settingsText.style.display = "none";
    document.getElementById('settings').style.background = "none";
})
no.addEventListener('click',()=>{
    music.pause();
    settingsText.style.display = "none";
    document.getElementById('settings').style.background = "none";
})

const images={
    correct:"Img/correct.png",
    incorrect:"Img/incorrect.png"
};

let imageSrc = images.incorrect;

let questionNumber = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quiz[questionNumber];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckedAnswer = ()=>{
    let  answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',()=>{
    function Exit()
    {
    window.location.href="index.html";
    }
    window.onbeforeunload = Exit;

    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quiz[questionNumber].ans)
    {
        score++;
        imageSrc = images.correct;
    }
    else{
        imageSrc = images.incorrect;
    }
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;

    if(questionNumber===0)
    {
        rquestion1.appendChild(imgElement);
    }
    else if(questionNumber===1){
        rquestion2.appendChild(imgElement);
    }    
    else if(questionNumber===2){
        rquestion3.appendChild(imgElement);
    }
    else if(questionNumber===3){
        rquestion4.appendChild(imgElement);
    } 
    questionNumber++;
    deselectAll();
    if(questionNumber < quiz.length-1){
        loadQuestion();
    }
    else if(questionNumber === quiz.length-1){
        submit.innerText = "SUBMIT";
        loadQuestion();
    }
    else{
        document.getElementsByTagName("ul")[0].style.display="none";
        document.getElementsByTagName("h3")[0].style.display = "none";

        remark.style.display = "flex";
        showScore.display= "block";
        showScore.margin = "auto";
        showScore.innerHTML = `
        <h2> You saved ${score}/${quiz.length} fishes!</h2>`
        submit.innerText = "Play Again :)";
        submit.style.margin="auto";

        submit.addEventListener('click',()=>{
            window.location.href = "index.html";
        });
    }
});
