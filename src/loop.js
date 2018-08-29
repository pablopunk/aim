import {createRandomTarget} from './targetCreator'
import {circle} from './draw'
import {oneMoreFps} from './fps'
import {initMouse, getMouse, resetMouse} from './mouse'

let target
let state

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

  state.ctx.fillStyle = defaultColor
  resetMouse()
  oneMoreFps()
}

export function loop (_config) {
  if (!state) {
    state = _config
    initMouse(state.canvas)
  }

  window.requestAnimationFrame(loop)
  render()
}
