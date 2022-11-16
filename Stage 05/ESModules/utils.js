/* Exemplo 1 */
export const message = "mensagem" 
export const text = "outra mensagem"


/* Exemplo 2 */
const date = new Date()
const greeting = name => `hello ${name}`

export default function (argument) {
  console.log(date, greeting(argument))
}

export {date, greeting}


/* Exemplo 3 */
export function add(a, b) {
  return a + b
}


/* Exemplo 4 */
const sum = (a, b) => a + b
const mutiply = (a, b) => a * b
const subtract = (a, b) => a - b
const divide = (a, b) => a / b

export { sum, mutiply, subtract, divide}