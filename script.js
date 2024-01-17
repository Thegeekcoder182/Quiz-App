// Quiz Data

var triviaQuestions = [
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Mars", "Venus", "Jupiter", "Mercury"],
        "correctOption": 0
    },
    {
        "question": "What is the capital city of Australia?",
        "options": ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        "correctOption": 1
    },
    {
        "question": "In which year did the Titanic sink?",
        "options": ["1905", "1912", "1920", "1931"],
        "correctOption": 1
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        "correctOption": 1
    },
    {
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        "correctOption": 1
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "Japan", "South Korea", "Vietnam"],
        "correctOption": 1
    },
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"],
        "correctOption": 2
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        "correctOption": 0
    },
    {
        "question": "Which ocean is the largest?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        "correctOption": 3
    },
    {
        "question": "What is the currency of Japan?",
        "options": ["Yuan", "Won", "Yen", "Ringgit"],
        "correctOption": 2
    },
    {
        "question": "Who is the author of 'Harry Potter' series?",
        "options": ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
        "correctOption": 0
    },
    {
        "question": "What is the largest desert in the world?",
        "options": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
        "correctOption": 3
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "options": ["Osmium", "Oxygen", "Gold", "Iodine"],
        "correctOption": 1
    },
    {
        "question": "Who played Jack Dawson in the movie 'Titanic'?",
        "options": ["Leonardo DiCaprio", "Tom Cruise", "Brad Pitt", "Johnny Depp"],
        "correctOption": 0
    },
    {
        "question": "In what year did the first manned moon landing occur?",
        "options": ["1961", "1969", "1975", "1982"],
        "correctOption": 1
    },
    {
        "question": "Which planet is known as the 'Blue Planet'?",
        "options": ["Mars", "Earth", "Uranus", "Neptune"],
        "correctOption": 1
    },
    {
        "question": "Who invented the telephone?",
        "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Galileo Galilei"],
        "correctOption": 0
    },
    {
        "question": "What is the smallest prime number?",
        "options": ["0", "1", "2", "3"],
        "correctOption": 2
    },
    {
        "question": "Which country is known as the 'Land of the Midnight Sun'?",
        "options": ["Norway", "Russia", "Sweden", "Canada"],
        "correctOption": 0
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "options": ["Harper Lee", "Ernest Hemingway", "F. Scott Fitzgerald", "Jane Austen"],
        "correctOption": 0
    },
   
];



const answerElmn = document.querySelectorAll('.answer')

const quiz = document.querySelector('.quiz')

const scores = document.querySelector('.score')

const [questionElmn,option_1,option_2,option_3,option_4] = document.querySelectorAll("#question, #option1, #option2, #option3, #option4");


const submitbtn = document.querySelector('#submit');


let currentquiz = 0;
let score = 0;


// Load Quiz data dynamically

const loadquiz = () => {

    const {question, options} = triviaQuestions[currentquiz];

    console.log(question);

    questionElmn.innerHTML = `${currentquiz+1}: ${question}`;

    scores.innerHTML = `Score: ${score}/${triviaQuestions.length}`

    options.forEach((curOption, index)=> (window[`option${index + 1}`].innerHTML=curOption));

};



loadquiz()



document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        const radio = section.querySelector('.answer');
        radio && (radio.checked = true);
    });
});


getselectedoption = () => {
    
    let answerelement = Array.from(answerElmn);
    return answerelement.findIndex((curElem) => curElem.checked)

}


deselectanswer = () => {    

    answerElmn.forEach((curElem)=>{
        curElem.checked=false;
    })
    
    
}

submitbtn.addEventListener('click', ()=>{

    const selectedoptionindex = getselectedoption();


    if (selectedoptionindex === -1) {
        alert("Please select an option before submitting!");
        return; 
    }



    if(selectedoptionindex === triviaQuestions[currentquiz].correctOption){
        score++
    }

    currentquiz++

    if(currentquiz < triviaQuestions.length){
        loadquiz();
        deselectanswer();
    }else{
        quiz.innerHTML = `
        <div class="result">
        <h2>🏆 Your score:${score}/${triviaQuestions.length} Correct Answers </h2>
        <p>congratulations on completing the quiz!🎉</p>
        <button class = "reload-button" onclick="location.reload()">Play Again</button>
        </div>
        `
    }

})


