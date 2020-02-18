'use strict'

/**
 * Plateau object.
 */
class Plateau {
	/**
	 * Inits the object.
	 * @param {Array} size - A two-long Array, containing upper-right coordinates of the plateau.
	 */
	constructor(size) {
		// TODO validator
		this._width = parseInt(size[0])
		this._height = parseInt(size[1])
	}

	/**
	 * Tells, whether a coordinate is on the plateau.
	 * @param {Array} coord - A two-long Array.
	 * @returns {Bool} - Is it or not.
	 */
	isValidLocation(coord) {
		return coord[0] <= this._width && coord[1] <= this._height
	}
}

module.exports = Plateau
