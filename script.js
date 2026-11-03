
// ==========================================
// FRENCH QUIZ PREP
// COMPLETE WEBSITE SCRIPT
// ==========================================


// ==========================================
// 1. VERB QUESTIONS
// ==========================================

const verbs = {
    aller: {
        title: "ALLER",
        meaning: "To go",
        questions: [
            { before: "Je", after: " au lycée.", answer: "vais", type: "BASIC" },
            { before: "Tu", after: " à Paris.", answer: "vas", type: "BASIC" },
            { before: "Julie", after: " à la plage.", answer: "va", type: "BASIC" },
            { before: "Nous", after: " au café.", answer: "allons", type: "BASIC" },
            { before: "Vous", after: " à l'école.", answer: "allez", type: "BASIC" },
            { before: "On", after: " au parc.", answer: "va", type: "BASIC" },
            { before: "Elle", after: " chez le dentiste.", answer: "va", type: "BASIC" },
            { before: "Ils", after: " aux États-Unis.", answer: "vont", type: "BASIC" },
            { before: "Mes amies", after: " à la plage.", answer: "vont", type: "BASIC" },

            { before: "Toi et moi", after: " au cinéma.", answer: "allons", type: "ADVANCED" },
            { before: "Les enfants", after: " à l'école.", answer: "vont", type: "ADVANCED" },
            { before: "Luc et Julie", after: " au restaurant.", answer: "vont", type: "ADVANCED" },
            { before: "Mon frère et toi", after: " à Paris.", answer: "allez", type: "ADVANCED" }
        ]
    },

    faire: {
        title: "FAIRE",
        meaning: "To do / To make",
        questions: [
            { before: "Je", after: " du vélo.", answer: "fais", type: "BASIC" },
            { before: "Tu", after: " de la natation.", answer: "fais", type: "BASIC" },
            { before: "Elle", after: " du ski.", answer: "fait", type: "BASIC" },
            { before: "Nous", after: " des pompes.", answer: "faisons", type: "BASIC" },
            { before: "Vous", after: " de l'aérobic.", answer: "faites", type: "BASIC" },
            { before: "On", after: " du vélo.", answer: "fait", type: "BASIC" },
            { before: "Julie", after: " de la natation.", answer: "fait", type: "BASIC" },
            { before: "Ils", after: " du ski.", answer: "font", type: "BASIC" },
            { before: "Mes amies", after: " des pompes.", answer: "font", type: "BASIC" },

            { before: "Toi et moi", after: " de la natation.", answer: "faisons", type: "ADVANCED" },
            { before: "Les garçons", after: " du vélo.", answer: "font", type: "ADVANCED" },
            { before: "Julie et Luc", after: " du ski.", answer: "font", type: "ADVANCED" },
            { before: "Ma sœur et toi", after: " de l'aérobic.", answer: "faites", type: "ADVANCED" }
        ]
    },

    etre: {
        title: "ÊTRE",
        meaning: "To be",
        questions: [
            { before: "Je", after: " très contente.", answer: "suis", type: "BASIC" },
            { before: "Tu", after: " intelligent.", answer: "es", type: "BASIC" },
            { before: "Julie", after: " sympathique.", answer: "est", type: "BASIC" },
            { before: "Nous", after: " à l'école.", answer: "sommes", type: "BASIC" },
            { before: "Vous", after: " très gentils.", answer: "êtes", type: "BASIC" },
            { before: "On", after: " en classe.", answer: "est", type: "BASIC" },
            { before: "Elle", after: " fatiguée.", answer: "est", type: "BASIC" },
            { before: "Ils", after: " au lycée.", answer: "sont", type: "BASIC" },
            { before: "Mes amies", after: " intelligentes.", answer: "sont", type: "BASIC" },

            { before: "Toi et moi", after: " prêts.", answer: "sommes", type: "ADVANCED" },
            { before: "Les filles", after: " contentes.", answer: "sont", type: "ADVANCED" },
            { before: "Luc et Julie", after: " à Paris.", answer: "sont", type: "ADVANCED" },
            { before: "Mon frère et toi", after: " très sportifs.", answer: "êtes", type: "ADVANCED" }
        ]
    },

    avoir: {
        title: "AVOIR",
        meaning: "To have",
        questions: [
            { before: "J'", after: " un chien.", answer: "ai", type: "BASIC" },
            { before: "Tu", after: " un chat.", answer: "as", type: "BASIC" },
            { before: "Elle", after: " une voiture.", answer: "a", type: "BASIC" },
            { before: "Nous", after: " des livres.", answer: "avons", type: "BASIC" },
            { before: "Vous", after: " un vélo.", answer: "avez", type: "BASIC" },
            { before: "On", after: " un cahier.", answer: "a", type: "BASIC" },
            { before: "Julie", after: " un crayon.", answer: "a", type: "BASIC" },
            { before: "Ils", after: " des stylos.", answer: "ont", type: "BASIC" },
            { before: "Mes amies", after: " des sacs à dos.", answer: "ont", type: "BASIC" },

            { before: "Toi et moi", after: " une voiture.", answer: "avons", type: "ADVANCED" },
            { before: "Les enfants", after: " des chiens.", answer: "ont", type: "ADVANCED" },
            { before: "Julie et Luc", after: " un livre.", answer: "ont", type: "ADVANCED" },
            { before: "Mon frère et toi", after: " des vélos.", answer: "avez", type: "ADVANCED" }
        ]
    }
};


