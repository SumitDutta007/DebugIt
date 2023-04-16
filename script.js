//Loading Questions
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
//Playing Music
const music = new Audio("music/gameaudio.mp3");
music.play();

//storing the html css elements
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
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');

//Remarks for result page
const images={
    correct:"Img/correct.png",
    incorrect:"Img/incorrect.png"
};

let imageSrc = images.incorrect;

let questionNumber = 0;
let score = 0;

//showing next question and options
const loadQuestion = () =>{
    const questionList = quiz[questionNumber];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

//getting the user input answer
const getCheckedAnswer = ()=>{
    let  answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })
    return answer;
};

//clearing the option marked for next question 
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

//adding EventListener to button
submit.addEventListener('click',()=>{
    //adding refresh location to index.html
    function Exit()
    {
    window.location.href="index.html";
    music.play();
    }
    window.onbeforeunload = Exit;
    
    //checking whether user input answer is correct or wrong
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
    imgElement.style.height="9vh";
    imgElement.style.marginLeft="9rem";
    //Adding remark images beside each question in result page
    if(questionNumber===0)
    {
        question1.appendChild(imgElement);
    }
    else if(questionNumber===1){
        question2.appendChild(imgElement);
    }    
    else if(questionNumber===2){
        question3.appendChild(imgElement);
    }
    else if(questionNumber===3){
        question4.appendChild(imgElement);
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
    //SHOWING RESULTS PAGE
    else{
        document.getElementsByTagName("ul")[0].style.display="none";
        document.getElementsByTagName("h3")[0].style.display = "none";
        document.getElementById("Questions").style.display="flex";
        document.getElementById("Questions").style.flexDirection="column";

        document.getElementById("question1").style.display="flex";
        document.getElementById("question1").style.justifyContent="center";
        document.getElementById("question1").style.alignItems="center";
        document.getElementById("question1").style.marginBottom="3rem";

        document.getElementById("question2").style.display="flex";
        document.getElementById("question2").style.justifyContent="center";
        document.getElementById("question2").style.alignItems="center";
        document.getElementById("question2").style.marginBottom="3rem";

        document.getElementById("question3").style.display="flex";
        document.getElementById("question3").style.justifyContent="center";
        document.getElementById("question3").style.alignItems="center";
        document.getElementById("question3").style.marginBottom="3rem";

        document.getElementById("question4").style.display="flex";
        document.getElementById("question4").style.justifyContent="center";
        document.getElementById("question4").style.alignItems="center";

        const imgElement2=document.createElement("img");
        imgElement2.src = "Img/win.png";
        imgElement2.style.height="45vh";
        imgElement2.style.width = "45vh";
        remark.appendChild(imgElement2);
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
