/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
    (corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/

/*
1. sceglierer pari o dispari
2. inserisce un numero da 1 a 5
3. generiamo un numero random(1,5) per il pc
4.sommiamo random a Number
dichiariamo chi ha vinto
*/

let type = prompt('preferisci i pari o i dispari? ');
let number = parseInt(prompt('inserisci un numero compreso tra 1 e 5: '));;
giocajouer(type,number);

function giocajouer(par1, par2) {  
    let numberpc = Math.floor(Math.random() * 5) + 1;
    if ((par2 + numberpc) % 2 == 0) {
        if (par1 == 'pari') {
            console.log('hai vinto');
        }
        else {
            console.log('ha vinto il pc')
        }
    }
    else {
        if (par1 == 'dispari') {
            console.log('hai vinto');
        }
        else {
            console.log('ha vinto il pc')
        }
    }
}