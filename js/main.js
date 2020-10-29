$(document).ready(function() {

    // Ref
    var fiveAlertNumbers = randomNumbers(1, 50);
    

    // Ciclo alert con numeri random
    for(var i = 0; i < 5; i++) {
        alert(fiveAlertNumbers)
    }

    // Ciclo richieste utente
    


}); //  End of Jquery document

// Funzione generazione numeri random
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min +1 ) + min );
}   