import _ from 'lodash'
import chalk from 'chalk'

const a = [1,3,4,5,6]
const b = [4,3,5,6,8,78,98]

const dif = _.difference(b,a)

console.log(`A diferença nos arrays a e b é: ${chalk.bgRed.bold(dif)}`)