
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('#new-quote');

const quotes = [{
    quote: '"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."',
    person:"Albert Einstein"
}, {
    quote: '"Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them."',
    person:"Vaibhav Shah"
}, {
    quote: '"The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart."',
    person:"Helen Keller"
}, {
    quote: '"The difference between winning and losing is most often not quitting."',
    person:"Walt Disney"
}, {
    quote: '"A successful man is one who can lay a firm foundation with the bricks others have thrown at him."',
    person:"David Brinkley"
}, {
    quote: '"The whole secret of a successful life is to find out what is one\'s destiny to do, and then do it."',
    person:"Henry Ford"
}, {
    quote: '"As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others."',
    person:"Audrey Hepburn"
}, {
    quote: '"The two most important days in your life are the day you are born and the day you find out why."',
    person:"Mark Twain"
},
]

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})