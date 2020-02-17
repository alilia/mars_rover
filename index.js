'use strict'
const assert = require('assert')

class Magic {
	constructor(input) {
		this._rawInput = input
		this.parseInput()
		this.moveRovers()
	}

	parseInput() {
		var parsedInput = this._rawInput.split('\n')
		assert(parsedInput.length % 2 != 0, "Some data is missing from the input")

		this._plateau = this.getPlateauCoordinates(parsedInput)
		this._rovers = this.getRovers(parsedInput)
	}

	getPlateauCoordinates(input) {
		// TODO validator
		input = input[0].split(' ')
		return [parseInt(input[0]), parseInt(input[1])]
	}

	getRovers(input) {
		// TODO validator
		input.shift()
		var rovers = []

		for (var i = 0; i < input.length / 2; i ++) {
			// TODO new Rover
			console.log(input[i * 2].split(' '))
			console.log(input[i * 2 + 1].split(''))
			rovers.push([])
		}

		return rovers
	}

	moveRovers() {
		this._rovers.forEach(rover => {
			// rover.move()
		})
	}

	get currentState() {
		this._rovers.forEach(rover => {
			// rover.currentPosition()
		})
	}
}

const testData = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

const app = new Magic(testData)
console.log(app.currentState)
