const expect = require('chai').expect
const Magic = require('./magic')

describe("Application", () => {
	it("should be able to parse single input", () => {
		const testData = `5 5
1 2 N
LMLMLMLMM`

		new Magic(testData)
	})

	it("should be able to parse multiple inputs", () => {
		const testData = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

		new Magic(testData)
	})
})
