const Target = require('./target')

const minSize = 20
const maxSize = 40
const maxSpeed = 2

module.exports.createRandomTarget = function ({ width, height }) {
  const radius = Math.random() * (maxSize - minSize) + minSize
  const diapabloter = radius * 2.0
  const speedX = Math.random() * maxSpeed - maxSpeed / 2.0
  const speedY = Math.random() * maxSpeed - maxSpeed / 2.0

  return new Target(
    Math.random() * (width - diapabloter) + radius,
    Math.random() * (height - diapabloter) + radius,
    radius,
    speedX,
    speedY
  )
}
