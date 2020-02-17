class Plateau {
	constructor(size) {
		// TODO validator
		this._width = parseInt(size[0])
		this._height = parseInt(size[1])
	}

	isValidLocation(x, y) {
		return x <= this._width && y <= this._height
	}
}

module.exports = Plateau
