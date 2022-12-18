// Function to set Quotes (as an alternative to Time & Greeting)

const now = today; // initialized in greeting.js

function touchLastShown(now) {
    localStorage.setItem('lastShown', now.toISOString());
}

function getLastShown() {
    const storageValue = localStorage.getItem('lastShown');
    if (storageValue !== null) {
        return new Date(storageValue);
    } else {
        // if unset, the epoch (0) should show timeBlock
        return new Date(0);
    }
}

function isQuoteTime(now) {
    const lastShown = getLastShown();

    // if 3h have passed since the last time, greet
    const elapsed = now - lastShown; // milliseconds
    const hourToMs = 1000 * 60 * 60;
    if (elapsed >= 3 * hourToMs) return false;

    // if the part of the day changed, greet
    const partThen = partOfTheDay(lastShown);
    const partNow = partOfTheDay(now);
    if (partThen != partNow) return false;

    // else quote
    return true;
}

function showQuoteBlock() {
    const timeBlock = document.getElementsByClassName('timeBlock')[0];
    timeBlock.classList.add("hidden");
    const quoteBlock = document.getElementsByClassName('quoteBlock')[0];
    quoteBlock.classList.remove("hidden");
}

if (isQuoteTime(now)) {
    showQuoteBlock();
    const quotes = CONFIG.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const choosenQuote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = choosenQuote;
}

touchLastShown(now);
