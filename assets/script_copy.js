const baseURL = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=";
const baseURL_b = "&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=9&api_key=qruoq28yifqp8eyc2aj97iwlvidotscjjgwmyl3n3v1ffeyfz";


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkLetter();
            } else {

                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
});

function getData(gameType, cb) {
    var xhr = new XMLHttpRequest;

    xhr.open("GET", baseURL + gameType + baseURL_b);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function runGame(gameType) {
    getData(gameType, function (data) {
        word = data.word;
        initGame(word);
    });
}

function initGame(word) {
    wordToGuess = word.split('');
    let wordToShow = [];
    for (let c of wordToGuess) {
        wordToShow.push('__');
        console.log(wordToShow);
    }

    drawGame(wordToShow);
}

function drawGame(wordToShow) {

    document.getElementById("wordToGuess").innerHTML = wordToShow.join(' ');
    /*localStorage.setItem("wordToShow", wordToShow);*/
}

function checkLetter() {
    let userAnswer = document.getElementById("letter-box").value;

    let correctWord = getCorrectAnswer.split('');

    for (let c of correctWord) {
        if (userAnswer == c) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
    drawGame(correctWord);
}


/*let selectedProduct;

for (let i = 0; i < product_deserial.length; i++) {
    if (product_deserial[i].id == localStorage.getItem('productID')) {
        selectedProduct = product_deserial[i];
    }
}*/