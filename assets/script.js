const baseURL = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=";
const baseURL_b = "&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=9&api_key=qruoq28yifqp8eyc2aj97iwlvidotscjjgwmyl3n3v1ffeyfz";
let wordToGuess = [];


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
    var userLetter = $("#letter-box").val();

    let getWord = localStorage.getItem("word"); // string
    let correctWord = getWord.split(''); // object
    console.log(correctWord); // ["e", "x", "a", "m", "p", "l", "e"];

    for (let c of correctWord) {
        if (c == userLetter) {
            index = correctWord.multiIndexOf(c);
            for (let x of index) {
                console.log(x);
                wordToGuess.splice(x, 1, c);
            }
        } else {
            updateScore();
        }
    }
    updateGame(wordToGuess);
}

// function to find indexes for each correct user letter from the correct answer
// https://stackoverflow.com/questions/24241462/how-to-search-for-multiple-indexes-of-same-values-in-javascript-array
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf


Array.prototype.multiIndexOf = function (el) {
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
};

function updateGame(wordToGuess) {
    document.getElementById("wordToGuess").innerHTML = wordToGuess.join(' ');
}

function updateScore() {
    let oldScore = parseInt(document.getElementById("scores").innerText);
    document.getElementById("scores").innerText = ++oldScore;
}