const quizData = [
    {
        question: "What is the capital of India?",
        a: "Mumbai",
        b: "Goa",
        c: "New Delhi",
        d: "Shillong",
        correct: "c",
    },
    {
        question: "Who is the President of US?",
        a: "Hillari Clinton",
        b: "Maik Pompio",
        c: "Narandra Modi",
        d: "Donald Trump",
        correct: "d",
    },
    {
        question: "What is the name of India's Space Organization?",
        a: "ISRO",
        b: "DRDO",
        c: "NASA",
        d: "SEO",
        correct: "a",
    },
    {
        question: "What year was ISRO launched?",
        a: "1996",
        b: "1969",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {  // This function returns the answer, selected by the user from the options.
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {       //The DOM Input Radio "checked" Property in HTML DOM is used to set or return the checked state of an Input Radio Button. This Property is used to reflect the HTML checked attribute.
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {     // This function is use to deselect the radio button. Otherwise it select a random answer from the radio options.
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button> `;  //The reload() method is used to reload the current document. It is same as the reload button in your browser. Syntax is: location.reload()
            
        }
    }
});
