/* Exemplo 1 */
import {message, text} from './utils.js'

console.log(message, text)

/* Exemplo 2 */
import funcaoPadrao, {date, greeting} from './utils.js'

console.log(date)
console.log(greeting('Ed'))
funcaoPadrao('Jonas')


/* Exemplo 3 */
import { add as soma} from './utils.js'

console.log(soma(1, 2))


/* Exemplo 4 */
import * as calculator from './utils.js'

console.log(calculator.mutiply(7,9))
console.log(calculator.divide(480, 4))