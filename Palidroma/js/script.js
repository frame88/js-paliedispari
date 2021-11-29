/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione)
*/


/*
1. ciclo for che itera sulle lettere
2. fino a quando la i non è == alla length della stringa
3. se la i è uguale alla word[word.length-i], ovvero la lettera che sto considerando è uguale alla sua simmetrica
4. allora continua (qui vorrei proprio usare il break)
*/

let word = prompt('inserisci una parola: ');
let exercise = palindroma(word);
console.log(exercise);

function palindroma(par1) {
    
    let acc = 0;
    for (let i = 0; i < par1.length; i++) {
        if (par1[i] == par1[par1.length - (i + 1)]) {
            acc += 1;
        }
    }
    
    let esito = ' ';
    if (acc == par1.length) {
        esito = 'palindroma';
        }
    else {
        esito = 'non è palindroma';
    }
    return esito;
}







