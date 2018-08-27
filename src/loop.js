import {createTarget} from './targetCreator'
import {circle} from './draw'
import {fps, oneMoreFps} from './fps'
import {initMouse} from './mouse'

let target
let state
let mouse

const defaultColor = 'black'

function onMouseDown ({x, y}) {
  mouse = {x, y}
  console.log(mouse, target)
  setTimeout(() => { mouse = null }, 100)
}


const render = () => {
  if (!target) {
    target = createTarget(state);
  }

  state.ctx.clearRect(0, 0, state.width, state.height)

  /* START DRAWING */
  circle(state.ctx, target.x, target.y, target.width, 'aquamarine')
  /* END DRAWING */

  if (mouse && target.touched(mouse.x, mouse.y)) {
    target = null
  }
  state.ctx.fillStyle = defaultColor
  oneMoreFps()
}

export function loop (_config) {
  if (!state) {
    state = _config
    initMouse(onMouseDown, state.canvas)
  }
  window.requestAnimationFrame(loop)

  render()
}
