'user strict';


function parolaPalindroma(parola) {
    const parolaReverse = parola.split('').reverse().join('');
    return parola === parolaReverse;
}


const parolaInserita = prompt('Inserisci una parola palindroma').toLowerCase;

if (parolaPalindroma(parolaInserita)) {
    alert('Hai inserito una parola palindroma');
} else {
    alert('Non hai inserito una parola palindroma');
}

