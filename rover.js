'use strict'
const assert = require('assert')

/**
 * Rover object.
 */
class Rover {
	/**
	 * Inits a rover objects, sets default values and parameters.
	 * @param {Array} init - An array of default position (x, y, direction)
	 * @param {Array} moves - An array of moves (possible values: L, R, M)
	 */
	constructor(init, moves) {
		this._possibleDirs = [
			'N', [0, 1],
			'E', [1, 0],
			'S', [0, -1],
			'W', [-1, 0]
		]

		this._posX = init[0]
		this._posY = init[1]
		this._dir = init[2]
		this._moves = moves
	}

	/**
	 * Validates and sets current X position of rover.
	 * @param {Number} x - Rover's X position
	 */
	set _posX(x) {
		x = parseInt(x)
		assert(x > 0, 'x is invalid size')

		this._currentPosX = x
	}

	/**
	 * Validates and sets current Y position of rover.
	 * @param {Number} x - Rover's Y position
	 */
	set _posY(y) {
		y = parseInt(y)
		assert(y > 0, 'y is invalid size')

		this._currentPosY = y
	}

	/**
	 * Validates and sets current heading of rover.
	 * @param {String} x - Rover's direction
	 */
	set _dir(dir) {
		var dirSet = false

		for (var i = 0; i < this._possibleDirs.length / 2; i++) {
			if (this._possibleDirs[i * 2] == dir) {
				this._currentDir = i
				dirSet = true
			}
		}

		assert(dirSet, "Invalid rover heading.")
	}

	/**
	 * Validates and sets left moves for rover.
	 * @param {Array} moves - An array of to-be-executed moves
	 */
	set _moves(moves) {
		// TODO normalize input
		moves.forEach(move => {
			assert(['L', 'R', 'M'].indexOf(move) > -1, "Invalid move.")
		})
		this._leftMoves = moves
	}

	/**
	 * Executes 'steps' amount of next moves.
	 * @param {Number} steps - Number of to-be-executed steps (default: 1)
	 * @returns {Boolean} - Whether robot performed a move
	 */
	move(steps) {
		if (steps == null) steps = 1
		var robotMoved = false

		while (steps > 0 && this._leftMoves.length > 0) {
			robotMoved = true

			switch(this._leftMoves.shift()) {
				case 'L':
					if (this._currentDir == 0)
						this._currentDir = this._possibleDirs.length / 2 - 1
					else
						this._currentDir--
					break
				
				case 'R':
					if (this._currentDir < this._possibleDirs.length / 2 - 1)
						this._currentDir++
					else
						this._currentDir = 0
					break

				case 'M':
					// TODO validator
					var moves = this._possibleDirs[this._currentDir * 2 + 1]
					this._currentPosX += moves[0]
					this._currentPosY += moves[1]
					break
			}

			steps--
		}

		return robotMoved
	}

	/**
	 * Tells current position of rover.
	 * @returns {Array} - A three-long Array, containing x, y and dir of the rover
	 */
	get currentPos() {
		return [this._currentPosX, this._currentPosY, this._possibleDirs[this._currentDir * 2]]
	}
}

module.exports = Rover
