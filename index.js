let quotes = [];

fetch("./index.json")
    .then(response => response.json())
    .then(data => {
        quotes = data;
    });

let button = document.querySelector("#generate");
let author = document.querySelector("#author");
let quote = document.querySelector("#quote");

button.addEventListener("click", () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    if (!random) return;

    quote.innerText = random.quote;
    author.innerText = random.author;
});