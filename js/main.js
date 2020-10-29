$(document).ready(function() {
    // Ref
    var randomNumbersArray = [];
    var size = 5;

    while (randomNumbersArray.length < size) {
        var randomNumbers = getRandomNumbers(1, 50);

        if(! randomNumbersArray.includes(randomNumbers)) {
            (randomNumbersArray.push(randomNumbers));
        }
    }   
        alert(randomNumbersArray);

    // countdown 30 sec
    var display = $('.display');

    var secondi = 30;

    var interval = setInterval(function() {
        if(secondi == 0) {
            display.text(secondi);

        } else {
            display.text(secondi);
            secondi--;
        }
    }, 1000);

    // Richiesta utente
    for (var i = 0; i < 5; i++) {
        var richiestaUtente = parseInt(prompt('Hai 30 sec per inserire i numeri che hai appena visto'));    
    }


















}); //  End of Jquery document

// Funzione generazione numeri random
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min +1 ) + min );
}   