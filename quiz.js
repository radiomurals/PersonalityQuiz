// Function to display the disclaimer modal
function showDisclaimer() {
    const modal = document.getElementById("disclaimer-modal");
    modal.style.display = "flex"; // Show the modal
}

// Function to handle agreement to the disclaimer
document.getElementById("agree-button").addEventListener("click", function() {
    closeDisclaimerModal();
    showQuestion(); // Start the quiz
});

// Function to close the disclaimer modal
function closeDisclaimerModal() {
    const modal = document.getElementById("disclaimer-modal");
    modal.style.display = "none"; // Hide the modal
}

// Show the disclaimer when the page loads
window.onload = function() {
    showDisclaimer();
};

// Array of questions, using a scale from "Least Likely" to "Most Likely"
const questions = [
    { question: "I enjoy spending time in large groups.", introvertScore: -1, extrovertScore: 1 },
    { question: "I feel energized after social events.", introvertScore: -1, extrovertScore: 1 },
    { question: "I prefer deep one-on-one conversations over group chats.", introvertScore: 1, extrovertScore: -1 },
    { question: "I feel comfortable meeting new people.", introvertScore: -1, extrovertScore: 1 },
    { question: "I seek to influence others.", introvertScore: -1, extrovertScore: 1 },
    { question: "I find small talk enjoyable.", introvertScore: -1, extrovertScore: 1 },
    { question: "I find it difficult to approach others.", introvertScore: 1, extrovertScore: -1 },
    { question: "I can talk others into doing things.", introvertScore: -1, extrovertScore: 1 },
    { question: "I find loud music or crowded places to be overwhelming.", introvertScore: 1, extrovertScore: -1 },
    { question: "I often seek quiet environments to focus on my thoughts.", introvertScore: 1, extrovertScore: -1 },

    { question: "I prefer fantasy over reality.", introvertScore: 1, extrovertScore: -1 },
    { question: "I prefer to stick within the confines of my comfortability.", introvertScore: 1, extrovertScore: -1 },
    { question: "I envy those who are sociable, as if I wish I could be someone else.", introvertScore: 1, extrovertScore: -1 },
    { question: "I feel the desire to take leadership in academic/work settings.", introvertScore: -1, extrovertScore: 1 },
    { question: "I feel comfortable putting myself out there.", introvertScore: -1, extrovertScore: 1 },
    { question: "I often follow a leader no matter the task.", introvertScore: 1, extrovertScore: -1 },
    { question: "I typically instigate social events.", introvertScore: -1, extrovertScore: 1 },
    { question: "I find it easy to talk my way out of situations.", introvertScore: -1, extrovertScore: 1 },
    { question: "I usually do not run out of social battery.", introvertScore: -1, extrovertScore: 1 },
    { question: "My social battery changes depending on who I am with.", introvertScore: 1, extrovertScore: -1 },

    { question: "I enjoy being the center of attention.", introvertScore: -1, extrovertScore: 1 },
    { question: "I feel the need to look better than others in any given situation.", introvertScore: -1, extrovertScore: 1 },
    { question: "I have more self-confidence compared to others.", introvertScore: -1, extrovertScore: 1 },
    { question: "I generally feel socially inadequate.", introvertScore: 1, extrovertScore: -1 },
    { question: "I tend to be more cautious with letting my guard down.", introvertScore: 1, extrovertScore: -1 },
    { question: "I feel that solitude is the sanctuary of my fortitude.", introvertScore: 1, extrovertScore: -1 },
    { question: "I find bliss with groups more than within myself.", introvertScore: 1, extrovertScore: -1 },
    { question: "I tend to take advantage of a presented situation.", introvertScore: -1, extrovertScore: 1 },
    { question: "I prefer to work with those I know because they “know” me.", introvertScore: 1, extrovertScore: -1 },
    { question: "Standing in front of a crowd is my safe place.", introvertScore: -1, extrovertScore: 1 },

    { question: "My social life is dependent of others.", introvertScore: 1, extrovertScore: -1 },
    { question: "I act like a different person in order to fit in.", introvertScore: 1, extrovertScore: -1 },
    { question: "I cannot confront others, even if it's a pressing matter", introvertScore: 1, extrovertScore: -1 },
    { question: "I feel as if a group without my lead would fail.", introvertScore: -1, extrovertScore: 1 },
    { question: "I pull more weight than others.", introvertScore: -1, extrovertScore: 1 },
    { question: "My ideas are lackluster compared to my peers.", introvertScore: 1, extrovertScore: -1 },
    { question: "Realistically, I wouldn't help an elderly who has fallen on the street.", introvertScore: 1, extrovertScore: -1 },
    { question: "I sometimes wish people around me wouldn’t expect me to be there for them.", introvertScore: 1, extrovertScore: -1 },
    { question: "I would pretend to support a presidential candidate to avoid confrontation.", introvertScore: 1, extrovertScore: -1 },
    { question: "I find myself feeling irritated by people who share too much online.", introvertScore: 1, extrovertScore: -1 },

    { question: "I tend to criticize or judge people internally even if I keep it to myself.", introvertScore: 1, extrovertScore: -1 },
    { question: "I sometimes avoid helping others if I know they won’t acknowledge it.", introvertScore: 1, extrovertScore: -1 },
    { question: "I feel that self-interest should come before group interest in many cases.", introvertScore: -1, extrovertScore: 1 },
    { question: "Sometimes I find conversations with my peers to be a waste of time.", introvertScore: 1, extrovertScore: -1 },
    { question: "I think those who feel uncomfortable in social situations should just get over it.", introvertScore: -1, extrovertScore: 1 },
    { question: "I feel a sense of satisfaction when people I dislike face setbacks.", introvertScore: 1, extrovertScore: -1 },
    { question: "I believe people who are less intelligent deserve fewer opportunities.", introvertScore: 1, extrovertScore: -1 },
    { question: "I sometimes think that empathy is overemphasized in modern society.", introvertScore: 1, extrovertScore: -1 },
    { question: "I sometimes believe my needs are more important than those of others around me.", introvertScore: -1, extrovertScore: 1 },
    { question: "I think that, if it serves a valuable purpose, honesty and morality can be compromised without guilt.", introvertScore: -1, extrovertScore: 1 },
    // Add more questions here for a total of 50 questions
];

