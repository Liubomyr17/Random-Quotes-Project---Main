(function() {
const quotes = [
{
    quote:
    "Life is too long and sweet to be spent by cribbing and complaining about things.",
    author: " Life"
},
    {
        quote:
            "Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things.",
        author: " Ivan"
    },
    {
        quote:
            "Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things.",
        author: " Maria"
    },
    {
        quote:
            "Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things.",
        author: " Vasil"
    },   
    {
        quote:
            "Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things. Life is too long and sweet to be spent by cribbing and complaining about things.",
        author: " Oksana"
    },

];


const btn = document.getElementById('generate-btn');
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    console.log(random);
    
document.getElementById('quote').textContent = quotes[random].quote;
document.querySelector(".author").textContent = quotes[random].author;


});
})();