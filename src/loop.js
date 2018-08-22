import {Target} from './target'

const tau = Math.PI * 2
const minSize = 5
const maxSize = 30

let target
let cfg
let fps = 0

function updateFPS () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}
window.setInterval(updateFPS, 1000)

const defaultColor = 'black'

const render = () => {
  if (!target) {
    const size = (Math.random() * (maxSize - minSize)) + minSize
    target = new Target(
      Math.random() * cfg.width + size,
      Math.random() * cfg.height + size,
      size
    )
  }

  cfg.ctx.clearRect(0, 0, cfg.width, cfg.height)

  /* START DRAWING */
  cfg.ctx.strokeStyle = 'aquamarine'
  cfg.ctx.beginPath()
  cfg.ctx.arc(target.x, target.y, target.width, 0, tau)
  cfg.ctx.stroke()
  /* END DRAWING */

  cfg.ctx.fillStyle = defaultColor
  fps++
}

export function loop (_config) {
  if (!cfg) {
    cfg = _config
  }
  window.requestAnimationFrame(loop)

  render()
}