// ==========================================
// 2. NAVIGATION
// ==========================================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
    window.scrollTo(0, 0);
}

function goHome() {
    showPage("homePage");
}

let currentVerb = "";
let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;

function openVerb(verb) {
    currentVerb = verb;
    currentQuestion = 0;
    correctAnswers = 0;

    document.getElementById("verbTitle").textContent =
        verbs[verb].title;

    document.getElementById("verbMeaning").textContent =
        verbs[verb].meaning;

    document.getElementById("verbCompletion").classList.add("hidden");
    document.querySelector(".question-card").classList.remove("hidden");

    showPage("verbPage");
    renderVerbQuestion();
}


// ==========================================
// 3. VERB QUESTION DISPLAY
// ==========================================

function renderVerbQuestion() {
    const question = verbs[currentVerb].questions[currentQuestion];
    const total = verbs[currentVerb].questions.length;

    answered = false;

    document.getElementById("questionProgress").textContent =
        `Question ${currentQuestion + 1} of ${total}`;

    document.getElementById("questionScore").textContent =
        `${correctAnswers} correct`;

    document.getElementById("questionProgressBar").style.width =
        `${(currentQuestion / total) * 100}%`;

    document.getElementById("questionType").textContent =
        question.type;

    document.getElementById("sentencePrompt").innerHTML =
        `${question.before} <span class="blank">________</span> (${verbs[currentVerb].title.toLowerCase()}) ${question.after}`;

    const input = document.getElementById("verbAnswer");

    input.value = "";
    input.disabled = false;

    document.getElementById("verbFeedback").textContent = "";
    document.getElementById("verbFeedback").className = "feedback";

    document.getElementById("checkVerbButton").classList.remove("hidden");
    document.getElementById("nextVerbButton").classList.add("hidden");

    updateAccentButtons("accentButtons", input);
    input.focus();
}


// ==========================================
// 4. VERB ANSWER CHECKING
// ==========================================

function checkVerbAnswer() {
    if (answered) return;

    const input = document.getElementById("verbAnswer");
    const answer = input.value.trim();

    const correct = verbs[currentVerb].questions[currentQuestion].answer;
    const feedback = document.getElementById("verbFeedback");

    answered = true;

    if (answer === correct) {
        correctAnswers++;

        feedback.textContent = "✓ Correct! Excellent work.";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = `✗ Incorrect. The correct answer is: ${correct}`;
        feedback.className = "feedback incorrect";
    }

    input.disabled = true;

    document.getElementById("questionScore").textContent =
        `${correctAnswers} correct`;

    document.getElementById("checkVerbButton").classList.add("hidden");
    document.getElementById("nextVerbButton").classList.remove("hidden");
}

