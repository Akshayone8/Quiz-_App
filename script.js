const quizData=[
  {
    question:'Who won the first T20 World Cup?',
    a:'Sri Lanka',
    b:'USA',
    c:'INDIA',
    d:'Australia',
    correct:'c'
  },
  {
    question:'What is the most used Programming language',
    a:'java',
    b:'C',
    c:'Python',
    d:'Javascript',
    correct:'d'
  },
  {
    question:'How many times has India won the ICC World Cup',
    a:'2',
    b:'1',
    c:'4',
    d:'3',
    correct:'b'
  },
  {
    question:'What does HTML stands for',
    a:'Hypertext MarkUp Language',
    b:'cascading style sheet',
    c:'Jason Object Notation',
    d:'Helicopter Terminals Motoboards Lamborgins',
    correct:'a'
  },
  {
    question:'what year was Javscript launched',
    a:'1996',
    b:'1995',
    c:'1994',
    d:'none of the above',
    correct:'b'
  }
]

const quiz=document.getElementById('quiz');

const answerEls=document.querySelectorAll('.answer');

const questionEl=document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz=0;
let score = 0;

loadQuiz();


function loadQuiz(){
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  
  
  questionEl.innerText=currentQuizData.question;

  a_text.innerText=currentQuizData.a;
  b_text.innerText=currentQuizData.b;
  c_text.innerText=currentQuizData.c;
  d_text.innerText=currentQuizData.d;
}

function getSelected(){
let answer=undefined;

  answerEls.forEach((answerEl)=>{
    if(answerEl.checked){
        answer = answerEl.id;
        // console.log(answer);
    }
  });
return answer;
  
}

function deselectAnswers(){
  answerEls.forEach((answerEl)=>{
   answerEl.checked=false;
  });
}

submitBtn.addEventListener('click',()=>{

  const answer= getSelected();
  // console.log('the answer is '+ answer);

  if(answer)
  {
    if(answer===quizData[currentQuiz].correct){
      score++;
    }
    
    currentQuiz++;
    if(currentQuiz < quizData.length)
    {
      loadQuiz();
    }
    else
    {
      quiz.innerHTML=`<h2>You answerd correctly at ${score}/${quizData.length} question</h2>
       <button onclick='location.reload()'>Reload</button>`
    }
    }
});