const theNumber = Math.round(Math.random() * 10)

let userNumber = prompt("Guess the number: (Between 0 and 10)")
let tries = 1;

while (Number(userNumber) != theNumber) {
  userNumber = prompt("Wrong awnser... try again")
  tries++
}

alert(`You did it! The number was ${theNumber}. You guessed it in ${tries} tries`)