let currentQuestionIndex = 0;
let anonymousResponses = [];
let userName = null;
let isAnonymous = true;
let introvertPoints = 0;
let extrovertPoints = 0;

// Array to store answers for each question
let userAnswers = [];

// Function to display each question with a 1-5 scale
function showQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    // Clear previous content
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";

    // Get the current question
    const question = questions[currentQuestionIndex];
    questionContainer.innerText = question.question;

    // Create radio buttons for the 1-5 scale
    for (let i = 1; i <= 5; i++) {
        const label = document.createElement("label");
        label.innerText = i;  // Label each option from 1 to 5

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = i;
        radio.required = true;

        label.appendChild(radio);  // Attach radio to label
        optionsContainer.appendChild(label);  // Attach label to options container
    }

    // Show anonymous prompt every 10 questions, and at the last question
    if (currentQuestionIndex % 10 === 0 || currentQuestionIndex === questions.length - 1) {
        showAnonymousModal();
    }
}

// Function to handle answer selection and moving to the next question
function selectAnswer() {
    // Get selected option (value from 1 to 5)
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select a response before proceeding.");
        return;
    }

    // Get the response value and current question's scores
    const responseValue = parseInt(selectedOption.value);
    const question = questions[currentQuestionIndex];

    // Store the user's answer
    userAnswers[currentQuestionIndex] = responseValue;

    // Update introvert/extrovert scores based on response
    if (responseValue <= 2) {
        introvertPoints += question.introvertScore * (3 - responseValue);
    } else if (responseValue >= 4) {
        extrovertPoints += question.extrovertScore * (responseValue - 3);
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Before showing results, show the anonymous modal if it hasn't been shown yet
        showAnonymousModal();
    }
}

// Function to display the black-screen anonymity prompt modal
function showAnonymousModal() {
    const modal = document.getElementById("anonymous-modal");
    modal.style.display = "flex";  // Show the modal as a blacked-out screen
    document.getElementById("name-input").style.display = "none";  // Hide name input by default
}

// Function to handle anonymous choice
function chooseAnonymous(choice) {
    isAnonymous = choice;

    if (!isAnonymous) {
        document.getElementById("name-input").style.display = "block";  // Show name input if not anonymous
    } else {
        if (userName) {
            alert("Name deleted.");  // Alert that the name was deleted
            userName = null;  // Clear the name if it was previously set
        }
        closeModal();
    }
}

// Function to save user name if they choose not to remain anonymous
function saveName() {
    const nameInput = document.getElementById("name");
    userName = nameInput.value.trim();
    if (userName) {
        alert("Name saved: " + userName);
        closeModal();
    } else {
        alert("Please enter your name.");
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("anonymous-modal");
    modal.style.display = "none";  // Hide the modal
}

// Function to select an answer and move to the next question
function selectAnswer() {
    // Get selected option (value from 1 to 5)
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select a response before proceeding.");
        return;
    }

    // Get the response value and current question's scores
    const responseValue = parseInt(selectedOption.value);
    const question = questions[currentQuestionIndex];

    // Store the user's answer
    userAnswers[currentQuestionIndex] = responseValue;

    // Update introvert/extrovert scores based on response
    if (responseValue <= 2) {
        introvertPoints += question.introvertScore * (3 - responseValue);
    } else if (responseValue >= 4) {
        extrovertPoints += question.extrovertScore * (responseValue - 3);
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Function to display results
function showResults() {
    let result;
    if (introvertPoints > extrovertPoints) {
        result = "Introvert";
    } else if (extrovertPoints > introvertPoints) {
        result = "Extrovert";
    } else {
        result = "Ambivert";
    }

    // Store results along with user name and answers in local storage
    const results = {
        name: isAnonymous ? "Anonymous" : userName,
        answers: userAnswers,
        result: result,
    };

    // Generate a unique key for this user's results
    const uniqueKey = `quizResults_${Date.now()}`; // You can also use a unique identifier if needed
    localStorage.setItem(uniqueKey, JSON.stringify(results)); // Store the result

    // Notify the developer (you) that results have been stored
    alert("Your results have been saved. Use the console to view them.");

    // Display final message to the user
    document.getElementById("quiz-container").innerHTML = `<h2>Quiz Complete!</h2><p>You are an ${result}.</p>`;
    // Optionally, show the key for developer access
    console.log(`Results stored under key: ${uniqueKey}`);
}

// Start the quiz by showing the first question
showQuestion();