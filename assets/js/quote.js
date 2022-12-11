// Function to set Quotes (as an alternative to Time & Greeting)

const timeBlock = document.getElementsByClassName('timeBlock')[0];
const quoteBlock = document.getElementsByClassName('quoteBlock')[0];
var timeBlockMode;

function showTimeBlock() {
    quoteBlock.classList.add("hidden");
    timeBlock.classList.remove("hidden");
    timeBlockMode = true;
}

function showQuoteBlock() {
    timeBlock.classList.add("hidden");
    quoteBlock.classList.remove("hidden");
    timeBlockMode = false;
}

if (!doGreeting) {
    showQuoteBlock();
    const quotes = CONFIG.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const choosenQuote = quotes[randomIndex];

    document.getElementById("quote").innerHTML = choosenQuote;
}
