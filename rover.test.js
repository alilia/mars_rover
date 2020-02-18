const expect = require('chai').expect
const Rover = require('./rover')

describe("Rover", () => {
	it("should be able to init", () => {
		new Rover([1, 1, 'N'], ['L', 'R', 'M'])
	})

	it("should be able to move", () => {
		var rover = new Rover([1, 1, 'N'], ['M'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(2)
		expect(rover.currentPos[2]).to.be.equal('N')

		rover = new Rover([1, 1, 'E'], ['M'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(2)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('E')

		rover = new Rover([1, 1, 'S'], ['M'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(0)
		expect(rover.currentPos[2]).to.be.equal('S')

		rover = new Rover([1, 1, 'W'], ['M'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(0)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('W')

	})

	it("should be able to turn right", () => {
		var rover = new Rover([1, 1, 'N'], ['R'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('E')

		rover = new Rover([1, 1, 'E'], ['R'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('S')

		rover = new Rover([1, 1, 'S'], ['R'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('W')

		rover = new Rover([1, 1, 'W'], ['R'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('N')
	})

	it("should be able to turn left", () => {
		var rover = new Rover([1, 1, 'N'], ['L'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('W')

		rover = new Rover([1, 1, 'W'], ['L'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('S')

		rover = new Rover([1, 1, 'S'], ['L'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('E')

		rover = new Rover([1, 1, 'E'], ['L'])
		rover.move(1)
		expect(rover.currentPos[0]).to.be.equal(1)
		expect(rover.currentPos[1]).to.be.equal(1)
		expect(rover.currentPos[2]).to.be.equal('N')
	})
})
