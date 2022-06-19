const quiz = [
    {
        question: "Q) GTA V is develoed by ?",
        a:"Nintendo",
        b:"Rockstar Games",
        c:"Xbox Games",
        d:"Tencent",
        ans:"ans2"
    },
    {
        question: "Q) Which is one is the first GTA game?",
        a:"Grand Theft Auto",
        b:"Grand Theft Auto: Vice City",
        c:"Grand Theft Auto: San Andreas ",
        d:"Grand Theft Auto V",
        ans:"ans1"
    },
    {
        question: "Q) What is the sirname of Gta ViceCity Character?",
        a:"Anand",
        b:"De Santa",
        c:"Philips",
        d:"vercetti",
        ans:"ans4"
    },
    {
        question: "Q) What is the name of Franklin Dog in gta v?",
        a:"tommy",
        b:"Chop",
        c:"Buddy",
        d:"Shiro",
        ans:"ans2"
    }
];

questionInHeading = document.querySelector("h2");
option1 = document.querySelector("#option1");
option2 = document.querySelector("#option2");
option3 = document.querySelector("#option3");
option4 = document.querySelector("#option4");
submit = document.getElementById("btn");
answers = document.querySelectorAll('.answer');
showDiv = document.getElementById("showScore");


let questionCount = 0;
let score = 0 ;
function deselectAll()
{
    answers.forEach((elem)=>elem.checked = false);
}
function loadQuestion()
{
    const questionList = quiz[questionCount];
    questionInHeading.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

    deselectAll();
}
loadQuestion();
function getAnswerByUser()
{
    let answer=0;
    answers.forEach((optionSelectedByUser)=>{
        if(optionSelectedByUser.checked)
        {
                answer = optionSelectedByUser.id;
          
            }
        });
        return answer;
}




submit.addEventListener('click',()=>{
    let answer = getAnswerByUser();

    if(answer == quiz[questionCount].ans) {
        score++ ;
        console.log(score)
    }


    
    questionCount++;


 
    if(questionCount<quiz.length){
        loadQuestion();
    }
    else{
          
            showDiv.innerHTML = `    <h2 id="score">You Scored ${score}/${quiz.length}  ✌️  </h2>
            <div id="playAgain" onclick="location.reload()">Play Again</div>`;
    
            showDiv.classList.remove("scoreArea")
    
        } 
})