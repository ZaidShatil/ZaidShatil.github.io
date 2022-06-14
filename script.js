const text = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");

const getNewQuote = async () => {

    var url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    const quotes = await response.json();

    const index = Math.floor(Math.random() * quotes.length);

    const quote = quotes[index].text;

    const auth = quotes[index].author;

    if (auth == null) {
        author = "Anonymous";
    }

    text.innerHTML = quote;
    author.innerHTML = "~ " + auth;

}
getNewQuote()

function red() {
    document.getElementById('box').style.backgroundColor = "red";
}

function green() {
    document.getElementById('box').style.backgroundColor = "green";
}

function blue() {
    document.getElementById('box').style.backgroundColor = "blue";
}

function yellow() {
    document.getElementById('box').style.backgroundColor = "yellow";
}