function nextVerbQuestion() {
    currentQuestion++;

    if (currentQuestion >= verbs[currentVerb].questions.length) {
        finishVerb();
    } else {
        renderVerbQuestion();
    }
}

function finishVerb() {
    document.querySelector(".question-card").classList.add("hidden");
    document.getElementById("verbCompletion").classList.remove("hidden");

    const total = verbs[currentVerb].questions.length;

    document.getElementById("verbFinalScore").textContent =
        `You got ${correctAnswers} out of ${total} questions correct.`;

    document.getElementById("questionProgressBar").style.width = "100%";
}

function retryVerb() {
    openVerb(currentVerb);
}


// ==========================================
// 5. FRENCH ACCENT KEYBOARD
// ==========================================

const accentCharacters = {
    a: ["a", "à", "â", "ä"],
    e: ["e", "é", "è", "ê", "ë"],
    i: ["i", "î", "ï"],
    o: ["o", "ô", "ö"],
    u: ["u", "ù", "û", "ü"],
    c: ["c", "ç"]
};

const accentList = [
    "é", "è", "ê", "ë",
    "à", "â", "ä",
    "î", "ï",
    "ô", "ö",
    "ù", "û", "ü",
    "ç"
];

function updateAccentButtons(containerId, input) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    accentList.forEach(character => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "accent-button";
        button.textContent = character;

        button.addEventListener("click", function() {
            insertCharacter(input, character);
        });

        container.appendChild(button);
    });
}

function insertCharacter(input, character) {
    if (input.disabled) return;

    const start = input.selectionStart;
    const end = input.selectionEnd;

    input.setRangeText(character, start, end, "end");
    input.focus();
}

function cycleAccent(input, direction) {
    if (input.disabled) return false;

    const position = input.selectionStart;

    if (position === 0 || input.selectionStart !== input.selectionEnd) {
        return false;
    }

    const character = input.value[position - 1];
    const lower = character.toLowerCase();

    if (!accentCharacters[lower]) return false;

    const options = accentCharacters[lower];

    let currentIndex = options.indexOf(lower);

    let nextIndex =
        (currentIndex + direction + options.length) % options.length;

    let replacement = options[nextIndex];

    if (character !== lower) {
        replacement = replacement.toUpperCase();
    }

    input.setRangeText(
        replacement,
        position - 1,
        position,
        "end"
    );

    return true;
}


// ==========================================
// 6. KEYBOARD CONTROLS
// ==========================================

document.addEventListener("keydown", function(event) {
    const input = event.target;

    if (!input.matches(".answer-input, .practice-answer")) return;

    if (event.key === "ArrowUp") {
        if (cycleAccent(input, 1)) {
            event.preventDefault();
        }
    }

    if (event.key === "ArrowDown") {
        if (cycleAccent(input, -1)) {
            event.preventDefault();
        }
    }

    if (event.key === "Enter" && input.id === "verbAnswer") {
        event.preventDefault();

        if (!answered) {
            checkVerbAnswer();
        } else {
            nextVerbQuestion();
        }
    }
});


// ==========================================
// 7. SENTENCE PRACTICE QUESTIONS
// ==========================================

