const quotes = [
    {
        quote : "1q",
        author: "1a",
    },
    {
        quote : "2q",
        author: "2a",
    },
    {
        quote : "3q",
        author: "3a",
    },
    {
        quote : "4q",
        author: "4a",
    },
    {
        quote : "5q",
        author: "5a",
    },
    {
        quote : "6q",
        author: "6a",
    },
    {
        quote : "7q",
        author: "7a",
    },
    {
        quote : "8q",
        author: "8a",
    },
    {
        quote : "9q",
        author: "9a",
    },
    {
        quote : "10q",
        author: "10a",
    },
];

const quote =document.querySelector("#quotes span:first-child");
const author =document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText =todaysQuote.author;