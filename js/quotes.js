const quotes = [
    {
        quote: "My God, my strength, in whom I will trust",
        author: "Psalms 18:2"
    },
    {
        quote: "You are all fair, my love, And there is no spot in you",
        author: "Song of Solomon 4:7"
    },
    {
        quote: "And whatever things you ask in prayer, believing, you will receive",
        author: "Matthew 21:22"
    },
    {
        quote: "And let the peace of God rule in your hearts, to which also you were called in one body; and be thankful",
        author: "Colossians 3:15"
    },
    {
        quote: "The steps of a good man are ordered by the LORD, And He delights in his way. Though he fall, he shall not be utterly cast down; For the LORD upholds him with His hand",
        author: "Psalms 37:23-24"
    },
    {
        quote: "Duc in Altum (into the Deep)",
        author: "Jesus Christ"
    },
    {
        quote: `This Book of the Law shall not depart from your mouth, but you shall meditate in it day and night, 
        that you may observe to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success`,
        author: "Joshua 1:8"
    },
    {
        quote: "To those who have everything, more will be given; from those who have nothing, everything will be taken",
        author: "Matthew Effect"
    },
    {
        quote: "What does not destroy me, makes me stronger",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "You need to place on foot in what you have mastered and understood and the other in what you are currently exploring and mastering",
        author: "Jordan B. Peterson"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];
 
quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;