const practiceData = {

    aller: {
        title: "1. ALLER",
        instruction: "Write THREE complete sentences using ALLER. Use the given subject, preposition, and place. Conjugate the verb correctly.",
        columns: ["Subjects", "Prepositions", "Places"],

        lists: [
            ["Je / J'", "Tu", "Julie", "Luc", "On", "Nous", "Toi et moi", "Vous", "Les enfants", "Mes amies"],
            ["à", "chez"],
            ["la plage", "le café", "les États-Unis", "le lycée", "l'école", "Paris", "moi", "le parc", "le dentiste"]
        ],

        questions: [
            {
                words: ["Je", "à", "la plage"],
                answer: "Je vais à la plage."
            },
            {
                words: ["Nous", "à", "Paris"],
                answer: "Nous allons à Paris."
            },
            {
                words: ["Mes amies", "chez", "le dentiste"],
                answer: "Mes amies vont chez le dentiste."
            }
        ]
    },

    faire: {
        title: "2. FAIRE",
        instruction: "Write THREE complete sentences using FAIRE. Use three different subjects and activities. Remember to use the correct article and contraction.",
        columns: ["Subjects", "Preposition", "Activités"],

        lists: [
            ["Je / J'", "Tu", "Julie", "Luc", "On", "Nous", "Toi et moi", "Vous", "Les enfants", "Mes amies"],
            ["de"],
            ["le vélo", "l'aérobic", "les pompes", "la natation", "le ski"]
        ],

        questions: [
            {
                words: ["Tu", "de", "le vélo"],
                answer: "Tu fais du vélo."
            },
            {
                words: ["Elle", "de", "la natation"],
                answer: "Elle fait de la natation."
            },
            {
                words: ["Les enfants", "de", "les pompes"],
                answer: "Les enfants font des pompes."
            }
        ]
    },

    etre: {
        title: "3. ÊTRE",
        instruction: "Write THREE complete sentences using ÊTRE. Choose the correct conjugation and make sure adjectives agree with the subject.",
        columns: ["Subjects", "Verb", "Descriptions"],

        lists: [
            ["Je", "Tu", "Julie", "Luc", "On", "Nous", "Toi et moi", "Vous", "Les enfants", "Mes amies"],
            ["être"],
            ["content / contente", "intelligent / intelligente", "fatigué / fatiguée", "prêt / prête", "sympathique"]
        ],

        questions: [
            {
                words: ["Julie", "être", "contente"],
                answer: "Julie est contente."
            },
            {
                words: ["Nous", "être", "fatigués"],
                answer: "Nous sommes fatigués."
            },
            {
                words: ["Mes amies", "être", "intelligentes"],
                answer: "Mes amies sont intelligentes."
            }
        ]
    },

    avoir: {
        title: "4. AVOIR",
        instruction: "Write TWO complete sentences using AVOIR. Use two different subjects, articles, and nouns. Remember that the article must agree with the noun.",
        columns: ["Subjects", "Articles", "Noms"],

        lists: [
            ["Je / J'", "Tu", "Julie", "Luc", "On", "Nous", "Toi et moi", "Vous", "Les enfants", "Mes amies"],
            ["un", "une", "des"],
            ["chien", "chatte", "voiture", "vélo", "cahier", "crayon", "stylo", "sac à dos", "livre"]
        ],

        questions: [
            {
                words: ["J'", "un", "chien"],
                answer: "J'ai un chien."
            },
            {
                words: ["Mes amies", "des", "livres"],
                answer: "Mes amies ont des livres."
            }
        ]
    }
};


// ==========================================
// 8. SENTENCE PRACTICE NAVIGATION
// ==========================================

let currentPractice = "aller";

// Store attempts separately for each question
let practiceAttempts = {};

function openPractice() {
    showPage("practicePage");
    showPractice("aller",
        document.querySelector(".practice-tab"));
}

