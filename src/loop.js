let cfg
let fps = 0
function updateFPS () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}
window.setInterval(updateFPS, 1000)

const defaultColor = 'black'

const render = () => {
  cfg.ctx.clearRect(0, 0, cfg.width, cfg.height)

  /* START DRAWING */
  cfg.ctx.strokeStyle = 'aquamarine'
  cfg.ctx.beginPath()
  cfg.ctx.arc(cfg.width / 2.0, cfg.height / 2.0, 20, 0, 2 * Math.PI)
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
