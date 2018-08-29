
import {Target} from './target'

const minSize = 20
const maxSize = 40

export function createTarget({width, height}) {
    const radius = (Math.random() * (maxSize - minSize)) + minSize
    const diameter = radius * 2

    return new Target(
      Math.random() * (width - diameter) + radius,
      Math.random() * (height - diameter) + radius,
      radius
    )
}
