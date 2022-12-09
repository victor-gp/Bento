// Function to set Quotes (as an alternative to Greetings)

if (!doGreeting) {
    const quotes = CONFIG.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const choosenQuote = quotes[randomIndex];

    document.getElementById('greetings').innerHTML = choosenQuote;
}
