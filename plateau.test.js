const expect = require('chai').expect
const Plateau = require('./plateau')

describe("Plateau", () => {
	it("should be able to init", () => {
		const plateau = new Plateau([1, 1])
	})

	it.skip("should have only one rover on a coordinate", () => {})
})
