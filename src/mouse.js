let mouse

function onMouseDown ({ x, y }) {
  mouse = { x, y }
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

function initMouse (canvas) {
  window.addEventListener('mousedown', event => onMouseDown(getMousePositionFromCanvas(event, canvas)))
}

function getMouse () {
  return mouse
}

function resetMouse () {
  mouse = null
}

module.exports = { getMousePositionFromCanvas, initMouse, getMouse, resetMouse }
