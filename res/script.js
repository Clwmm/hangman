var r = document.querySelector(':root');
var rs = getComputedStyle(r);
var color_0 = rs.getPropertyValue("--color_0");
var color_1 = rs.getPropertyValue("--color_1");
var color_2 = rs.getPropertyValue("--color_2");
var color_3 = rs.getPropertyValue("--color_3");
var color_4 = rs.getPropertyValue("--color_4");
var color_5 = rs.getPropertyValue("--color_5");
var color_6 = rs.getPropertyValue("--color_6");

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const words = [
    'apple', 'banana', 'carrot', 'dog', 'elephant', 'flamingo', 'giraffe', 'honey', 'icecream', 'jacket',
    'kangaroo', 'lemon', 'mango', 'ninja', 'orange', 'pineapple', 'quilt', 'rabbit', 'strawberry', 'tiger',
    'umbrella', 'violin', 'watermelon', 'xylophone', 'yacht', 'zebra', 'airplane', 'beach', 'cactus', 'dolphin',
    'eagle', 'fireworks', 'guitar', 'hamburger', 'island', 'jungle', 'koala', 'lighthouse', 'moon', 'noodles',
    'ocean', 'penguin', 'queen', 'rainbow', 'sailboat', 'tornado', 'unicorn', 'volcano', 'whale', 'xylophone',
    'yoga', 'zeppelin', 'acorn', 'butterfly', 'cherry', 'daisy', 'elephant', 'feather', 'garden', 'honeybee',
    'igloo', 'jellyfish', 'kiwi', 'ladybug', 'mushroom', 'nutmeg', 'oak', 'pumpkin', 'quail', 'rose',
    'sunflower', 'tulip', 'violet', 'waterfall', 'xylophone', 'yarn', 'zebra', 'antelope', 'blueberry', 'cheese',
    'dandelion', 'elephant', 'firefly', 'gazelle', 'hedgehog', 'inchworm', 'jaguar', 'kangaroo', 'lizard', 'mantis',
    'narwhal', 'octopus', 'peacock', 'quokka', 'rhinoceros', 'scorpion', 'toucan', 'urchin', 'vulture',
    'walrus', 'yak', 'zebu'
];

var used_words_num = [];

var current_word;
var maintext = "";
var guessedWordsCounter = 0;
var errorCounter = 0;

var canvas = document.getElementById("maze");
var ctx = this.canvas.getContext("2d");
ctx.lineWidth = 10;

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawCircle(x, y, r) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setMainText() {
    document.getElementById("maintext").textContent = maintext;
}

function mainAlgo(char) {
    let guessed = false;
    for (let x = 0; x < current_word.length; ++x) {
        if (char == current_word[x]) {
            const charArr = maintext.split('');
            charArr[x] = char;
            maintext = charArr.join('');
            ++guessedWordsCounter;
            guessed = true;
        }
    }
    if (!guessed) {
        if (drawHangman() == false) {
            // LOSE
            endGame(false);
        }
    }
    setMainText();
    if (guessedWordsCounter == current_word.length) {
        // WIN
        endGame(true);
    }
}

function btnClick() {

    element = document.getElementById(this.id);
    
    if (element != null) {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.style.transform = "translate(2px, 2px)";
            element.style.boxShadow = color_1 + " 2px 2px 0 0";
            element.style.backgroundColor = color_0;
            mainAlgo(this.id);
        }
    }
    
}

function btnKeyClick(id) {
    element = document.getElementById(id);
    if (element != null) {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.style.transform = "translate(2px, 2px)";
            element.style.boxShadow = color_1 + " 2px 2px 0 0";
            element.style.backgroundColor = color_0;
            mainAlgo(id);
        }
    }
}

document.addEventListener('keydown', (event) => {
    let name = event.key;
    btnKeyClick(name.toUpperCase());
    if (name == "Enter") {
        if (document.getElementById("enter")) {
            onloadSite();
        }
    }
}, false);

function createButtons(str) {
    let btn = document.createElement("button");
    btn.id = str;
    btn.textContent = str;
    btn.classList.add("btn");
    btn.classList.add("active");
    btn.addEventListener('click', btnClick);

    document.getElementById("cont").appendChild(btn);
}

function onloadSite() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    document.getElementById("maintext").style.color = color_1;
    guessedWordsCounter = 0;
    errorCounter = 0;

    const elements = document.getElementsByClassName("btn");
    const elementsArr = Array.from(elements);
    elementsArr.forEach((element) => {
        element.parentNode.removeChild(element);
    })

    for (let x = 0; x < alphabet.length; ++x) {
        createButtons(alphabet[x]);
    }

    do {
        let temp = getRandomInt(words.length);
        used_words_num.push(temp)
        current_word = words[temp].toUpperCase();
        //console.log(used_words_num);
    } while (false)

    maintext = "";
    for (let x = 0; x < current_word.length; ++x) {
        maintext += "_";
    }

    setMainText();

    drawLine(50, 250, 250, 250);
    drawLine(90, 250, 90, 95);
    drawLine(90, 100, 155, 100);
    /*
    drawLine(150, 100, 150, 130);
    drawCircle(150, 150, 20);
    drawLine(150, 170, 150, 215);
    drawLine(150, 180, 130, 200);
    drawLine(150, 180, 170, 200);
    drawLine(150, 210, 130, 230);
    drawLine(150, 210, 170, 230);
    */
}

function endGame(win) {
    // Delete all buttons
    const elements = document.getElementsByClassName("btn");
    const elementsArr = Array.from(elements);
    elementsArr.forEach((element) => {
        element.parentNode.removeChild(element);
    })

    if (win) {
        document.getElementById("maintext").style.color = color_6;
    }
    else {
        document.getElementById("maintext").style.color = color_5;
        maintext = current_word;
        setMainText();
    }

    // Create "next word" button
    let btn = document.createElement("button");
    btn.textContent = "NEXT WORD";
    btn.id = "enter";
    btn.classList.add("btn");
    btn.classList.add("active");
    btn.addEventListener('click', onloadSite);
    document.getElementById("cont").appendChild(btn);
}

function drawHangman() {
    switch (errorCounter) {
        case 0:
            drawLine(150, 100, 150, 130);
            break;
        case 1:
            drawCircle(150, 150, 20);
            break;
        case 2:
            drawLine(150, 170, 150, 215);
            break;
        case 3:
            drawLine(150, 180, 130, 200);
            break;
        case 4:
            drawLine(150, 180, 170, 200);
            break;
        case 5:
            drawLine(150, 210, 130, 230);
            break;
        case 6:
            drawLine(150, 210, 170, 230);
            return false;
        default:
            return false;
    }

    ++errorCounter;
    return true;
}