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
let acc = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] == word[word.length - (i + 1)]) {
        acc += 1;
   }
}

if (acc == word.length) {
    console.log('palindroma');
}
else {
    console.log('non è palindroma');
}
