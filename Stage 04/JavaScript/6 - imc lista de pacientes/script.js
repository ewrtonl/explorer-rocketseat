const patients = [
  {
    name: 'Tom',
    age: 23,
    weight: 65,
    height: 175
  },
  {
    name: 'Barbara',
    age: 27,
    weight: 60,
    height: 165
  },
  {
    name: 'Angel',
    age: 20,
    weight: 80,
    height: 180
  }
]

let patientsNames = []
let patientsAges = []
let patientsWeight = []
let patientsHeight = []
let patientsIMC = []

for (let i = 0; i < patients.length; i++) {
  patientsNames[i] = patients[i].name
  patientsAges[i] = patients[i].age
  patientsWeight[i] = patients[i].weight
  patientsHeight[i] = patients[i].height

  /*patientsIMC[i] = (patientsWeight[i] / ((patientsHeight[i] / 100) **2)).toFixed(2)*/

  patientsIMC[i] = imc(patientsWeight[i], patientsHeight[i])

  alert(`Paciente ${patientsNames[i]} possui o IMC de: ${patientsIMC[i]}`)
}

function imc(x, y) {
  return (x / (y / 100) ** 2).toFixed(2)
}
