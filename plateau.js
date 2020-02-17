class Plateau {
	constructor(size) {
		// TODO validator
		this._width = parseInt(size[0])
		this._height = parseInt(size[1])
	}

	isValidLocation(coord) {
		return coord[0] <= this._width && coord[1] <= this._height
	}
}

module.exports = Plateau
