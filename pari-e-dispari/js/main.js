'use strict';

function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

function checkParita(numero) {
    return numero % 2 === 0;
}

function partita() {
    const numeroUtente = parseInt(prompt('Scegli pari o dispari (1 per pari, 0 per dispari):'));
    const numeroComputer = generaNumero();

    const somma = numeroUtente + numeroComputer;
    const paritaSomma = checkParita(somma);

    if (paritaSomma) {
        alert('Parità somma: PARI. Computer ha vinto');
    } else {
        alert('Parità somma: DISPARI. Utente ha vinto');
    }
}

partita();

