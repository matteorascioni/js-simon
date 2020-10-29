$(document).ready(function() {
    // Ref
    var randomNumbersArray = [];
    var size = 5;

    while (randomNumbersArray.length < size) {
        var randomNumbers = getRandomNumbers(1, 50);

        if(! randomNumbersArray.includes(randomNumbers)) {
            randomNumbersArray.push(randomNumbers);
        }
        alert(randomNumbersArray);
    }   

    // countdown 30 sec
    var secondi = 30;

}); //  End of Jquery document

// Funzione generazione numeri random
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min +1 ) + min );
}   