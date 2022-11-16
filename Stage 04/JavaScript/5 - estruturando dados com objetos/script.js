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

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)

