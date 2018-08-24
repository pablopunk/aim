import {Target} from './target'

const tau = Math.PI * 2
const minSize = 5
const maxSize = 30

let target
let state
let fps = 0
let mouse

function updateFPS () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}
window.setInterval(updateFPS, 1000)

const defaultColor = 'black'

window.addEventListener('mousedown', event => onMouseDown(getMousePositionFromCanvas(event, state.canvas)))

function onMouseDown ({x, y}) {
  mouse = {x, y}
  setTimeout(() => { mouse = null }, 100)
}

function getMousePositionFromCanvas (event, canvas) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX || event.touches[0].clientX
  const y = event.clientY || event.touches[0].clientY

  return {
    x: x - rect.left,
    y: y - rect.top
  }
}

const drawCircle = (ctx, x, y, width, color = 'white') => {
  state.ctx.strokeStyle = color
  state.ctx.beginPath()
  state.ctx.arc(x, y, width, 0, tau)
  state.ctx.stroke()
}

const render = () => {
  if (!target) {
    const radius = (Math.random() * (maxSize - minSize)) + minSize
    const diameter = radius * 2

    target = new Target(
      Math.random() * (state.width - diameter) + radius,
      Math.random() * (state.height - diameter) + radius,
      radius
    )
  }

  state.ctx.clearRect(0, 0, state.width, state.height)

  /* START DRAWING */
  drawCircle(state.ctx, target.x, target.y, target.width, 'aquamarine')

  if (mouse && target.touched(mouse.x, mouse.y)) {
    target = null
  }
  /* END DRAWING */

  state.ctx.fillStyle = defaultColor
  fps++
}

export function loop (_config) {
  if (!state) {
    state = _config
  }
  window.requestAnimationFrame(loop)

  render()
}