function showPractice(verb, button) {
    currentPractice = verb;

    document.querySelectorAll(".practice-tab").forEach(tab => {
        tab.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    // Reset attempts when entering a verb section
    practiceAttempts[verb] = {};

    renderPractice();
}


// ==========================================
// 9. DISPLAY SENTENCE PRACTICE
// ==========================================

function renderPractice() {
    const data = practiceData[currentPractice];

    const container =
        document.getElementById("practiceContent");

    let html = `
        <div class="practice-section">

            <span class="tag">SENTENCE BUILDING</span>

            <h2>${data.title}</h2>

            <p>${data.instruction}</p>

            <table class="word-table">
                <thead>
                    <tr>
                        ${data.columns.map(column =>
                            `<th>${column}</th>`
                        ).join("")}
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        ${data.lists.map(list =>
                            `<td>${list.join("<br>")}</td>`
                        ).join("")}
                    </tr>
                </tbody>
            </table>

            <p>
                <strong>Instructions:</strong>
                Use all three words shown in each question to write a
                complete sentence. Add the correctly conjugated verb
                and any necessary articles or contractions. Dont forget capitilzation and puntuaction.
            </p>
    `;

    data.questions.forEach((question, index) => {

        const chips = question.words.map(word =>
            `<span class="word-chip">${word}</span>`
        ).join("");

        html += `
            <div class="challenge">

                <h3>Question ${index + 1}</h3>

                <div class="word-chips">
                    ${chips}
                </div>

                <label for="practiceAnswer${index}">
                    Write your complete sentence:
                </label>

                <input
                    type="text"
                    id="practiceAnswer${index}"
                    class="answer-input practice-answer"
                    placeholder="Type your sentence..."
                    autocomplete="off"
                >

                <div class="accent-toolbar">
                    <span>French accents:</span>
                    <div id="practiceAccents${index}"></div>
                </div>

                <div
                    id="practiceFeedback${index}"
                    class="challenge-feedback">
                </div>

                <div class="challenge-actions">
                    <button
                        class="primary-button"
                        id="practiceCheck${index}"
                        onclick="checkPracticeAnswer(${index})">

                        Check Answer

                    </button>
                </div>

            </div>
        `;
    });

    html += `</div>`;

    container.innerHTML = html;

    // Add accent buttons to each question
    data.questions.forEach((question, index) => {

        const input =
            document.getElementById(`practiceAnswer${index}`);

        updateAccentButtons(
            `practiceAccents${index}`,
            input
        );

    });
}


// ==========================================
// 10. SENTENCE ANSWER CHECKING
// ==========================================

function checkPracticeAnswer(index) {

    const data = practiceData[currentPractice];

    const question = data.questions[index];

    const input =
        document.getElementById(`practiceAnswer${index}`);

    const feedback =
        document.getElementById(`practiceFeedback${index}`);

    const button =
        document.getElementById(`practiceCheck${index}`);

    const answer = input.value.trim();

    // Do not accept an empty answer
    if (answer === "") {
        feedback.textContent = "Please enter an answer first.";
        feedback.style.color = "var(--red)";
        return;
    }

    // Initialize attempt count
    if (practiceAttempts[currentPractice][index] === undefined) {
        practiceAttempts[currentPractice][index] = 0;
    }

    // If already finished, do nothing
    if (input.disabled) return;

    // Check exact spelling, capitalization, punctuation and accents
    if (answer === question.answer) {

        feedback.textContent =
            "✓ Correct! Your sentence is perfect.";

        feedback.style.color = "var(--green)";

        input.style.borderColor = "var(--green)";
        input.disabled = true;

        button.disabled = true;
        button.textContent = "Completed";

        return;
    }

    // Count incorrect attempt
    practiceAttempts[currentPractice][index]++;

    const attempts =
        practiceAttempts[currentPractice][index];

    if (attempts === 1) {

        // FIRST INCORRECT ATTEMPT
        feedback.textContent =
            "✗ Not quite! You have ONE more attempt. Check your spelling, accents, and conjugation.";

        feedback.style.color = "var(--red)";

        input.style.borderColor = "var(--red)";

    } else {

        // SECOND INCORRECT ATTEMPT
        feedback.innerHTML =
            `✗ Out of attempts!<br>
            <span style="color: var(--text);">
            Correct answer: <strong>${question.answer}</strong>
            </span>`;

        feedback.style.color = "var(--red)";

        input.style.borderColor = "var(--red)";
        input.disabled = true;

        button.disabled = true;
        button.textContent = "Answer Revealed";
    }
}


// ==========================================
// END OF SCRIPT
// ==========================================
