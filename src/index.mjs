import add from './modules/add.mjs'

// // function namn på function (hur många saker vi tar emot)
// function hello(ett, two) {
//     // spottar ut resultat
//     // return 4000
// }
// // variablen result = resultat av function spottar ut
// const result = hello("hej")

// function consolelog(text) {
//     console.log(text)
//     return text
// }
// const result2 = consolelog("hej3")

// console.log(result2)

// gör 3 funktioner, fn1 fn2,fn3
// fn1 ska ta e emot en siffra, fn2 2, fn3 3
// fn1 ska inte returna nåt
// fn2 ska returna 7
// fn3 ska returna summan av alla siffror den tar emot

// Vad en funktion tar emot
// Vad en funktion RETURNAR
// Vad vi skickar in i funktionen

function fn2(number1, number2, number3, number4) {
  console.log(number2)

  return number3
}
const array = []
function inskickaren(bajs, bajs2, bajs3, bajs4, bajs5, bajs6) {
  console.log(bajs)
  return 1337
}

const kurwa = inskickaren(10, 20, 30, 40, 50, 60)
const kurwa2 = inskickaren(1, 2, 3, 4, 5, 6)

const myObject = {
  array1: [1, 3, 3, 7],
  number: 7,
  string: 'hello',
  booleanTrue: true,
  array2: [1, 3, 3, 7],
  booleanFalse: false,
}

function booleanChanger(booleanInput) {
  if (booleanInput === true) {
    return false
  }
}

const result = booleanChanger(myObject.booleanTrue)
const result2 = booleanChanger(myObject.booleanFalse)

function eli(kurwa) {
  if (kurwa <= 3) {
    return kurwa + 1
  }
  return kurwa * 10
}

const result3 = eli(10)
// var arrayk1 = ["Cecilie", "Lone"];
// var arrayk2 = ["Emil", "Tobias", "Linus"];
// var combinate = arrayk1.concat(arrayk2);

arrayk1 = []

for (i = 0; i <= 10; i++) {
  arrayk1.push(i)
  arrayk1[i] = arrayk1[i] * 2
}

console.log(arrayk1)

// brb ska göra en macka
