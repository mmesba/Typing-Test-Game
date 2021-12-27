/*
 * Title: Typing Test's JS file
 * Description: Main Js file for index.ejs
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 27/12/2021
 */

// require api link
const   Quote_Url = 'http://api.quotable.io/random';

const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer')


// Add event listener to check provided quotes character and my input character when match or not. 
quoteInputElement.addEventListener('input', ()=>{
    const arrayOfQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayOfValue = quoteInputElement.value.split('');
  
    // define correct variable to trace nothing incorrect left
    let correct = true;

    arrayOfQuote.forEach((characterSpan, index)=>{
        const character = arrayOfValue[index];
        // now check exact match or not
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }else if(character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
          
        } else {
           characterSpan.classList.remove('correct')
           characterSpan.classList.add('incorrect') 
           correct = false
        }
    })
    if(correct) {
        renderNewQuote()
    }
})

// Getting quotes using fetch api
function getQuotes() {
  return  fetch(Quote_Url)
        .then(response => response.json())
        .then(data => data.content)
}

// Next quote generator function
async function renderNewQuote() {
    const quote = await getQuotes();
    // push new quote in display quote element
    quoteDisplayElement.innerText = '';
    // split quote and create span for every single character and append that in mother quoteDisplayElement
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    });
    quoteInputElement.value = null;
    // Call start timer function
    startTimer()

}

// Setup second counter
let startTime;
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000);
}

function getTimerTime() {
    return Math.floor((new Date() - startTime)    / 1000)
}


renderNewQuote()
