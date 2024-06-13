const questions = [
  {
     question: "What does HTML stand for?",
     answer:[
        {text:" Home tool Markup Language", correct : false},
        {text:" Hyper  Text Markup Language", correct : true},
        {text:" Hyperlinks and Text Markup Language", correct : false},
        {text:" ALL is wrong", correct : false},
      ]
  },

  {
     question: "Choose the correct HTML element for the largest heading",
     answer:[
        {text:"head tag",correct:false},
        {text:"h1 tag",correct:true},
        {text:"h6 tag",correct:false},
        {text:"heading tag",correct:false},
      ]
  },

    {
     question: "What is the correct element for inserting a line break?",
     answer:[
        {text:"hr tag",correct:false},
        {text:"lb tag",correct:false},
        {text:"break tag",correct:false},
        {text:"br tag",correct:true},
      ]
  },

    {
     question: "how can you make a numberred list?",
     answer:[
        {text:"list tag",correct:false},
        {text:"dl tag",correct:false},
        {text:"ol tag",correct:true},
        {text:"ul tag",correct:false},
      ]
  },

    {
     question: "how can you make a bulleted list?",
     answer:[
        {text:"ul tag",correct:true},
        {text:"dl tag",correct:false},
        {text:"list tag",correct:false},
        {text:"ol tag",correct:false},
      ]
  },

    {
     question: "In HTML which one is img currect attribute _____ ?",
     answer:[,
        {text:"href='img.png'",correct:false},
        {text:"src=img.png",correct:false},
        {text:"src='img.png'",correct:true},
        {text:"src='img.text'",correct:false},
      ]
  },

    {
     question: "In HTML which one is smallest heading tag",
     answer:[
        {text:"p tag",correct:false},
        {text:"h6 tag",correct:true},
        {text:"small tag",correct:false},
        {text:"br tag",correct:false},
      ]
  },

    {
     question: "Find the diffrent HTML tag element ?",
     answer:[
        {text:'div tag',correct:false},
        {text:"p tag",correct:true},
        {text:"h1 tag",correct:false},
        {text:"h3 tag",correct:false},
      ]
  },

    {
     question: "HTML program is saved using _____ extention ?",
     answer:[
        {text:"html",correct:false},
        {text:".xml",correct:false},
        {text:".hmtl",correct:false},
        {text:".html",correct:true},
      ]
  },

    {
     question: "DOM stands for",
     answer:[
        {text:"Document Object model",correct:true},
        {text:"Data Object model",correct:false},
        {text:"Deta orinted model",correct:false},
        {text:"Document orinted model",correct:false},
      ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("nxt-btn");
const myscore = document.getElementById("score");

let cuurentQindex = 0;
let score = 0;

function startQuiz(){
cuurentQindex = 0;
score = 0;
nextButton.innerHTML = "Next";
ShowQuestion();
}

function ShowQuestion(){
resetState();
let currentquestion = questions[cuurentQindex];
let questionNo = cuurentQindex + 1;
questionElement.innerHTML = questionNo + '.' + currentquestion.question;

currentquestion.answer.forEach(answer =>{
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer)
});
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
const selectbtn = e.target;
const iscorrect = selectbtn.dataset.correct === "true";
if(iscorrect){
  selectbtn.classList.add("correct");
  score++;
  myscore.innerHTML = `score : ${score}0`;
}else{
  selectbtn.classList.add("incorrect")
}
 Array.from(answerButtons.children).forEach(button =>{
   if(button.dataset.correct === "true"){
      button.classList.add("correct");
   }
   button.disabled = true;
 });
 nextButton.style.display = "block";
}

function showscore(){
resetState();
questionElement.innerHTML = `your selected right answer ${score} out of 10`;
 nextButton.style.display = "block";
nextButton.innerHTML ="play Again";
}


function handlenextBtn(){
cuurentQindex++;
if(cuurentQindex < questions.length){
ShowQuestion();
}else{
showscore();
}
}

nextButton.addEventListener("click",()=>{
if(cuurentQindex < questions.length){
  handlenextBtn();
}else{
  startQuiz();
}
})

startQuiz();