const assert = require('assert')

class Rover {
	constructor(init, moves) {
		this._possibleDirs = [
			'N', [0, 1],
			'E', [1, 0],
			'S', [0, -1],
			'W', [-1, 0]
		]

		// TODO validator
		this._currentPosX = parseInt(init[0])
		this._currentPosY = parseInt(init[1])
		for (var i = 0; i < this._possibleDirs.length / 2; i++) {
			if (this._possibleDirs[i * 2] == init[2])
				this._currentDir = i
		}

		// TODO validator
		this._leftMoves = moves
	}

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

	get currentPos() {
		return [this._currentPosX, this._currentPosY, this._possibleDirs[this._currentDir * 2]]
	}
}

module.exports = Rover
