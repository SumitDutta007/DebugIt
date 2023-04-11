const quiz = [
    {
        question:"Q1. What is your name?",
        a: "BK",
        b:"M",
        c:"bo",
        d:"P",
        ans:"ans3"
    },
    {
        question:"Q2. What is your 2nd name?",
        a: "B",
        b:"M",
        c:"bdo",
        d:"Pa",
        ans:"ans3"
    },
    {
        question:"Q3. What is your 3rd name?",
        a: "BK",
        b:"M",
        c:"hdo",
        d:"ya",
        ans:"ans3"
    },
    {
        question:"Q4. What is your 4th name?",
        a: "K",
        b:"C",
        c:"bo",
        d:"Pa",
        ans:"ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit=document.querySelector('#submit');
const Submit = document.getElementsByClassName(".buton");
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let buton=document.getElementsByClassName(".buton");

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
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quiz[questionNumber].ans)
    {
        score++;
    };
    questionNumber++;
    deselectAll();
    if(questionNumber < quiz.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You saved ${score}/${quiz.length} fishes!</h3>`
        submit.innerText = "Play Again ;)";
        showScore.display= "flex"; 

        submit.addEventListener('click',()=>{
            window.location.href = "index.html";
        });
    }
});

