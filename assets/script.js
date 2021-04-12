const baseURL = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=";
const baseURL_b = "&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=9&api_key=qruoq28yifqp8eyc2aj97iwlvidotscjjgwmyl3n3v1ffeyfz";
let wordToGuess = [];
let count = 0;
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
    wordToGuess = [];
    getData(gameType, function (data) {
        word = data.word;
        splitedWord = word.split('');

        for (let c of splitedWord) {
            wordToGuess.push('__');
        }
        document.getElementById("wordToGuess").innerHTML = wordToGuess.join(' ');
        localStorage.setItem("word", word);
    });
}

function checkLetter() {
    let userLetter = document.getElementById("letter-box").value;
    let getWord = localStorage.getItem("word"); // string
    let updatedWord = getWord.split(''); // object

    for (let c of updatedWord) {

        if (c == userLetter) {
            console.log(c);
        } else {

        }
    }
    updateGame(wordToGuess);
}


function updateGame(wordToGuess) {
    document.getElementById("wordToGuess").innerHTML = wordToGuess.join(' ');
}

function updateScore() {
    let oldScore = parseInt(document.getElementById("scores").innerText);
    document.getElementById("scores").innerText = ++oldScore;
}