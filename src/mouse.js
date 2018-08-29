let mouse

function onMouseDown ({x, y}) {
  mouse = {x, y}
}

export function initMouse (canvas) {
  window.addEventListener('mousedown', event => onMouseDown(getMousePositionFromCanvas(event, canvas)))
}

export function getMouse () {
  return mouse
}

export function resetMouse () {
  mouse = null
}

export function getMousePositionFromCanvas (event, canvas) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX || event.touches[0].clientX
  const y = event.clientY || event.touches[0].clientY

  return {
    x: x - rect.left,
    y: y - rect.top
  }
}
