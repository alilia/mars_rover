'use strict'
const assert = require('assert')

/**
 * Plateau object.
 */
class Plateau {
	/**
	 * Inits the object.
	 * @param {Array} size - A two-long Array, containing upper-right coordinates of the plateau.
	 */
	constructor(size) {
		this._plateauWidth = size[0]
		this._plateauHeigth = size[1]
	}

	/**
	 * Validates and sets plateau's width.
	 * @param {Number} width - Plateau's width
	 */
	set _plateauWidth(width) {
		width = parseInt(width)
		assert(width > 0, 'Invalid plateau width.')

		this._width = (width)
	}

	/**
	 * Validates and sets plateau's height.
	 * @param {Number} height - Plateau's height
	 */
	set _plateauHeigth(height) {
		height = parseInt(height)
		assert(height > 0, 'Invalid plateau height.')

		this._height = parseInt(height)
	}

	/**
	 * Tells, whether a coordinate is on the plateau.
	 * @param {Array} coord - A two-long Array.
	 * @returns {Boolean} - Is it or not.
	 */
	isValidLocation(coord) {
		return coord[0] <= this._width && coord[1] <= this._height
	}
}

module.exports = Plateau
