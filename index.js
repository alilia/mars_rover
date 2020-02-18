'use strict'
const assert = require('assert')
const Plateau = require('./plateau')
const Rover = require('./rover')

/**
 * The main application handler.
 */
class Magic {
	/**
	 * Saves the whole input and executes all robots' all moves after parsing the input.
	 * @param {string} input - A multiline input contatining both plateau and rover information as described in spec.
	 */
	constructor(input) {
		this._rawInput = input
		this._parseInput()
		this.moveRovers()
	}

	/**
	 * Splits input by rows and inits a plateau based on the first row and rovers based on the rest rows.
	 */
	_parseInput() {
		var parsedInput = this._rawInput.split('\n')
		assert(parsedInput.length % 2 != 0, "Some data is missing from the input")

		this._plateau = this._getPlateau(parsedInput)
		this._rovers = this._getRovers(parsedInput)
	}

	/**
	 * Parses plateau's information.
	 * @param {Array} parsedInput - Upper-right coordinates of the plateau.
	 * @returns {Plateau}
	 */
	_getPlateau(parsedInput) {
		// TODO validator
		parsedInput = parsedInput[0].split(' ')
		return new Plateau([parseInt(parsedInput[0]), parseInt(parsedInput[1])])
	}

	/**
	 * Parses rovers' information.
	 * @param {Array} parsedInput - Recurring double lines of rover's initial coordinates (x, y, direction) and the to-be-executed commands.
	 * @returns {Array} - Array with Rover objects.
	 */
	_getRovers(parsedInput) {
		// TODO validator
		parsedInput.shift()
		var rovers = []

		for (var i = 0; i < parsedInput.length / 2; i ++) {
			rovers.push(new Rover(parsedInput[i * 2].split(' '), parsedInput[i * 2 + 1].split('')))
		}

		return rovers
	}

	/**
	 * Executes sequentially all rovers' all moves. Stops if the robot is off the plateau.
	 */
	moveRovers() {
		this._rovers.forEach(rover => {
			while(rover.move() && this._plateau.isValidLocation(rover.currentPos)) {}
			// TODO terminate rovers
		})
	}

	/**
	 * Returns the current location of all rovers.
	 * @returns {*} - TODO
	 */
	get currentState() {
		this._rovers.forEach(rover => {
			console.log(rover.currentPos)
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
