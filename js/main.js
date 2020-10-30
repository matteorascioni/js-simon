$(document).ready(function() {
    // Array 5 numeri alert
    var randomNumbersArray = [];
    var size = 5;

    while (randomNumbersArray.length < size) {
        var randomNumbers = getRandomNumbers(1, 50);

        if(! randomNumbersArray.includes(randomNumbers)) {
            (randomNumbersArray.push(randomNumbers));
        }
    }  
    alert(randomNumbersArray);

    // Countdown 30 sec
    var secondi = 3000;

    setTimeout(function(){
        var usersNumbers = [];

        while(usersNumbers.length < size) {
            var newUsersNumber = parseInt(prompt('Inserisci il ' + (usersNumbers.length + 1) + 'numero' ) );

            while (isNaN(NewUsersNumber)) {
                newUsersNumber = parseInt(prompt('Numero invalido, Inserisci il ' + (usersNumbers.length + 1) + 'numero' ) );
            }

            // Univocità
            if(! usersNumbers.includes(newUsersNumber)) {
                usersNumbers.push(newUsersNumber);
            } else {
                alert('numero già inserito');
            }

            // Collezione di numeri giusti
            var numeriGiusti = [];

            for (var i = 0; i < usersNumbers.length; i++) {
                if(randomNumbersArray.includes(usersNumbers[i])) {
                    numeriGiusti.push(usersNumbers);
                }
            }

            // risultati
            alert('Risultati\n' + 
                  'Lista proposta\n' + randomNumbersArray +
                  '\nLista Utente ' + usersNumbers + 
                  '\nIndovinati' + numeriGiusti.length + ' numeri\n' + numeriGiusti); 
        }   
    },secondi);
}); //  End of Jquery document

// Funzione generazione numeri random
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min +1 ) + min );
}   