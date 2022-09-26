const quotes = [
    { quote: '자스자스', author: '김도영' },
    { quote: '자스자스1', author: '김도영' },
    { quote: '자스자스2', author: '김도영' },
    { quote: '자스자스3', author: '김도영' },
    { quote: '자스자스4', author: '김도영' },
    { quote: '자스자스5', author: '김도영' },
    { quote: '자스자스6', author: '김도영' },
    { quote: '자스자스7', author: '김도영' },
    { quote: '자스자스8', author: '김도영' },
    { quote: '자스자스9', author: '김도영' },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
