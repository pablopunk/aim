let fps = 0

export function fps () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}

export function oneMoreFps() {
  fps++
}

window.setInterval(fps, 1000)
