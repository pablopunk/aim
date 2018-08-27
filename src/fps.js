let fps = 0

export function renderFps () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}

export function oneMoreFps () {
  fps++
}

window.setInterval(renderFps, 1000)
