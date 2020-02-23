`use strict`
let randomNumber = Math.floor(Math.random() * 10) + 1;
let play = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myTry = 0

console.log(randomNumber);

// class Player {
//     constructor() {
//         this.toLow = toLow;
//         this.toHigh = toHigh;
//         this.exact = exact;
//     }
// }

// class Number {
//     constructor() {
//         this.guessNumber = [];
//     }
//     choseNumber(toLow, toHigh) { }
// }

function guess(rnd, play, ) {
    // max = play.length - 1
    let a = play;
    let myShots = [];
    let checker = a[(Math.floor((a.length) / 2))];


    if (checker === rnd) {
        myShots.push(checker)
        return `you win ${myShots} ${a}`;
    } else if (checker > rnd) {
        a.splice((a.indexOf(checker)), (a.length - a.indexOf(checker)));
        myShots.push(checker)
        return `to high ${myShots} ${a}`;
    } else {
        a.splice(0, (a.indexOf(checker)) + 1);
        myShots.push(checker)
        return `to low ${myShots} ${a}`;
    }


};



console.log(guess(randomNumber, play));

