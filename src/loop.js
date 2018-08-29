import {createRandomTarget} from './targetCreator'
import {circle} from './draw'
import {oneMoreFps} from './fps'
import {initMouse, getMouse, resetMouse} from './mouse'
import {Bounds} from './bounds'

let target
let state
let bounds

const defaultColor = 'black'

const render = () => {
  if (!target) {
    target = createRandomTarget(state)
  }

  state.ctx.clearRect(0, 0, state.width, state.height)

  /* START DRAWING */
  circle(state.ctx, target.x, target.y, target.width, 'aquamarine')
  /* END DRAWING */

  const mouse = getMouse()
  if (mouse && target.touched(mouse.x, mouse.y)) {
    target.shrink()
    if (target.dead()) {
      target = null
    }
  }

  target.delta()
  target = bounds.check(target)

  state.ctx.fillStyle = defaultColor
  resetMouse()
  oneMoreFps()
}

export function loop (_config) {
  if (!state) {
    state = _config
    initMouse(state.canvas)
    bounds = new Bounds(state)
  }

  window.requestAnimationFrame(loop)
  render()
}
