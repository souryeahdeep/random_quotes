let quote=document.getElementById("quote");
let author=document.getElementById("author");
let btn=document.getElementById("btn");
const api_url='https://dummyjson.com/quotes/random';
let getQuote=(url)=>{
    fetch(api_url)
    .then((data)=>data.json())
    .then((item)=>{
        // console.log(item.quote);
        // console.log(item.author);
        quote.innerText=item.quote;
        author.innerText=item.author;
    })
}

window.addEventListener("load",getQuote);
btn.addEventListener("click", getQuote);