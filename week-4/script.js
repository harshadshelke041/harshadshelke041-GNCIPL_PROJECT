const questions = [
    {
        questions: "Which is largest animal in the world?",
        answer: [
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },

   {
      questions: "Which country is known as the Land of the Rising Sun?",
        answer: [
            {text:"India",correct:false},
            {text:"USA",correct:false},
            {text:"Japan",correct:true},
            {text:"Shrilankha",correct:false},

        ]

   },

   {
    questions:"Which gas do plants absorb from the atmosphere?",

    answer:[
        {text:'Oxygen',correct:false},
        {text:'Nitrogen',correct:false},
        {text:'Carbon Dioxide',correct:true},
        {text:'Hydrogen',correct:false},
    ]
   },

   {
    questions:"Which is the longest river in the world?",
    answer: [
        {text:'Amazon',correct:false},
        {text:'Nile',correct:true},
        {text:'Yangtze',correct:false},
        {text:'Ganga',correct:false},
    ]
   },

   {
    questions:'Which festival is known as the Festival of Lights?',
    answer: [
        {text:'Holi',correct:false},
        {text:'Diwali',correct:true},
        {text:'Christmas',correct:false},
        {text:'Eid',correct:false},
    ]
   }
];

const questionElement = document.getElementById('question');

const ansButton = document.getElementById('answer-buttton');

const nextButton = document.getElementById('next-btn');

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
 }

 function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answer.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn")
        ansButton.appendChild(button);
        if(ans.correct) {
            button.dataset.correct = ans.correct; 
        }
        button.addEventListener('click',selectAnswer)
    });
 }

 function resetState() {
    nextButton.style.display = 'none';

    while(ansButton.firstChild) {
        ansButton.removeChild(ansButton.firstChild); 
    }
 };

 function selectAnswer(e) {
     const selectedBtn = e.target;

     const isCorrect = selectedBtn.dataset.correct === 'true';

     if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
     } else {
        selectedBtn.classList.add('incorrect')
     }
     Array.from(ansButton.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
     });
     nextButton.style.display = 'block'
 };

 function showScore() {
    resetState(); 
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton,innerHTML = 'Play Again';

    nextButton.style.display = 'block';
 }

 function hanleNextButton() {
     currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
 }

 nextButton.addEventListener('click',()=> {
    if(currentQuestionIndex < questions.length) {
        hanleNextButton();
    } else {
        startQuiz();
    }
 })

 startQuiz();