/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

var quotes = [
  {
    quote:"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source:"Patrick McKenzie",
    year:2016,
    citation:"Twitter",
    category:"Motivation"
  },
  {
    quote:"A friend is someone who gives you total freedom to be yourself.",
    source:"Jim Morrison",
    category:"Friendship"
  },
  {
    quote:"Don't cry because it's over, smile because it happened.",
    source:"Dr. Seuss",
    citation:"goodreads",
    category:"Happiness"
  },
  {
    quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    source:"Bernard M. Baruch",
    citation:"goodreads"
  },
  {
    quote:"Live fast, die young and have a good-looking corpse!",
    source:"John Derek",
    year:1949,
    citation:"Knock On Any Door"
  },
  {
    quote:"You put more value on every minute...You know I always kinda thought I did that. I really always enjoyed myself. But it’s more valuable now. You’re reminded to enjoy every sandwich and every minute.",
    source:"Warren Zevon",
    year:2002,
    citation:"Late Show with David Letterman"
  }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
  returns a string with a random rgb
***/

function getRandomColor(){
  var randomColor = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";

  return randomColor;
}


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  var quoteString = "";
  var randomQuote = getRandomQuote();

  //test if the random quote is the same as the current quote, if so get another random quote
  while(randomQuote.quote === document.getElementsByClassName("quote")[0].innerHTML){
    randomQuote = getRandomQuote();
  }



  quoteString = "<p class=\"quote\">" + randomQuote.quote + "</p>" + "<p class=\"source\">" + randomQuote.source;
  //make sure property is present before trying to add it to the string
  if(randomQuote.hasOwnProperty('citation')){
    quoteString += "<span class=\"citation\">" + randomQuote.citation + "</span>";
  }
  //make sure property is present before trying to add it to the string
  if(randomQuote.hasOwnProperty('year')){
    quoteString += "<span class=\"year\">" + randomQuote.year + "</span>";
  }
  if(randomQuote.hasOwnProperty('category')){
    quoteString += "<span class=\"category\">, " + randomQuote.category + "</span>";
  }
  quoteString += "</p>";
  //add the quote and its properties to the DOM
  document.getElementById('quote-box').innerHTML = quoteString;
  //change the color of the background and the button
  changeColor();
}

//color change func
function changeColor(){
  var randomColor = getRandomColor()
  //change colour, using same colour for body and button for asthetic purposes
  document.body.style.background = randomColor;
  document.getElementById("loadQuote").style.background = randomColor;
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//quote change timed func
setInterval(function(){printQuote()}, 20000);



// Remember to delete the comments that came with this file, and replace them with your own code comments.
