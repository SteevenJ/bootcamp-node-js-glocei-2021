//require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

console.log(getNotes())

console.log(validator.isEmail('carlos@gmail.com'))
console.log(validator.isURL('https://www.npmjs.com/package/validator'))

console.log(chalk.green('Hello world!'));