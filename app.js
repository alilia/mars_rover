'use strict'
const Magic = require('./magic')

const testData = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

const app = new Magic(testData)
console.log(app.currentState)
