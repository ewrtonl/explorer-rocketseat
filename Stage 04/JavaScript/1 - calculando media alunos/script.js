let noteOne = prompt("First grade: ")
let noteTwo = prompt("Second grade: ")
let noteThree = prompt("Third grade: ")

const finalGrade = (Number(noteOne) + Number(noteTwo) + Number(noteThree)) / 3

if (finalGrade >= 6) {
  alert(`Congratulations! you are approved with final grade ${finalGrade}.`)
}
else {
  alert(`Unfortunately you were not approved. Try your best in the recovery test.`)
}