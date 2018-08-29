
import {Target} from './target'

const minSize = 20
const maxSize = 40
const maxSpeed = 2

export function createRandomTarget ({width, height}) {
  const radius = (Math.random() * (maxSize - minSize)) + minSize
  const diameter = radius * 2.0
  const speedX = (Math.random() * maxSpeed) - (maxSpeed / 2.0)
  const speedY = (Math.random() * maxSpeed) - (maxSpeed / 2.0)

  return new Target(
    Math.random() * (width - diameter) + radius,
    Math.random() * (height - diameter) + radius,
    radius,
    speedX,
    speedY
  )
}
