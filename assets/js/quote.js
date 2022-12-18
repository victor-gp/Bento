// Function to set Quotes (as an alternative to Time & Greeting)

const now = today; // initialized in greeting.js

function touchLastShown(now) {
    localStorage.setItem('lastShown', now.toISOString());
}

function getLastShown() {
    const storageValue = localStorage.getItem('lastShown');
    if (storageValue === null) {
        // if never touched, the epoch will do
        return new Date(0);
    } else {
        return new Date(storageValue);
    }
}

function isQuoteTime(now) {
    const lastShown = getLastShown();

    // if 3h have passed since the last time, greet
    const elapsed = now - lastShown; // milliseconds
    const hourToMs = 1000 * 60 * 60;
    if (elapsed >= 3 * hourToMs) return false;

    // if the part of the day changed, greet
    //todo

    // else quote
    return true;
}

const timeBlock = document.getElementsByClassName('timeBlock')[0];
const quoteBlock = document.getElementsByClassName('quoteBlock')[0];
let timeBlockMode;

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

if (isQuoteTime(now)) {
    showQuoteBlock();
    const quotes = CONFIG.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const choosenQuote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = choosenQuote;
} else {
    showTimeBlock();
}

touchLastShown(now);
