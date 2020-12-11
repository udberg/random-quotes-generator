
$(document).ready(function() {

  });

// Array of quote's object. Object has two fields: qt is quote, at is author.
const quotes = [
  {qt: "So many books, so little time.",
   at: "Frank Zappa"},
  {qt: "A room without books is like a body without a soul.",
   at: "Marcus Tullius Cicero"},
  {qt: "I have always imagined that Paradise will be a kind of library.",
   at: "Jorge Luis Borges"},
  {qt: "You can never get a cup of tea large enough or a book long enough to suit me.",
   at: "C.S. Lewis"},
  {qt: "There is no friend as loyal as a book.",
   at: "Ernest Hemingway"},
  {qt: "Books are a uniquely portable magic.",
   at: "Stephen King"},
  {qt: "Sleep is good, he said, and books are better.",
   at: "George R.R. Martin"},
  {qt: "When I have a little money, I buy books; and if I have any left, I buy food and clothes.",
   at: "Erasmus"},
  {qt: "Make it a rule never to give a child a book you would not read yourself.",
   at: "George Bernard Shaw"},
  {qt: "Where is human nature so weak as in the bookstore?",
   at: "Henry Ward Beecher"},
  {qt: "I cannot live without books.",
   at: "Thomas Jefferson"},
  {qt: "Good books don't give up all their secrets at once.",
   at: "Stephen King"},
  {qt: "Books may well be the only true magic.",
   at: "Alice Hoffman"},
  {qt: "If you have a garden and a library, you have everything you need.",
   at: "Marcus Tullius Cicero"},
  {qt: "Books are the mirrors of the soul.",
   at: "Virginia Woolf"},
  {qt: "Reading one book is like eating one potato chip.",
   at: "Diane Duane"},
  {qt: "but for my own part, if a book is well written, I always find it too short.",
   at: "Jane Austen"},
  {qt: "A classic is a book that has never finished saying what it has to say.",
   at: "Italo Calvino"},
  {qt: "I do things like get in a taxi and say, \"The library, and step on it.\"",
   at: "David Foster Wallace"},
  {qt: "If a book about failures doesn't sell, is it a success?",
   at: "Jerry Seinfeld"},
  {qt: "There is no mistaking a real book when one meets it. It is like falling in love.",
   at: "Christopher Morley"}
]

// To generate random bacground color, using light colors (we don't want dark ones)
function getRandomColor() {
  color = "hsl(" + Math.random() * 360 + ", 70%, 55%)";
  return color;
}

function getNewQuote() {
    $.ajax({
           type: "POST",
           url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
           dataType: "json",
           success: function (response) {
               let oldquote = document.getElementById("text");
               oldquote.innerHTML=response[0].quote;
               let oldaut = document.getElementById("author");
               oldaut.innerHTML=response[0].author;
           },
           beforeSend: setHeader,
           error: function (error) {
             let maxQuotes = quotes.length;
             let randomNumber = Math.floor(Math.random() * maxQuotes);
             let oldquote = document.getElementById("text");
             oldquote.innerHTML=quotes[randomNumber].qt;
             let oldaut = document.getElementById("author");
             oldaut.innerHTML=quotes[randomNumber].at;
           }
     });

    function setHeader(xhr) {
       xhr.setRequestHeader("X-Mashape-Key", "QiiHG142NpmshkjPEPYgY0SXy3ePp1eHEmvjsneefDXdDZ9Cpo");
       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       xhr.setRequestHeader("Accept", "application/json");
     }

  let newColor = getRandomColor();
  let butColor = document.getElementsByClassName('quote-buttons');
  for(i=0; i < butColor.length; i++) {
    butColor[i].style.backgroundColor = newColor;
  }
  document.body.style.backgroundColor = newColor;
}

function setListeners() {
  // add event listener to click button
  var el = document.getElementById("new-quote");
  el.addEventListener("click", getNewQuote, false);
  getNewQuote();
}

window.addEventListener("load", function(event) {
  setListeners();
  console.log("All resources finished loading!");
});
