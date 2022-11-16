const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber
let xAttempts = 1;

numberGenerator()

// eventos
btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function(event){
  if(event.key == 'Enter') {
    handleResetClick()
  }
})

// funções callback
function handleTryClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} vezes`
  }

  inputNumber.value = ""
  xAttempts++
  
}

function handleResetClick() {
  toggleScreen()
  numberGenerator()
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function numberGenerator() {
  randomNumber = Math.round(Math.random() * 10)
}